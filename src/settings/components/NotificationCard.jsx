import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBell } from "react-icons/fa";

const notificationItems = [
  {
    key: "destinationUpdates",
    titleKey: "notification.destinationUpdates.title",
    descriptionKey: "notification.destinationUpdates.description",
  },
  {
    key: "aiSuggestions",
    titleKey: "notification.aiSuggestions.title",
    descriptionKey: "notification.aiSuggestions.description",
  },
  {
    key: "itineraryReminders",
    titleKey: "notification.itineraryReminders.title",
    descriptionKey: "notification.itineraryReminders.description",
  },
  {
    key: "travelNews",
    titleKey: "notification.travelNews.title",
    descriptionKey: "notification.travelNews.description",
  },
  {
    key: "promotions",
    titleKey: "notification.promotions.title",
    descriptionKey: "notification.promotions.description",
  },
];

export default function NotificationCard() {
  const { t } = useTranslation();

  const [notifications, setNotifications] = useState({
    destinationUpdates: true,
    aiSuggestions: true,
    itineraryReminders: false,
    travelNews: true,
    promotions: false,
  });

  function toggle(name) {
    setNotifications((previousNotifications) => ({
      ...previousNotifications,
      [name]: !previousNotifications[name],
    }));
  }

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-14 h-14 rounded-2xl bg-yellow-100 flex
                     items-center justify-center text-yellow-600"
        >
          <FaBell size={24} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            {t("notification.title")}
          </h2>

          <p className="text-gray-500">
            {t("notification.description")}
          </p>
        </div>
      </div>

      {/* Notification options */}
      <div className="space-y-6">
        {notificationItems.map((item, index) => {
          const isEnabled = notifications[item.key];

          return (
            <div
              key={item.key}
              className={`flex justify-between items-center gap-5 pb-5 ${
                index !== notificationItems.length - 1
                  ? "border-b"
                  : ""
              }`}
            >
              <div>
                <h3 className="font-bold text-lg">
                  {t(item.titleKey)}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {t(item.descriptionKey)}
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={isEnabled}
                aria-label={`${t(item.titleKey)}: ${
                  isEnabled
                    ? t("common.enabled")
                    : t("common.disabled")
                }`}
                onClick={() => toggle(item.key)}
                className={`w-16 h-9 rounded-full transition relative
                            flex-shrink-0 ${
                              isEnabled
                                ? "bg-[#1A5F7A]"
                                : "bg-gray-300"
                            }`}
              >
                <span
                  className={`absolute top-1 w-7 h-7 rounded-full
                              bg-white shadow-sm transition-all ${
                                isEnabled ? "left-8" : "left-1"
                              }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}