import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDestinationById } from "../../services/destinationService";

// Dashboard Layout
import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DashboardFooter from "../../dashboard/components/DashboardFooter";

// Destination Sections
import HeroSection from "../components/HeroSection";
import ThingsToDo from "../components/ThingsToDo";
import PlacesToVisit from "../components/PlacesToVisit";
import AdventureSection from "../components/AdventureSection";
import HotelsSection from "../components/HotelsSection";
// import RestaurantsSection from "../components/RestaurantsSection";
// import AIPlannerSection from "../components/AIPlannerSection";

export default function DestinationDetails() {
  const { id } = useParams();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDestination() {
      try {
        const data = await getDestinationById(id);
        setDestination(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDestination();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Loading Destination...
        </h1>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          Destination Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">

        {/* Topbar */}
        <Topbar />

        {/* Main */}
        <main className="px-10 py-8 space-y-14">

          {/* Hero */}
          <HeroSection destination={destination} />

          {/* Things To Do */}
          <ThingsToDo
            things={destination.thingsToDo}
          />

          {/* Places */}
          <PlacesToVisit
            places={destination.placesToVisit}
          />

          {/* Adventure */}
          <AdventureSection
            adventures={destination.adventures}
          />

          {/* Hotels */}
          <HotelsSection
            hotels={destination.hotels}
          />

          {/* Restaurants */}
          {/* <RestaurantsSection
            restaurants={destination.restaurants}
          /> */}

          {/* AI Planner */}
          {/* <AIPlannerSection
            destination={destination}
          /> */}

        </main>

        {/* Footer */}
        <DashboardFooter />

      </div>

    </div>
  );
}