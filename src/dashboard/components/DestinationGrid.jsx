import { FaArrowRight } from "react-icons/fa";
import DestinationCard from "./DestinationCard";
import destinations from "../data/destinations";

export default function DestinationGrid() {
  return (
    <section>

      {/* Heading */}

      <div className="flex justify-between items-end mb-8">

        <div>

          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            Popular Destinations
          </h2>

          <p className="text-gray-500 mt-2">
            Explore Nepal's most loved destinations.
          </p>

        </div>

        <button
          className="
          flex
          items-center
          gap-2
          text-[#1A5F7A]
          font-semibold
          hover:gap-3
          transition-all
          "
        >
          View All

          <FaArrowRight />

        </button>

      </div>

      {/* Cards */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-8
        "
      >
        {destinations.map((place) => (

          <DestinationCard
            key={place.id}
            image={place.image}
            name={place.name}
            rating={place.rating}
            description={place.description}
            tags={place.tags}
          />

        ))}
      </div>

    </section>
  );
}