import { useEffect, useState } from "react";
import { getItinerary } from "../services/adminService";

export default function ViewItineraryModal({
  itineraryId,
  onClose,
}) {

  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {

    async function loadItinerary() {

      try {

        const data = await getItinerary(itineraryId);

        setItinerary(data);

      } catch (error) {

        console.error(error);

        alert("Failed to load itinerary.");

      }

    }

    if (itineraryId) {
      loadItinerary();
    }

  }, [itineraryId]);

  if (!itinerary) {

    return (

      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

        <div className="bg-white rounded-2xl p-10">
          Loading...
        </div>

      </div>

    );

  }

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-8">

      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-[#0F4C81]">
            View Itinerary
          </h2>

          <button
            onClick={onClose}
            className="bg-red-500 text-white px-5 py-2 rounded-xl"
          >
            Close
          </button>

        </div>

       <div className="space-y-8">

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <p className="font-semibold text-gray-500">Title</p>
      <p className="text-xl font-bold">{itinerary.title}</p>
    </div>

    <div>
      <p className="font-semibold text-gray-500">Destination</p>
      <p>{itinerary.destination}</p>
    </div>

    <div>
      <p className="font-semibold text-gray-500">User</p>
      <p>{itinerary.user?.name}</p>
    </div>

    <div>
      <p className="font-semibold text-gray-500">Email</p>
      <p>{itinerary.user?.email}</p>
    </div>

    <div>
      <p className="font-semibold text-gray-500">Duration</p>
      <p>{itinerary.days} Days</p>
    </div>

    <div>
      <p className="font-semibold text-gray-500">Budget</p>
      <p>${itinerary.budget}</p>
    </div>

  </div>

  <hr />

  <h3 className="text-2xl font-bold text-[#0F4C81]">
    Daily Plan
  </h3>

  <div className="space-y-6">

    {itinerary.itinerary.map((day) => (

      <div
        key={day._id}
        className="border rounded-2xl p-6 bg-gray-50"
      >

        <h4 className="text-xl font-bold text-[#0F4C81]">
          Day {day.day}
        </h4>

        <p className="font-semibold mt-2">
          {day.title}
        </p>

        <p className="mt-3 text-gray-700 leading-7">
          {day.description}
        </p>

      </div>

    ))}

  </div>

</div>

      </div>

    </div>

  );

}