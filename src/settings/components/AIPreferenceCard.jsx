import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function AIPreferencesCard() {
  const [preferences, setPreferences] = useState({
    style: "Balanced",
    budget: "Mid-range",
    pace: "Normal",
  });

  const updatePreference = (key, value) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">

          <FaRobot size={24} />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            AI Planner Preferences
          </h2>

          <p className="text-gray-500">
            Customize how TrippyGo AI plans your trips.
          </p>

        </div>

      </div>

      {/* Travel Style */}

      <div className="mb-8">

        <h3 className="font-bold text-lg mb-4">
          Travel Style
        </h3>

        <div className="flex flex-wrap gap-4">

          {[
            "Adventure",
            "Culture",
            "Nature",
            "Luxury",
            "Relaxation",
          ].map((item) => (

            <button
              key={item}
              onClick={() =>
                updatePreference("style", item)
              }
              className={`px-5 py-3 rounded-xl border transition ${
                preferences.style === item
                  ? "bg-[#1A5F7A] text-white border-[#1A5F7A]"
                  : "border-gray-300 hover:border-[#1A5F7A]"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* Budget */}

      <div className="mb-8">

        <h3 className="font-bold text-lg mb-4">
          Budget Preference
        </h3>

        <div className="flex gap-4">

          {[
            "Budget",
            "Mid-range",
            "Luxury",
          ].map((item) => (

            <button
              key={item}
              onClick={() =>
                updatePreference("budget", item)
              }
              className={`px-5 py-3 rounded-xl border transition ${
                preferences.budget === item
                  ? "bg-[#1A5F7A] text-white border-[#1A5F7A]"
                  : "border-gray-300 hover:border-[#1A5F7A]"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* Trip Pace */}

      <div>

        <h3 className="font-bold text-lg mb-4">
          Trip Pace
        </h3>

        <div className="flex gap-4">

          {[
            "Relaxed",
            "Normal",
            "Packed",
          ].map((item) => (

            <button
              key={item}
              onClick={() =>
                updatePreference("pace", item)
              }
              className={`px-5 py-3 rounded-xl border transition ${
                preferences.pace === item
                  ? "bg-[#1A5F7A] text-white border-[#1A5F7A]"
                  : "border-gray-300 hover:border-[#1A5F7A]"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}