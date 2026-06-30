import { FaCalendarAlt, FaDollarSign, FaEye, FaTrash } from "react-icons/fa";

export default function ItineraryCard({ trip }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

      <img
        src={trip.image}
        alt={trip.destination}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {trip.destination}
        </h2>

        <div className="mt-5 space-y-3 text-gray-600">

          <div className="flex items-center gap-3">
            <FaCalendarAlt />
            {trip.days} Days
          </div>

          <div className="flex items-center gap-3">
            <FaDollarSign />
            {trip.budget}
          </div>

          <div>
            Created: {trip.created}
          </div>

        </div>

        <div className="flex gap-3 mt-8">

          <button
            className="
              flex-1
              bg-[#1A5F7A]
              text-white
              py-3
              rounded-xl
              flex
              justify-center
              items-center
              gap-2
            "
          >
            <FaEye />

            View
          </button>

          <button
            className="
              w-14
              bg-red-500
              text-white
              rounded-xl
            "
          >
            <FaTrash />
          </button>

        </div>

      </div>

    </div>
  );
}