
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import DestinationCard from "./DestinationCard";
import { getDestinations } from "../../services/destinationService";

export default function DestinationGrid({ limit }) {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDestinations() {
      try {
        const data = await getDestinations();
        setDestinations(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDestinations();
  }, []);

  if (loading) {
    return (
      <h2 className="text-center text-2xl font-semibold">
        Loading destinations...
      </h2>
    );
  }

  return (
    <section>

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

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-8
        "
      >
        {(limit ? destinations.slice(0, limit) : destinations).map((place) => (
          <DestinationCard
            key={place._id}
            id={place._id}
            image={place.heroImage}
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

