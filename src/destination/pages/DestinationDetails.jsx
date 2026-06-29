import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDestinationById } from "../../services/destinationService";

import HeroSection from "../components/HeroSection";
// import AboutSection from "../components/AboutSection";
// import ThingsToDo from "../components/ThingsToDo";
// import PlacesToVisit from "../components/PlacesToVisit";
// import AdventureSection from "../components/AdventureSection";
// import HotelsSection from "../components/HotelsSection";
// import RestaurantsSection from "../components/RestaurantsSection";

export default function DestinationDetails() {
  const { id } = useParams();

  const [destination, setDestination] = useState(null);

  useEffect(() => {
    async function loadDestination() {
      const data = await getDestinationById(id);
      setDestination(data);
    }

    loadDestination();
  }, [id]);

  if (!destination) {
    return (
      <div className="text-center text-3xl mt-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCF9F8]">

      <HeroSection destination={destination} />

      <AboutSection description={destination.description} />

      <ThingsToDo things={destination.thingsToDo} />

      <PlacesToVisit places={destination.placesToVisit} />

      <AdventureSection adventures={destination.adventures} />

      <HotelsSection hotels={destination.hotels} />

      <RestaurantsSection restaurants={destination.restaurants} />

    </div>
  );
}