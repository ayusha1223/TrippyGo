import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import {
  toggleFavorite,
  toggleSave,
} from "../../services/userService";

export default function AdventureCard({
  adventure,
}) {
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);

  const navigate = useNavigate();

  function openDetails() {
    navigate("/activity-details", {
      state: {
        item: adventure,
        type: "adventure",
        destinationId: adventure.destination,
      },
    });
  }

  async function handleFavorite(e) {
    e.stopPropagation();

    try {
      await toggleFavorite({
        destination: adventure.destination,
        type: "adventure",
        itemId: adventure._id,
        title: adventure.title,
        image: adventure.image,
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
        destination: adventure.destination,
        type: "adventure",
        itemId: adventure._id,
        title: adventure.title,
        image: adventure.image,
      });

      setSaved(!saved);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div
      onClick={openDetails}
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        cursor-pointer
      "
    >
      {/* Image */}

      <div className="relative">
        <img
          src={adventure.image}
          alt={adventure.title}
          className="w-full h-64 object-cover"
        />

        <span className="absolute top-4 left-4 bg-[#1A5F7A] text-white px-4 py-2 rounded-full text-sm font-semibold">
          {adventure.category}
        </span>

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

      {/* Content */}

      <div className="p-6">
        <h2 className="text-2xl font-bold">
          {adventure.title}
        </h2>

        <p className="text-gray-500 mt-3">
          {adventure.description}
        </p>

        <div className="mt-5 space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt />
            {adventure.location}
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaClock />
            {adventure.duration}
          </div>

          <div className="flex items-center gap-2 text-orange-500">
            <FaStar />
            {adventure.rating}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div>
            <p className="text-sm text-gray-400">
              Starting From
            </p>

            <h3 className="text-3xl font-bold text-[#1A5F7A]">
              ${adventure.price}
            </h3>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openDetails();
            }}
            className="
              bg-[#1A5F7A]
              hover:bg-[#15485e]
              text-white
              px-5
              py-3
              rounded-xl
              flex
              items-center
              gap-2
              transition
            "
          >
            See Details
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}