import { useEffect, useState } from "react";

import DestinationCard from "./DestinationCard";

import { getProfile } from "../../services/userService";
import { getDestinations } from "../../services/destinationService";

const API_BASE_URL = "http://localhost:5001";

/*
 * Converts backend image values into usable image URLs.
 */
function createImageUrl(imageValue) {
  if (!imageValue) return "";

  const image =
    typeof imageValue === "object"
      ? imageValue.url ||
        imageValue.secure_url ||
        imageValue.path
      : imageValue;

  if (!image || typeof image !== "string") {
    return "";
  }

  // Already a complete or browser-supported URL
  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("data:") ||
    image.startsWith("blob:")
  ) {
    return image;
  }

  // Backend-relative image path
  return `${API_BASE_URL}${
    image.startsWith("/") ? image : `/${image}`
  }`;
}

/*
 * Supports different possible image field names.
 */
function getDestinationImage(place) {
  const firstImage = Array.isArray(place?.images)
    ? place.images[0]
    : place?.images;

  const imageValue =
    place?.heroImage ||
    place?.image ||
    place?.imageUrl ||
    place?.thumbnail ||
    place?.coverImage ||
    firstImage;

  return createImageUrl(imageValue);
}

function getDestinationId(place) {
  return String(place?._id || place?.id || "");
}

/*
 * Converts saved/favourite values into plain IDs.
 */
function normalizeId(value) {
  if (!value) return "";

  if (typeof value === "object") {
    return String(
      value._id ||
        value.id ||
        value.destination?._id ||
        value.destination ||
        value.itemId ||
        ""
    );
  }

  return String(value);
}

/*
 * Supports several possible API response structures:
 *
 * [...]
 * { destinations: [...] }
 * { data: [...] }
 * { data: { destinations: [...] } }
 */
function extractDestinations(response) {
  if (Array.isArray(response)) {
    return response;
  }

  if (Array.isArray(response?.destinations)) {
    return response.destinations;
  }

  if (Array.isArray(response?.data)) {
    return response.data;
  }

  if (Array.isArray(response?.data?.destinations)) {
    return response.data.destinations;
  }

  return [];
}

export default function DestinationGrid({
  limit,
  category = "",
}) {
  const [destinations, setDestinations] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let componentMounted = true;

    async function loadData() {
      try {
        setLoading(true);
        setError("");

        const [destinationResult, profileResult] =
          await Promise.allSettled([
            getDestinations(),
            getProfile(),
          ]);

        if (!componentMounted) return;

        /*
         * Destination result
         */
        if (destinationResult.status === "fulfilled") {
          const destinationData = extractDestinations(
            destinationResult.value
          );

          setDestinations(destinationData);
        } else {
          console.error(
            "Failed to load destinations:",
            destinationResult.reason
          );

          setError("Failed to load destinations.");
          setDestinations([]);
        }

        /*
         * Profile result
         */
        if (profileResult.status === "fulfilled") {
          const profile = profileResult.value;

          const favoriteIds = Array.isArray(
            profile?.favoriteDestinations
          )
            ? profile.favoriteDestinations
                .map(normalizeId)
                .filter(Boolean)
            : [];

          const savedIds = Array.isArray(
            profile?.savedDestinations
          )
            ? profile.savedDestinations
                .map(normalizeId)
                .filter(Boolean)
            : [];

          setFavorites(favoriteIds);
          setSaved(savedIds);
        } else {
          console.error(
            "Failed to load profile:",
            profileResult.reason
          );

          /*
           * Profile failure should not prevent destinations
           * from displaying.
           */
          setFavorites([]);
          setSaved([]);
        }
      } catch (loadError) {
        console.error("Failed to load data:", loadError);

        if (componentMounted) {
          setError("Failed to load destinations.");
          setDestinations([]);
        }
      } finally {
        if (componentMounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      componentMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section>
        <h2 className="py-20 text-center text-2xl font-semibold">
          Loading destinations...
        </h2>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <div className="rounded-3xl bg-white p-16 text-center shadow-md">
          <h2 className="text-3xl font-bold text-red-600">
            Unable to load destinations
          </h2>

          <p className="mt-4 text-gray-500">
            {error}
          </p>
        </div>
      </section>
    );
  }

  const normalizedCategory =
    String(category || "").trim().toLowerCase();

  /*
   * Both an empty category and "All" display every destination.
   */
  const showAllDestinations =
    !normalizedCategory ||
    normalizedCategory === "all";

  const filteredDestinations = showAllDestinations
    ? destinations
    : destinations.filter((place) => {
        const normalizedTags = Array.isArray(place?.tags)
          ? place.tags.map((tag) =>
              String(tag).trim().toLowerCase()
            )
          : [];

        /*
         * The Topbar uses "Lakes", but some database
         * records may use "Lake".
         */
        if (normalizedCategory === "lakes") {
          return (
            normalizedTags.includes("lake") ||
            normalizedTags.includes("lakes")
          );
        }

        return normalizedTags.includes(normalizedCategory);
      });

  /*
   * Dashboard uses limit={8}.
   * The Destinations page can omit limit to display everything.
   */
  const displayedDestinations =
    Number.isInteger(limit) && limit > 0
      ? filteredDestinations.slice(0, limit)
      : filteredDestinations;

  return (
    <section>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            {showAllDestinations
              ? "Popular Destinations"
              : `${category} Destinations`}
          </h2>

          <p className="mt-2 text-gray-500">
            {showAllDestinations
              ? "Explore Nepal's most loved destinations."
              : `Explore ${category.toLowerCase()} destinations in Nepal.`}
          </p>
        </div>
      </div>

      {displayedDestinations.length === 0 ? (
        <div className="rounded-3xl bg-white p-16 text-center shadow-md">
          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            No destinations found
          </h2>

          <p className="mt-4 text-gray-500">
            {showAllDestinations
              ? "No destinations are currently available."
              : "No destinations match this category."}
          </p>
        </div>
      ) : (
        <div
          className="
            grid grid-cols-1 gap-8
            sm:grid-cols-2 xl:grid-cols-4
          "
        >
          {displayedDestinations.map((place) => {
            const destinationId =
              getDestinationId(place);

            const destinationImage =
              getDestinationImage(place);

            return (
              <DestinationCard
                key={destinationId}
                id={destinationId}
                image={destinationImage}
                name={place.name}
                rating={place.rating}
                description={place.description}
                tags={place.tags || []}
                favorites={favorites}
                saved={saved}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}