import kathmanduImg from "../../assets/images/ktm.jpg";
import pokharaImg from "../../assets/images/pokhara.jpg";
import chitwanImg from "../../assets/images/chitwan.jpg";
import lumbiniImg from "../../assets/images/lumbini.jpg";

function Destinations() {
  const places = [
    {
      name: "Kathmandu",
      image: kathmanduImg,
    },
    {
      name: "Pokhara",
      image: pokharaImg,
    },
    {
      name: "Chitwan",
      image: chitwanImg,
    },
    {
      name: "Lumbini",
      image: lumbiniImg,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Popular Destinations
          </h2>

          <p className="text-gray-500 mt-3">
            Explore Nepal's most beautiful places.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {places.map((place) => (
          <div
            key={place.name}
            className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

            <div className="absolute bottom-5 left-5">
              <h3 className="text-white text-2xl font-bold">
                {place.name}
              </h3>

              <button className="mt-3 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;