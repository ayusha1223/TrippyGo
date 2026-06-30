import { useEffect, useState } from "react";
import {
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaDollarSign,
  FaCompass,
  FaMagic,
  FaPlus,
  FaUsers,
  FaFlag,
} from "react-icons/fa";

import { generateItinerary } from "../services/itineraryGeneratorService";
import { saveItinerary } from "../services/itineraryService";

export default function ItineraryGenerator({
  initialTrip,
  onSaved,
}) {

  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(5);
  const [budget, setBudget] = useState(800);
  const [interests, setInterests] = useState("");
  const [travellers, setTravellers] = useState(2);
const [trip, setTrip] = useState(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (initialTrip) {

      setTrip(initialTrip);
      setSaved(true);

    }

  }, [initialTrip]);

  async function handleGenerate() {

    try {

      setLoading(true);

      const result = await generateItinerary({
        destination,
        days,
        budget,
        interests,
        travellers,
      });

      setTrip(result);
      setSaved(false);

    } catch (err) {

      console.error(err);
      alert("Failed to generate itinerary.");

    } finally {

      setLoading(false);

    }

  }

  async function handleSave() {

    try {

      await saveItinerary(trip);

      setSaved(true);

      if (onSaved) onSaved();

    } catch (err) {

      console.error(err);

    }

  }

  function handleNewTrip() {

    setTrip(null);

    setSaved(false);

    setDestination("");
    setDays(5);
    setBudget(800);
    setInterests("");
    setTravellers(2);
  }

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8">

      {/* FORM */}

      {!trip && (

        <>

          <div className="bg-gradient-to-r from-[#1A5F7A] to-[#2E8BC0] rounded-3xl p-8 text-white">

            <h1 className="text-4xl font-bold">
              ✈️ AI Trip Planner
            </h1>

            <p className="mt-3 text-white/90">
              Create a personalized itinerary for anywhere in Nepal.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">

            <div className="bg-gray-50 rounded-2xl border p-5">

              <label className="flex gap-2 items-center font-semibold text-[#1A5F7A] mb-3">

                <FaMapMarkedAlt />

                Destination

              </label>

              <input
                value={destination}
                onChange={(e)=>setDestination(e.target.value)}
                placeholder="Pokhara"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-[#1A5F7A] outline-none"
              />

            </div>

            <div className="bg-gray-50 rounded-2xl border p-5">

              <label className="flex gap-2 items-center font-semibold text-[#1A5F7A] mb-3">

                <FaCalendarAlt />

                Days

              </label>

              <input
                type="number"
                value={days}
                onChange={(e)=>setDays(Number(e.target.value))}
                className="w-full border rounded-xl p-4"
              />

            </div>

            <div className="bg-gray-50 rounded-2xl border p-5">

              <label className="flex gap-2 items-center font-semibold text-[#1A5F7A] mb-3">

                <FaDollarSign />

                Budget

              </label>

              <input
                type="number"
                value={budget}
                onChange={(e)=>setBudget(Number(e.target.value))}
                className="w-full border rounded-xl p-4"
              />

            </div>

            <div className="bg-gray-50 rounded-2xl border p-5">

              <label className="flex gap-2 items-center font-semibold text-[#1A5F7A] mb-3">

                <FaCompass />

                Interests

              </label>

              <input
                value={interests}
                onChange={(e)=>setInterests(e.target.value)}
                placeholder="Adventure, Hiking, Food..."
                className="w-full border rounded-xl p-4"
              />

            </div>
            <div className="bg-gray-50 rounded-2xl border p-5">

  <label className="flex gap-2 items-center font-semibold text-[#1A5F7A] mb-3">

    <FaUsers />

    Travellers

  </label>

  <input
    type="number"
    min="1"
    value={travellers}
    onChange={(e) => setTravellers(Number(e.target.value))}
    className="w-full border rounded-xl p-4"
  />

</div>

          </div>

          <button

            onClick={handleGenerate}

            disabled={loading}

            className="
              mt-8
              w-full
              h-16
              rounded-2xl
              bg-gradient-to-r
              from-[#1A5F7A]
              to-[#2E8BC0]
              text-white
              font-bold
              text-lg
              flex
              justify-center
              items-center
              gap-3
              hover:scale-[1.02]
              transition
            "

          >

            <FaMagic />

            {loading
              ? "Generating..."
              : "Generate AI Itinerary"}

          </button>

        </>

      )}

      {/* GENERATED */}

      {trip && (

        <>

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold">
                {trip.title}
              </h1>

              <div className="flex gap-8 mt-3 text-gray-600">

                <span>
                  📍 {trip.destination}
                </span>

                <span>
                  🗓 {trip.days} Days
                </span>

                <span>
                  💰 ${trip.budget}
                </span>

              </div>

            </div>

            <button

              onClick={handleNewTrip}

              className="
                flex
                items-center
                gap-2
                bg-[#1A5F7A]
                text-white
                px-5
                py-3
                rounded-xl
                hover:bg-[#15475D]
              "

            >

              <FaPlus />

            

            </button>

          </div>

          <div className="space-y-5">

            {trip.itinerary.map((day)=>(

              <div

                key={day.day}

                className="border rounded-2xl p-6 hover:shadow-md transition"

              >

                <h2 className="font-bold text-xl">

                  Day {day.day}: {day.title}

                </h2>

                <p className="mt-3 text-gray-600">

                  {day.description}

                </p>

              </div>

            ))}

          </div>

          {!saved && (

            <button

              onClick={handleSave}

              className="
                mt-8
                w-full
                bg-green-600
                text-white
                py-4
                rounded-2xl
                text-lg
                font-semibold
                hover:bg-green-700
                transition
              "

            >

              💾 Save Itinerary

            </button>

          )}

          {saved && (

            <button

              disabled

              className="
                mt-8
                w-full
                bg-green-600
                text-white
                py-4
                rounded-2xl
                font-semibold
              "

            >

              ✔ Itinerary Saved

            </button>

          )}

        </>

      )}

    </div>

  );

}