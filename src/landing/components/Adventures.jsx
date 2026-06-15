import everestImg from "../../assets/images/everest1.jpg";
import paraglidingImg from "../../assets/images/paragliding.jpg";
import raftingImg from "../../assets/images/rafting.jpg";
import wellnessImg from "../../assets/images/wellness.jpg";

function Adventures() {
  return (
    <section
      id="adventures"
      className="bg-slate-100 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Featured Adventures
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Everest */}
          <div
            className="lg:col-span-2 h-[500px] rounded-3xl overflow-hidden relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${everestImg})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute top-6 left-6 bg-blue-700 text-white px-4 py-2 rounded-full">
              ELITE TREKKING
            </div>

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-4xl font-bold mb-4">
                Everest Base Camp
              </h3>

              <p className="max-w-md mb-5">
                Experience the world's most iconic trek.
              </p>

              <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold">
                Explore Trek
              </button>
            </div>
          </div>

          {/* Paragliding */}
          <div
            className="h-[500px] rounded-3xl overflow-hidden relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${paraglidingImg})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold mb-3">
                Paragliding
              </h3>

              <p className="mb-4">
                Fly above Pokhara valley.
              </p>

              <button className="border border-white px-5 py-2 rounded-full">
                Explore
              </button>
            </div>
          </div>

          {/* Rafting */}
          <div
            className="h-[350px] rounded-3xl overflow-hidden relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${raftingImg})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">
                Trishuli Rafting
              </h3>
            </div>
          </div>

          {/* Wellness */}
          <div
            className="lg:col-span-2 h-[350px] rounded-3xl overflow-hidden relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${wellnessImg})`,
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-4xl font-bold mb-4">
                Wellness Retreats
              </h3>

              <p className="max-w-lg mb-4">
                Reconnect with nature in Nepal's most peaceful destinations.
              </p>

              <button className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white">
                Discover Wellness
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Adventures;