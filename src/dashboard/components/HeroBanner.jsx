import {
  FaArrowRight,
  FaRobot,
  FaMountain,
  FaUmbrellaBeach,
  FaCamera,
  FaHiking,
  FaStar,
} from "react-icons/fa";

const heroImage =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=90";

export default function HeroBanner() {
  return (
    <section
      className="
        relative
        h-[560px]
        rounded-[32px]
        overflow-hidden
        shadow-2xl
      "
    >
      {/* Background */}

    <img
  src={heroImage}
  alt="Discover Nepal"
  className="w-full h-full object-cover"
/>

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/70
          via-black/25
          to-transparent
        "
      />

      {/* Left Content */}

      <div
        className="
          absolute
          left-14
          bottom-14
          max-w-2xl
          text-white
        "
      >
        <p className="uppercase tracking-[6px] text-white/70 text-sm font-semibold">
          Explore Nepal
        </p>

        <h1
          className="
            text-7xl
            font-black
            leading-tight
            mt-3
          "
        >
          Discover The
          <br />
          Beauty of Nepal
        </h1>

        <p
          className="
            mt-6
            text-lg
            text-white/90
            leading-8
            max-w-xl
          "
        >
          Plan unforgettable adventures, discover hidden
          villages, explore majestic Himalayan peaks and let
          AI build your perfect itinerary.
        </p>

        {/* Category Chips */}

        <div className="flex flex-wrap gap-3 mt-8">

          <span className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2">
            <FaMountain />
            Mountains
          </span>

          <span className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2">
            <FaUmbrellaBeach />
            Lakes
          </span>

          <span className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2">
            <FaCamera />
            Photography
          </span>

          <span className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2">
            <FaHiking />
            Trekking
          </span>

        </div>

        {/* Buttons */}

        <div className="flex gap-5 mt-10">

          <button
            className="
              bg-white
              text-[#1A5F7A]
              px-8
              py-4
              rounded-2xl
              font-bold
              flex
              items-center
              gap-3
              hover:scale-105
              transition
            "
          >
            Explore Now

            <FaArrowRight />
          </button>

          <button
            className="
              bg-[#1A5F7A]
              text-white
              px-8
              py-4
              rounded-2xl
              font-bold
              flex
              items-center
              gap-3
              hover:bg-[#144a5f]
              transition
            "
          >
            <FaRobot />

            AI Planner
          </button>

        </div>

      </div>

      {/* Right Glass Card */}

      <div
        className="
          absolute
          top-10
          right-10
          w-80
          rounded-3xl
          bg-white/15
          backdrop-blur-xl
          border
          border-white/20
          p-8
          text-white
        "
      >
        <p className="uppercase tracking-widest text-sm text-white/70">
          Featured Destination
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Everest Base Camp
        </h2>

        <div className="flex items-center gap-2 mt-4">

          <FaStar className="text-yellow-400" />

          <span className="font-semibold">
            4.9 Rating
          </span>

        </div>

        <div className="mt-8 space-y-5">

          <div className="flex justify-between">

            <span>Best Time</span>

            <span className="font-semibold">
              Mar - May
            </span>

          </div>

          <div className="flex justify-between">

            <span>Duration</span>

            <span className="font-semibold">
              10 Days
            </span>

          </div>

          <div className="flex justify-between">

            <span>Travelers</span>

            <span className="font-semibold">
              25,000+
            </span>

          </div>

        </div>

      </div>

      {/* Bottom Statistics */}

      <div
        className="
          absolute
          bottom-10
          right-10
          flex
          gap-5
        "
      >

        {[
          ["120+", "Destinations"],
          ["650+", "Hotels"],
          ["300+", "Treks"],
          ["50K+", "Travelers"],
        ].map(([value, label]) => (

          <div
            key={label}
            className="
              bg-white/15
              backdrop-blur-xl
              rounded-2xl
              px-6
              py-5
              text-center
              text-white
              min-w-[120px]
            "
          >
            <h3 className="text-3xl font-bold">
              {value}
            </h3>

            <p className="text-sm text-white/80 mt-2">
              {label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}