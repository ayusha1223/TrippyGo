import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DashboardFooter from "../../dashboard/components/DashboardFooter";

import ItineraryCard from "../components/ItineraryCard";

const itineraries = [
  {
    id: 1,
    destination: "Pokhara",
    days: 5,
    budget: "$800",
    created: "Today",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    destination: "Everest Base Camp",
    days: 12,
    budget: "$2500",
    created: "2 Days Ago",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function MyItineraries() {
  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      <Sidebar />

      <div className="flex-1 ml-60">

        <Topbar />

        <main className="px-10 py-8">

          <h1 className="text-5xl font-bold text-[#1A5F7A]">
            My Itineraries
          </h1>

          <p className="text-gray-500 mt-2 mb-10">
            Your saved AI travel plans.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {itineraries.map((trip) => (
              <ItineraryCard
                key={trip.id}
                trip={trip}
              />
            ))}

          </div>

        </main>

        <DashboardFooter />

      </div>

    </div>
  );
}