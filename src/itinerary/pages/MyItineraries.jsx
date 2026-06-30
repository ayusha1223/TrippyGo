import { useEffect, useState } from "react";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DashboardFooter from "../../dashboard/components/DashboardFooter";

import ItineraryGenerator from "../components/ItineraryGenerator";
import SavedItineraryCard from "../components/SavedItineraryCard";

import {
  getItineraries,
  deleteItinerary,
} from "../services/itineraryService";

export default function MyItineraries() {
  const [itineraries, setItineraries] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    loadItineraries();
  }, []);

  async function loadItineraries() {
    try {
      const data = await getItineraries();
      setItineraries(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    await deleteItinerary(id);
    loadItineraries();
  }

  function handleView(trip) {
    setSelectedTrip(trip);
  }

  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      <Sidebar />

      <div className="flex-1 ml-60">

        <Topbar />

        <main className="p-8">

          <h1 className="text-5xl font-bold text-[#1A5F7A] mb-10">
            My Itineraries
          </h1>

          <div className="grid grid-cols-12 gap-8">

            {/* LEFT */}

            <div className="col-span-4">

              <div className="bg-white rounded-3xl shadow-xl p-6">

                <h2 className="text-2xl font-bold mb-6">
                  Saved Itineraries
                </h2>

                <div className="space-y-5">

                  {itineraries.length === 0 ? (

                    <p className="text-gray-500">
                      No itineraries yet.
                    </p>

                  ) : (

                    itineraries.map((trip) => (

                      <SavedItineraryCard
                        key={trip._id}
                        trip={trip}
                        onView={handleView}
                        onDelete={handleDelete}
                      />

                    ))

                  )}

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="col-span-8">

              {selectedTrip ? (

                <ItineraryGenerator
                  initialTrip={selectedTrip}
                  onSaved={loadItineraries}
                />

              ) : (

                <ItineraryGenerator
                  onSaved={loadItineraries}
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