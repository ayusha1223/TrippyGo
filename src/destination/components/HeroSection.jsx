import { FaHeart, FaBookmark, FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function HeroSection({ destination }) {
  return (
    <section className="relative h-[550px] w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={destination.heroImage}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-10 pb-12 text-white">

        <div className="flex justify-between items-end">

          <div>

            <h1 className="text-6xl font-extrabold drop-shadow-lg">
              {destination.name}
            </h1>

            <div className="flex flex-wrap gap-6 mt-5">

              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>{destination.rating}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>
                  {destination.district}, {destination.province}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaClock />
                <span>{destination.duration}</span>
              </div>

              <div>
                💰 {destination.budget}
              </div>

              <div>
                🌤 {destination.bestTime}
              </div>

            </div>

          </div>

          <div className="flex gap-4">

            <button className="bg-red-500 hover:bg-red-600 p-4 rounded-xl transition">
              <FaHeart size={20} />
            </button>

            <button className="bg-[#1A5F7A] hover:bg-[#15485e] p-4 rounded-xl transition">
              <FaBookmark size={20} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}