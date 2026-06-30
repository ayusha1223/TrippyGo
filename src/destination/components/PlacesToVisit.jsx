import { FaMapMarkerAlt } from "react-icons/fa";

export default function PlacesToVisit({ places }) {
  return (
    <section className="max-w-7xl mx-auto px-10 py-14">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            Places To Visit
          </h2>

          <p className="text-gray-500 mt-2">
            Discover the most iconic places around this destination.
          </p>

        </div>

        <button className="text-[#1A5F7A] font-semibold">
          View All
        </button>

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {places.map((place, index) => (

          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition
              duration-300
            "
          >

            <img
              src={
                place.image ||
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
              }
              alt={place.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <div className="flex items-center gap-2 text-[#1A5F7A] mb-3">

                <FaMapMarkerAlt />

                <span className="font-semibold">
                  Must Visit
                </span>

              </div>

              <h3 className="text-2xl font-bold">
                {place.title}
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                {place.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}