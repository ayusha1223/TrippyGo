import { FaStar, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function HotelsSection({ hotels }) {
  return (
    <section className="max-w-7xl mx-auto px-10 py-14">

      {/* Heading */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            Hotels Nearby
          </h2>

          <p className="text-gray-500 mt-2">
            Stay at the best hotels and resorts near your destination.
          </p>

        </div>

        <button className="text-[#1A5F7A] font-semibold hover:underline">
          View All
        </button>

      </div>

      {/* Hotels */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {hotels.map((hotel, index) => (

          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >

            {/* Hotel Image */}

            <div className="relative">

              <img
                src={
                  hotel.image ||
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945"
                }
                alt={hotel.name}
                className="w-full h-64 object-cover"
              />

              <span
                className="
                  absolute
                  top-4
                  left-4
                  bg-white
                  text-[#1A5F7A]
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                Hotel
              </span>

            </div>

            {/* Hotel Content */}

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

              <div className="flex justify-between items-center mt-8">

                <div>

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

                <button
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
                  Save

                  <FaArrowRight />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}