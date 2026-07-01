import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaStar,
} from "react-icons/fa";

import {
  addFavorite,
  removeFavorite,
  saveDestination,
  removeSavedDestination,
} from "../../services/userService";

export default function DestinationCard({
  id,
  image,
  name,
  rating,
  description,
  tags,
  favorites,
  saved,
}) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(
  favorites?.includes(id)
);

const [isSaved, setIsSaved] = useState(
  saved?.includes(id)
);
useEffect(() => {
  setIsFavorite(favorites?.includes(id));
  setIsSaved(saved?.includes(id));
}, [favorites, saved, id]);

  async function handleFavorite(e) {
    e.stopPropagation();

    try {
      if (isFavorite) {
  await removeFavorite(id);
  setIsFavorite(false);
} else {
  await addFavorite(id);
  setIsFavorite(true);
}
    } catch (error) {
      console.error(error);
      alert("Failed to update favorite.");
    }
  }

  async function handleSave(e) {
    e.stopPropagation();

    try {
      if (isSaved) {
        await removeSavedDestination(id);
        setIsSaved(false);
      } else {
        await saveDestination(id);
        setIsSaved(true);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to save destination.");
    }
  }

  return (
    <div
      onClick={() => navigate(`/destination/${id}`)}
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        cursor-pointer
      "
    >
      {/* Image */}

      <div className="relative h-64">

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Favorite + Save */}

        <div className="absolute top-4 right-4 flex gap-3">

          {/* Favorite */}

          <button
            onClick={handleFavorite}
            className="
              w-11
              h-11
              rounded-full
              bg-white/90
              backdrop-blur
              shadow-lg
              flex
              items-center
              justify-center
              hover:scale-110
              hover:bg-red-50
              transition
            "
          >
            {isFavorite ? (
              <FaHeart
                size={18}
                className="text-red-500"
              />
            ) : (
              <FaRegHeart
                size={18}
                className="text-red-500"
              />
            )}
          </button>

          {/* Save */}

          <button
            onClick={handleSave}
            className="
              w-11
              h-11
              rounded-full
              bg-white/90
              backdrop-blur
              shadow-lg
              flex
              items-center
              justify-center
              hover:scale-110
              hover:bg-blue-50
              transition
            "
          >
            {isSaved ? (
              <FaBookmark
                size={18}
                className="text-[#1A5F7A]"
              />
            ) : (
              <FaRegBookmark
                size={18}
                className="text-[#1A5F7A]"
              />
            )}
          </button>

        </div>

      </div>

      {/* Content */}

      <div className="p-5">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            {name}
          </h2>

          <div className="flex items-center gap-1 text-orange-500">

            <FaStar />

            <span className="font-semibold">
              {rating}
            </span>

          </div>

        </div>

        <p className="text-gray-600 mt-3 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">

          {(tags || []).map((tag) => (

            <span
              key={tag}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                bg-green-100
                text-green-700
              "
            >
              {tag}
            </span>

          ))}

        </div>

      </div>

    </div>
  );
}