import { FaRoute } from "react-icons/fa";

export default function RecentActivity({ dashboard }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-[#0F4C81] mb-6">
        Recent Itineraries
      </h2>

      <div className="space-y-5">
        {dashboard.recentItineraries.map((item) => (
          <div
            key={item._id}
            className="flex items-start gap-4 border-b pb-4 last:border-none"
          >
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
              <FaRoute className="text-orange-500" />
            </div>

            <div className="flex-1">
              <p className="font-semibold">
                {item.title}
              </p>

              <p className="text-gray-500">
                {item.user?.name || "Unknown User"}
              </p>

              <p className="text-sm text-gray-400">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}