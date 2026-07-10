import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

import {
  toggleFavorite,
  toggleSave,
} from "../../services/userService";

export default function PlacesToVisit({
  places,
  destinationId,
}) {
  return (
    <section className="max-w-7xl mx-auto px-10 py-14">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            Places To Visit
          </h2>

          <p className="text-gray-500 mt-2">
            Discover the most iconic places around this destination.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {places.map((place, index) => (
          <PlaceCard
            key={index}
            place={place}
            index={index}
            destinationId={destinationId}
          />
        ))}
      </div>
    </section>
  );
}

function PlaceCard({
  place,
  index,
  destinationId,
}) {
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);

  const navigate = useNavigate();

  async function handleFavorite(e) {
    e.stopPropagation();

    try {
      await toggleFavorite({
        destination: destinationId,
        type: "place",
        itemId: `${destinationId}-place-${index}`,
        title: place.title,
        image: place.image,
      });

      setFavorite(!favorite);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSave(e) {
    e.stopPropagation();

    try {
      await toggleSave({
        destination: destinationId,
        type: "place",
        itemId: `${destinationId}-place-${index}`,
        title: place.title,
        image: place.image,
      });

      setSaved(!saved);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div
      onClick={() =>
        navigate("/activity-details", {
          state: {
            item: place,
            type: "place",
            destinationId,
          },
        })
      }
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
    >
      <div className="relative">
        <img
          src={
            place.image ||
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
          }
          alt={place.title}
          className="h-60 w-full object-cover"
        />

        <div className="absolute top-4 right-4 flex gap-3">
          <button
            onClick={handleFavorite}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            {favorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-red-500" />
            )}
          </button>

          <button
            onClick={handleSave}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            {saved ? (
              <FaBookmark className="text-[#1A5F7A]" />
            ) : (
              <FaRegBookmark className="text-[#1A5F7A]" />
            )}
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-[#1A5F7A] mb-3">
          <FaMapMarkerAlt />

          <span className="font-semibold">
            Must Visit
          </span>
        </div>

        <h3 className="text-2xl font-bold">
          {place.title}
        </h3>

        <p className="mt-3 text-gray-500 leading-7">
          {place.description}
        </p>
      </div>
    </div>
  );
}