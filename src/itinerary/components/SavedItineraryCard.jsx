import {
  FaEye,
  FaTrash,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDollarSign,
} from "react-icons/fa";

export default function SavedItineraryCard({
  trip,
  onView,
  onDelete,
}) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-300
        p-6
      "
    >
      {/* Title */}

      <h3 className="text-2xl font-bold text-[#1A5F7A]">
        {trip.title}
      </h3>

      {/* Details */}

      <div className="mt-5 space-y-3 text-gray-600">

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[#1A5F7A]" />
          <span>{trip.destination}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-[#1A5F7A]" />
          <span>{trip.days} Days</span>
        </div>

        <div className="flex items-center gap-3">
          <FaDollarSign className="text-[#1A5F7A]" />
          <span>${trip.budget}</span>
        </div>

      </div>

      {/* Buttons */}

      <div className="flex items-center gap-3 mt-8">

        {/* View */}

        <button
          onClick={() => onView(trip)}
          className="
            flex-1
            h-12
            bg-[#1A5F7A]
            text-white
            rounded-xl
            flex
            items-center
            justify-center
            gap-2
            transition-all
            duration-300
            hover:bg-[#15475D]
            hover:scale-[1.02]
            hover:shadow-lg
            active:scale-95
          "
        >
          <FaEye />
          <span>View</span>
        </button>

        {/* Delete */}

        <button
          onClick={() => onDelete(trip._id)}
          className="
            w-12
            h-12
            flex
            items-center
            justify-center
            rounded-xl
            bg-red-500
            text-white
            transition-all
            duration-300
            hover:bg-red-600
            hover:scale-110
            hover:shadow-lg
            active:scale-95
          "
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}