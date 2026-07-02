import { useState } from "react";
import { FaBell } from "react-icons/fa";

export default function NotificationCard() {

  const [notifications, setNotifications] = useState({
    destinationUpdates: true,
    aiSuggestions: true,
    itineraryReminders: false,
    travelNews: true,
    promotions: false,
  });

  function toggle(name) {
    setNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  const items = [
    {
      key: "destinationUpdates",
      title: "Destination Updates",
      description: "Receive updates about new destinations."
    },
    {
      key: "aiSuggestions",
      title: "AI Travel Suggestions",
      description: "Get personalized AI travel recommendations."
    },
    {
      key: "itineraryReminders",
      title: "Itinerary Reminders",
      description: "Receive reminders for your saved itineraries."
    },
    {
      key: "travelNews",
      title: "Travel News",
      description: "Stay informed about tourism news in Nepal."
    },
    {
      key: "promotions",
      title: "Special Offers",
      description: "Receive discounts and promotional offers."
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-md p-8">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600">

          <FaBell size={24} />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            Notifications
          </h2>

          <p className="text-gray-500">
            Manage your notification preferences.
          </p>

        </div>

      </div>

      <div className="space-y-6">

        {items.map((item) => (

          <div
            key={item.key}
            className="flex justify-between items-center border-b pb-5"
          >

            <div>

              <h3 className="font-bold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {item.description}
              </p>

            </div>

            <button
              onClick={() => toggle(item.key)}
              className={`
                w-16
                h-9
                rounded-full
                transition
                relative

                ${
                  notifications[item.key]
                    ? "bg-[#1A5F7A]"
                    : "bg-gray-300"
                }
              `}
            >

              <span
                className={`
                  absolute
                  top-1
                  w-7
                  h-7
                  rounded-full
                  bg-white
                  transition

                  ${
                    notifications[item.key]
                      ? "left-8"
                      : "left-1"
                  }
                `}
              />

            </button>

          </div>

        ))}

      </div>

    </div>

  );
}