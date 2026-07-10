import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

import {
  toggleFavorite,
  toggleSave,
} from "../../services/userService";

export default function AdventureSection({
  adventures,
  destinationId,
}) {
  return (
    <section className="max-w-7xl mx-auto px-10 py-14">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            Adventure & Treks
          </h2>

          <p className="text-gray-500 mt-2">
            Experience thrilling adventures around this destination.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {adventures.map((adventure, index) => (
          <AdventureCard
            key={index}
            adventure={adventure}
            index={index}
            destinationId={destinationId}
          />
        ))}
      </div>
    </section>
  );
}

function AdventureCard({
  adventure,
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
        type: "adventure",
        itemId: `${destinationId}-adventure-${index}`,
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
        destination: destinationId,
        type: "adventure",
        itemId: `${destinationId}-adventure-${index}`,
        title: adventure.title,
        image: adventure.image,
      });

      setSaved(!saved);
    } catch (err) {
      console.error(err);
    }
  }

  function openDetails() {
    navigate("/activity-details", {
      state: {
        item: adventure,
        type: "adventure",
        destinationId,
      },
    });
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
        transition-all
        cursor-pointer
      "
    >
      <div className="relative">
        <img
          src={
            adventure.image ||
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
          }
          alt={adventure.title}
          className="w-full h-72 object-cover"
        />

        <span className="absolute top-4 left-4 bg-[#1A5F7A] text-white px-4 py-2 rounded-full text-sm">
          Adventure
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

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {adventure.title}
        </h3>

        <p className="text-gray-500 mt-3 leading-7">
          {adventure.description}
        </p>

        <div className="flex justify-between items-center mt-6">
          <span className="text-3xl font-bold text-[#1A5F7A]">
            ${adventure.price}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openDetails();
            }}
            className="
              bg-[#1A5F7A]
              text-white
              px-5
              py-3
              rounded-xl
              flex
              items-center
              gap-2
              hover:bg-[#15485e]
              transition
            "
          >
            Details
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}