import {
  FaMountain,
  FaHiking,
  FaWater,
  FaParachuteBox,
} from "react-icons/fa";

export default function AdventureHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        h-[420px]
        mb-10
      "
    >
      {/* Background */}

      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
        alt="Adventure"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}

      <div className="relative h-full flex items-center justify-between px-16">

        <div className="max-w-2xl text-white">

          <p className="uppercase tracking-[6px] text-white/80 mb-3">
            Explore Nepal
          </p>

          <h1 className="text-6xl font-black leading-tight">
            Adventure
            <br />
            Explorer
          </h1>

          <p className="mt-6 text-xl text-white/90 leading-9">
            Discover Nepal's most exciting adventures,
            from Himalayan trekking and paragliding
            to rafting, jungle safaris and mountain biking.
          </p>

        </div>

        {/* Stats */}

        <div
          className="
            bg-white/10
            backdrop-blur-xl
            rounded-3xl
            p-8
            w-80
            text-white
          "
        >

          <h3 className="text-2xl font-bold mb-8">
            Explore
          </h3>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FaMountain />
                Trekking
              </span>

              <span>40+</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FaWater />
                Water Sports
              </span>

              <span>18+</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FaParachuteBox />
                Air Adventures
              </span>

              <span>12+</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FaHiking />
                Hiking Trails
              </span>

              <span>70+</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}