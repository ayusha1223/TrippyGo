import { useLocation, useNavigate } from "react-router-dom";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DashboardFooter from "../../dashboard/components/DashboardFooter";

export default function ActivityDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No data found.
      </div>
    );
  }

  const { item } = state;

  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Topbar />

        <main className="px-10 py-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 bg-[#1A5F7A] text-white px-5 py-2 rounded-xl hover:bg-[#15485e]"
          >
            ← Back
          </button>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

            {/* Hero Image */}

            <img
              src={item.image}
              alt={item.title || item.name}
              className="w-full h-[450px] object-cover"
            />

            <div className="p-10">

              <h1 className="text-5xl font-bold text-[#1A5F7A]">
                {item.title || item.name}
              </h1>

              <p className="mt-6 text-gray-600 leading-8 text-lg">
                {item.description}
              </p>

              {/* Information */}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                <Info title="📍 Location" value={item.location} />

                <Info
                  title="💰 Price"
                  value={
                    item.price
                      ? `$${item.price}`
                      : item.entryFee || "Free"
                  }
                />

                <Info title="⭐ Rating" value={item.rating} />

                <Info title="⏱ Duration" value={item.duration} />

                <Info title="🌤 Best Time" value={item.bestTime} />

                <Info title="🥾 Difficulty" value={item.difficulty} />

                <Info title="🏔 Max Altitude" value={item.maxAltitude} />

                <Info title="👥 Group Size" value={item.groupSize} />

                <Info
                  title="🎂 Minimum Age"
                  value={item.minimumAge}
                />

                <Info
                  title="🚐 Pickup Location"
                  value={item.pickupLocation}
                />

                <Info
                  title="🕒 Opening Hours"
                  value={item.openingHours}
                />

              </div>

              {/* Gallery */}

              {item.gallery?.length > 0 && (
                <div className="mt-14">

                  <h2 className="text-3xl font-bold text-[#1A5F7A] mb-6">
                    Gallery
                  </h2>

                  <div className="grid md:grid-cols-3 gap-5">

                    {item.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt=""
                        className="rounded-2xl h-64 w-full object-cover shadow"
                      />
                    ))}

                  </div>

                </div>
              )}

              {/* Highlights */}

              {item.highlights?.length > 0 && (
                <Section
                  title="Highlights"
                  color="text-[#1A5F7A]"
                  items={item.highlights}
                />
              )}

              {/* Itinerary */}

              {item.itinerary?.length > 0 && (
                <Section
                  title="Itinerary"
                  color="text-[#1A5F7A]"
                  items={item.itinerary}
                />
              )}

              {/* Includes */}

              {item.includes?.length > 0 && (
                <Section
                  title="What's Included"
                  color="text-green-600"
                  items={item.includes}
                />
              )}

              {/* Excludes */}

              {item.excludes?.length > 0 && (
                <Section
                  title="Not Included"
                  color="text-red-500"
                  items={item.excludes}
                />
              )}

              {/* Things To Carry */}

              {item.thingsToCarry?.length > 0 && (
                <Section
                  title="Things To Carry"
                  color="text-[#1A5F7A]"
                  items={item.thingsToCarry}
                />
              )}

              {/* Safety Tips */}

              {item.safetyTips?.length > 0 && (
                <Section
                  title="Safety Tips"
                  color="text-red-500"
                  items={item.safetyTips}
                />
              )}

              {/* Travel Tips */}

              {item.tips?.length > 0 && (
                <Section
                  title="Travel Tips"
                  color="text-[#1A5F7A]"
                  items={item.tips}
                />
              )}

            </div>
          </div>
        </main>

        <DashboardFooter />
      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="border rounded-2xl p-5 shadow-sm">
      <h3 className="font-bold text-[#1A5F7A]">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {value || "Not Available"}
      </p>
    </div>
  );
}

function Section({ title, color, items }) {
  return (
    <div className="mt-14">

      <h2 className={`text-3xl font-bold ${color}`}>
        {title}
      </h2>

      <ul className="list-disc pl-6 mt-5 space-y-2 text-gray-700">

        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}