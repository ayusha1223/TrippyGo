import { FaHeart, FaStar } from "react-icons/fa";

export default function DestinationCard({
  image,
  name,
  rating,
  description,
  tags,
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-md
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      {/* Image */}

      <div className="relative h-64">

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        <button
          className="
          absolute
          top-4
          right-4
          w-10
          h-10
          rounded-full
          bg-white/30
          backdrop-blur
          text-white
          flex
          items-center
          justify-center
          hover:bg-red-500
          transition
          "
        >
          <FaHeart />
        </button>

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

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <div className="flex gap-2 mt-5 flex-wrap">

          {(tags || []).map((tag) => (

            <span
              key={tag}
              className="
              px-3
              py-1
              rounded
              text-xs
              bg-green-100
              text-green-700
              font-semibold
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