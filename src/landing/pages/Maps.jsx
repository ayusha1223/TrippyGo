
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import InternalNavBar from "../components/InternalNavBar.jsx";
import Footer from "../components/Footer.jsx";

function SearchMap({ position }) {
  const map = useMap();

  if (position) {
    map.flyTo(position, 12, {
      animate: true,
    });
  }

  return null;
}

function Maps() {
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState(null);

  const handleSearch = async () => {
    if (!search.trim()) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          search
        )}`
      );

      const data = await response.json();

      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);

        setPosition([lat, lon]);
      } else {
        alert("Location not found");
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <InternalNavBar />

     {/* Hero Section */}
<section
  className="relative h-[500px] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">

    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Explore the Himalayas
    </h1>

    <p className="text-white/90 max-w-2xl text-lg">
      Discover the majestic peaks, ancient valleys,
      and vibrant culture of Nepal through our
      interactive geographical gateway.
    </p>

  </div>
</section>

      {/* Map Section */}
      <section className="relative max-w-7xl mx-auto px-6 mb-24 mt-10">

        {/* Search Bar */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search any location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleSearch()
            }
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#0F4C5C]"
          />

          <button
            onClick={handleSearch}
            className="bg-[#0F4C5C] text-white px-6 py-3 rounded-xl hover:bg-[#0c3d4a]"
          >
            Search
          </button>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <MapContainer
            center={[28.3949, 84.124]}
            zoom={7}
            className="h-[600px] w-full"
          >
            <TileLayer
              attribution="© OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <SearchMap position={position} />

            {position && (
              <Marker position={position}>
                <Popup>
                  <strong>Search Result</strong>
                </Popup>
              </Marker>
            )}

            {/* Kathmandu */}
            <Marker position={[27.7172, 85.324]}>
              <Popup>
                <strong>Kathmandu</strong>
                <br />
                Capital of Nepal
              </Popup>
            </Marker>

            {/* Pokhara */}
            <Marker position={[28.2096, 83.9856]}>
              <Popup>
                <strong>Pokhara</strong>
                <br />
                Adventure Capital
              </Popup>
            </Marker>

            {/* Chitwan */}
            <Marker position={[27.5291, 84.3542]}>
              <Popup>
                <strong>Chitwan</strong>
                <br />
                Wildlife Safaris
              </Popup>
            </Marker>

            {/* Lumbini */}
            <Marker position={[27.4844, 83.276]}>
              <Popup>
                <strong>Lumbini</strong>
                <br />
                Birthplace of Buddha
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Floating Card */}
        <div className="absolute top-24 left-12 bg-white rounded-2xl shadow-xl p-6 w-72 z-[1000]">
          <h3 className="font-bold text-xl text-[#0F4C5C] mb-3">
            Region Spotlight
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Select a marker on the map to view trekking routes,
            local weather, and destination details.
          </p>

          <div className="space-y-2 text-sm">
            <p className="text-green-600 font-semibold">
              ✓ 120+ Destinations
            </p>

            <p className="text-orange-500 font-semibold">
              🏔️ 40+ Trekking Routes
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center uppercase tracking-widest text-orange-500 text-sm mb-4">
            The Land Of Wonders
          </p>

          <h2 className="text-center text-5xl font-bold text-[#0F4C5C] mb-16">
            A Journey Through Nepal's Diverse Topography
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
                alt="Himalayas"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">
                  The Great Himalayas
                </h3>

                <p className="text-gray-600 mb-4">
                  Home to eight of the world's highest peaks,
                  including Mount Everest.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800"
                alt="Valley"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">
                  Mystical Valleys
                </h3>

                <p className="text-gray-600 mb-4">
                  Explore heritage cities, temples and rich
                  cultural traditions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800"
                alt="Safari"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">
                  Wild Jungle Safaris
                </h3>

                <p className="text-gray-600 mb-4">
                  Discover rhinos, tigers and unique wildlife
                  in Nepal's national parks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Maps;