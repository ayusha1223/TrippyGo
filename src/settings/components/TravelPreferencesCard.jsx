import { useState } from "react";
import { FaSuitcaseRolling } from "react-icons/fa";

const activities = [
  "Trekking",
  "Mountains",
  "Lakes",
  "Wildlife",
  "Culture",
  "Food",
  "Photography",
  "Camping",
  "Road Trips",
  "Temples",
];

export default function TravelPreferencesCard() {
  const [selected, setSelected] = useState([
    "Mountains",
    "Adventure",
  ]);

  function toggleActivity(activity) {
    if (selected.includes(activity)) {
      setSelected(selected.filter((item) => item !== activity));
    } else {
      setSelected([...selected, activity]);
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">

          <FaSuitcaseRolling size={24} />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            Travel Preferences
          </h2>

          <p className="text-gray-500">
            Select the activities you enjoy the most.
          </p>

        </div>

      </div>

      {/* Activities */}

      <div className="flex flex-wrap gap-4">

        {activities.map((activity) => (

          <button
            key={activity}
            onClick={() => toggleActivity(activity)}
            className={`
              px-5
              py-3
              rounded-xl
              border
              transition

              ${
                selected.includes(activity)
                  ? "bg-[#1A5F7A] text-white border-[#1A5F7A]"
                  : "border-gray-300 hover:border-[#1A5F7A]"
              }
            `}
          >
            {activity}
          </button>

        ))}

      </div>

      {/* Budget */}

      <div className="mt-10">

        <h3 className="text-xl font-bold mb-4">
          Preferred Budget
        </h3>

        <select
          className="
            w-full
            border
            rounded-xl
            px-4
            py-4
            outline-none
            focus:ring-2
            focus:ring-[#1A5F7A]
          "
        >
          <option>Budget</option>
          <option>Mid-range</option>
          <option>Luxury</option>
        </select>

      </div>

      {/* Trip Duration */}

      <div className="mt-8">

        <h3 className="text-xl font-bold mb-4">
          Preferred Trip Duration
        </h3>

        <select
          className="
            w-full
            border
            rounded-xl
            px-4
            py-4
            outline-none
            focus:ring-2
            focus:ring-[#1A5F7A]
          "
        >
          <option>1–3 Days</option>
          <option>4–7 Days</option>
          <option>1–2 Weeks</option>
          <option>2+ Weeks</option>
        </select>

      </div>

    </div>
  );
}