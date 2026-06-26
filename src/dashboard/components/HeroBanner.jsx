import heroImage from "../../assets/images/hero-banner.jpg";

export default function HeroBanner() {
  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-3xl
      h-[450px]
      shadow-2xl
      "
    >
      {/* Background Image */}

      <img
        src={heroImage}
        alt="Discover Nepal"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      {/* Gradient */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#1A5F7A]/90
        via-[#1A5F7A]/20
        to-transparent
        "
      />

      {/* Content */}

      <div
        className="
        absolute
        bottom-12
        left-12
        max-w-xl
        text-white
        "
      >
        <h1
          className="
          text-6xl
          font-extrabold
          leading-tight
          "
        >
          Discover Nepal
        </h1>

        <p
          className="
          mt-4
          text-lg
          text-white/90
          leading-8
          "
        >
          Find breathtaking destinations, hidden villages,
          Himalayan adventures and personalized AI travel
          plans designed just for you.
        </p>

        <div className="mt-8 flex gap-4">

          <button
            className="
            bg-white
            text-[#1A5F7A]
            px-6
            py-3
            rounded-xl
            font-semibold
            hover:scale-105
            transition
            "
          >
            Explore Now
          </button>

          <button
            className="
            border
            border-white
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-white
            hover:text-[#1A5F7A]
            transition
            "
          >
            AI Planner
          </button>

        </div>
      </div>

      {/* Floating Badge */}

      <div
        className="
        absolute
        top-8
        right-8
        bg-white/20
        backdrop-blur-md
        rounded-2xl
        px-6
        py-4
        text-white
        "
      >
        <h3 className="text-sm uppercase tracking-widest">
          Featured
        </h3>

        <p className="text-2xl font-bold mt-1">
          Everest Region
        </p>
      </div>
    </section>
  );
}