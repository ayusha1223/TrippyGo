import { useEffect, useState } from "react";

import DestinationCard from "./DestinationCard";

import { getProfile } from "../../services/userService";
import { getDestinations } from "../../services/destinationService";

export default function DestinationGrid({
  limit,
  category,
}) {
  const [destinations, setDestinations] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDestinations() {
      try {
        const [destinationData, profile] = await Promise.all([
          getDestinations(),
          getProfile(),
        ]);

        setDestinations(destinationData);

        setFavorites(profile.favoriteDestinations || []);

        setSaved(profile.savedDestinations || []);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDestinations();
  }, []);

  if (loading) {
    return (
      <h2 className="text-center text-2xl font-semibold py-20">
        Loading destinations...
      </h2>
    );
  }

  // Category Filter

  const filteredDestinations = destinations.filter((place) => {

    // Show all destinations

    if (category === "All") {
      return true;
    }

    // Dashboard button says "Lakes"
    // Database tag is "Lake"

    if (category === "Lakes") {
      return place.tags?.includes("Lake");
    }

    // Every other category uses the same tag name

    return place.tags?.includes(category);
  });

  // Apply limit

  const displayedDestinations = limit
    ? filteredDestinations.slice(0, limit)
    : filteredDestinations;

  return (
    <section>

      <div className="flex justify-between items-end mb-8">

        <div>

          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            Popular Destinations
          </h2>

          <p className="text-gray-500 mt-2">
            Explore Nepal's most loved destinations.
          </p>

        </div>

      </div>

      {displayedDestinations.length === 0 ? (

        <div className="bg-white rounded-3xl shadow-md p-16 text-center">

          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            No destinations found
          </h2>

          <p className="mt-4 text-gray-500">
            No destinations match this category.
          </p>

        </div>

      ) : (

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-8
          "
        >

          {displayedDestinations.map((place) => (

            <DestinationCard
              key={place._id}
              id={place._id}
              image={place.heroImage}
              name={place.name}
              rating={place.rating}
              description={place.description}
              tags={place.tags}
              favorites={favorites}
              saved={saved}
            />

          ))}

        </div>

      )}

    </section>
  );
}