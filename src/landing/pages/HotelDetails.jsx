import InternalNavBar from "../components/InternalNavBar";
import Footer from "../components/Footer";

function HotelDetails() {
  const facilities = [
    "Free WiFi",
    "Spa",
    "Restaurant",
    "Mountain View",
    "Parking",
    "Room Service",
    "Gym",
    "Pool",
  ];

  const nearbyPlaces = [
    {
      title: "Hadimba Temple",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?w=800",
    },
    {
      title: "Solang Valley",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    },
    {
      title: "Jogini Falls",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    },
    {
      title: "Rohtang Pass",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800",
    },
  ];

  return (
    <div className="bg-[#FCF9F8] min-h-screen">
      <InternalNavBar />

      {/* HERO */}
      <section
        className="relative h-[650px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto h-full flex items-end px-6 pb-16">
          <div className="text-white">
            <p className="mb-2">⭐ 4.8 • 124 Reviews</p>

            <h1 className="text-5xl font-bold mb-3">
              The Peak Sanctuary Resort & Spa
            </h1>

            <p>📍 Nagarkot, Nepal</p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-16">
            {/* OVERVIEW */}
            <div>
              <h2 className="text-3xl font-bold text-[#00475E] mb-6">
                Overview
              </h2>

              <p className="text-gray-600 leading-8">
                Experience luxury in the heart of the Himalayas.
                Enjoy panoramic mountain views, world-class
                facilities, and unforgettable adventures.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-6 rounded-xl shadow">
                  <p className="text-sm text-gray-500 uppercase">
                    Price Range
                  </p>
                  <h3 className="text-2xl font-bold text-[#00475E]">
                    $300-$650
                  </h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                  <p className="text-sm text-gray-500 uppercase">
                    Altitude
                  </p>
                  <h3 className="text-2xl font-bold text-[#00475E]">
                    6,725 ft
                  </h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                  <p className="text-sm text-gray-500 uppercase">
                    Room Types
                  </p>
                  <h3 className="text-2xl font-bold text-[#00475E]">
                    Suites
                  </h3>
                </div>
              </div>
            </div>

            {/* FACILITIES */}
            <div>
              <h2 className="text-3xl font-bold text-[#00475E] mb-8">
                World-Class Facilities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {facilities.map((item) => (
                  <div
                    key={item}
                    className="bg-white p-6 rounded-xl shadow text-center"
                  >
                    <div className="text-3xl mb-3">🏨</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPLORE NEARBY */}
            <div>
              <h2 className="text-3xl font-bold text-[#00475E] mb-8">
                Explore Nearby
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {nearbyPlaces.map((place) => (
                  <div
                    key={place.title}
                    className="relative rounded-xl overflow-hidden h-60"
                  >
                    <img
                      src={place.image}
                      alt={place.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-xl">
                        {place.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GALLERY */}
            <div>
              <h2 className="text-3xl font-bold text-[#00475E] mb-8">
                Property Gallery
              </h2>

              <div className="grid grid-cols-4 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                  className="col-span-2 row-span-2 rounded-xl h-full object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
                  className="rounded-xl h-48 object-cover w-full"
                />

                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
                  className="rounded-xl h-48 object-cover w-full"
                />

                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
                  className="rounded-xl h-48 object-cover w-full"
                />

                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
                  className="rounded-xl h-48 object-cover w-full"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">
            {/* LOCATION */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold text-[#00475E] mb-4">
                Location
              </h3>

              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
                alt=""
                className="rounded-xl mb-4"
              />

              <p className="text-gray-600 text-sm mb-4">
                Himalayan Resort Road, Manali
              </p>

              <button className="w-full border-2 border-green-500 text-green-600 py-3 rounded-lg">
                Get Directions
              </button>
            </div>

            {/* INQUIRY */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold text-[#00475E] mb-4">
                Inquiry
              </h3>

              <p className="mb-3">📞 +91 987654321</p>
              <p className="mb-6">✉ hotel@example.com</p>

              <button className="w-full bg-[#00475E] text-white py-3 rounded-lg">
                Check Availability
              </button>
            </div>

            {/* RATINGS */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold text-[#00475E] mb-6">
                Guest Ratings
              </h3>

              {[
                ["Cleanliness", 95],
                ["Service", 90],
                ["Location", 92],
                ["Value", 88],
              ].map(([label, value]) => (
                <div key={label} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>

                  <div className="bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HotelDetails;