import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

import {
  toggleFavorite,
  toggleSave,
} from "../../services/userService";

export default function ThingsToDo({
  things,
  destinationId,
}) {
  return (
    <section className="max-w-7xl mx-auto px-10 py-14">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            Top Things To Do
          </h2>

          <p className="text-gray-500 mt-2">
            Experience the best attractions and activities.
          </p>

        </div>

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {things.map((item, index) => (

          <ThingCard
            key={index}
            item={item}
            index={index}
            destinationId={destinationId}
          />

        ))}

      </div>

    </section>
  );
}

function ThingCard({
  item,
  index,
  destinationId,
}) {
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleFavorite() {
    try {
      await toggleFavorite({
        destination: destinationId,
        type: "thing",
        itemId: `${destinationId}-${index}`,
        title: item.title,
        image: item.image,
      });

      setFavorite(!favorite);

    } catch (err) {
      console.error(err);
    }
  }

  async function handleSave() {
    try {
      await toggleSave({
        destination: destinationId,
        type: "thing",
        itemId: `${destinationId}-${index}`,
        title: item.title,
        image: item.image,
      });

      setSaved(!saved);

    } catch (err) {
      console.error(err);
    }
  }

  return (

    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

      <div className="relative">

        <img
          src={
            item.image ||
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
          }
          alt={item.title}
          className="h-56 w-full object-cover"
        />

        <div className="absolute top-4 right-4 flex gap-3">

          <button
            onClick={handleFavorite}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
          >
            {favorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-red-500" />
            )}
          </button>

          <button
            onClick={handleSave}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
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
          {item.title}
        </h3>

        <p className="text-gray-500 mt-3 leading-7">
          {item.description}
        </p>

      </div>

    </div>

  );
}