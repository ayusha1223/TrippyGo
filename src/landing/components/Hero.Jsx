import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-6">
          Discover Nepal
        </h1>

        <p className="text-white text-xl max-w-2xl mb-10">
          Explore destinations, adventures, hotels,
          trekking routes and create smart itineraries.
        </p>

        <div className="bg-white rounded-full p-3 flex w-full max-w-4xl shadow-2xl">
          <input
            type="text"
            placeholder="Where do you want to explore?"
            className="flex-1 px-6 outline-none"
          />

          <button className="bg-orange-500 text-white px-8 py-4 rounded-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;