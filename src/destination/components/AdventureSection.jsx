import { FaArrowRight } from "react-icons/fa";

export default function AdventureSection({ adventures }) {
  return (
    <section className="max-w-7xl mx-auto px-10 py-14">

      {/* Heading */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            Adventure & Treks
          </h2>

          <p className="text-gray-500 mt-2">
            Experience thrilling adventures around this destination.
          </p>

        </div>

        <button className="text-[#1A5F7A] font-semibold">
          View All
        </button>

      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {adventures.map((adventure, index) => (

          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >

            {/* Image */}

            <div className="relative">

              <img
                src={
                  adventure.image ||
                  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                }
                alt={adventure.title}
                className="w-full h-72 object-cover"
              />

              <span
                className="
                  absolute
                  top-4
                  left-4
                  bg-[#1A5F7A]
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                "
              >
                Adventure
              </span>

            </div>

            {/* Content */}

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
                  Book Now

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