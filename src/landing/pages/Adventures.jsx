import InternalNavBar from "../components/InternalNavBar";
import Footer from "../components/Footer";

function Adventure() {
  const expeditions = [
    {
      title: "Annapurna Circuit",
      duration: "14 Days",
      price: "$1,450",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000",
    },
    {
      title: "Everest Base Camp",
      duration: "12 Days",
      price: "$2,100",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
    },
    {
      title: "Upper Mustang Jeep Tour",
      duration: "7 Days",
      price: "$1,850",
      image:
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=1000",
    },
  ];

  const paceOptions = [
    {
      title: "Adrenaline",
      subtitle: "Thrilling Experiences",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1000",
    },
    {
      title: "Cultural",
      subtitle: "Discover Nepal",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000",
    },
    {
      title: "Aerial Views",
      subtitle: "Paragliding Adventures",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1000",
    },
  ];

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <InternalNavBar />

      {/* Hero Section */}
      <section
        className="relative h-[550px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Seek Your Next
            <br />
            Adventure
          </h1>

          <p className="max-w-2xl text-gray-200">
            From Himalayan expeditions to adrenaline-filled
            experiences, discover unforgettable adventures
            across Nepal.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search adventure..."
              className="border rounded-lg px-4 py-3"
            />

            <select className="border rounded-lg px-4 py-3">
              <option>Difficulty</option>
              <option>Easy</option>
              <option>Moderate</option>
              <option>Hard</option>
            </select>

            <select className="border rounded-lg px-4 py-3">
              <option>Duration</option>
              <option>1-3 Days</option>
              <option>4-7 Days</option>
              <option>8+ Days</option>
            </select>

            <button className="bg-[#0F4C5C] text-white rounded-lg py-3">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Expeditions */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-[#0F4C5C] mb-2">
          Featured Expeditions
        </h2>

        <p className="text-gray-500 mb-10">
          Handpicked adventures with premium experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {expeditions.map((trip) => (
            <div
              key={trip.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">
                  {trip.title}
                </h3>

                <p className="text-gray-500 mb-4">
                  {trip.duration}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#0F4C5C]">
                    {trip.price}
                  </span>

                  <button className="text-[#0F4C5C] font-semibold">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Choose Your Pace */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F4C5C]">
            Choose Your Pace
          </h2>

          <p className="text-gray-500 mt-3">
            Adventure experiences tailored to your style.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {paceOptions.map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl overflow-hidden h-[400px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p>{item.subtitle}</p>

                <button className="mt-4 text-orange-300 font-semibold">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Adventure;
