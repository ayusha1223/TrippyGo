import { useState } from "react";
import {
  FaStar,
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

export default function HotelsSection({
  hotels,
  destinationId,
}) {
  return (
    <section className="max-w-7xl mx-auto px-10 py-14">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            Hotels Nearby
          </h2>

          <p className="text-gray-500 mt-2">
            Stay at the best hotels and resorts near your destination.
          </p>

        </div>

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {hotels.map((hotel, index) => (

          <HotelCard
            key={index}
            hotel={hotel}
            index={index}
            destinationId={destinationId}
          />

        ))}

      </div>

    </section>
  );
}

function HotelCard({
  hotel,
  index,
  destinationId,
}) {
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleFavorite() {
    try {
      await toggleFavorite({
        destination: destinationId,
        type: "hotel",
        itemId: `${destinationId}-hotel-${index}`,
        title: hotel.name,
        image: hotel.image,
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
        type: "hotel",
        itemId: `${destinationId}-hotel-${index}`,
        title: hotel.name,
        image: hotel.image,
      });

      setSaved(!saved);

    } catch (err) {
      console.error(err);
    }
  }

  return (

    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
      "
    >

      <div className="relative">

        <img
          src={
            hotel.image ||
            "https://images.unsplash.com/photo-1566073771259-6a8506099945"
          }
          alt={hotel.name}
          className="w-full h-64 object-cover"
        />

        <span className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-[#1A5F7A] font-semibold text-sm">
          Hotel
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
          {hotel.name}
        </h3>

        <div className="flex items-center gap-2 mt-3 text-orange-500">
          <FaStar />
          <span>{hotel.rating}</span>
        </div>

        <div className="flex items-center gap-2 mt-3 text-gray-500">
          <FaMapMarkerAlt />
          <span>Near Destination</span>
        </div>

        <div className="mt-8">

          <p className="text-sm text-gray-400">
            Starting From
          </p>

          <h4 className="text-3xl font-bold text-[#1A5F7A]">
            ${hotel.price}
          </h4>

          <p className="text-sm text-gray-500">
            per night
          </p>
          

        </div>

      </div>

    </div>

  );
}