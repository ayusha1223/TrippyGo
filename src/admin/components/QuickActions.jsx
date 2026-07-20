import {
  FaPlus,
  FaUsers,
  FaMapMarkedAlt,
  FaDownload,
} from "react-icons/fa";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-[#0F4C81] mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-4 gap-5">
        <button className="bg-[#2563EB] text-white rounded-2xl p-6 hover:scale-105 transition">
          <FaMapMarkedAlt size={28} className="mb-3" />
          Add Destination
        </button>

        <button className="bg-[#10B981] text-white rounded-2xl p-6 hover:scale-105 transition">
          <FaUsers size={28} className="mb-3" />
          Add User
        </button>

        <button className="bg-[#F59E0B] text-white rounded-2xl p-6 hover:scale-105 transition">
          <FaPlus size={28} className="mb-3" />
          Add Itinerary
        </button>

        <button className="bg-[#EF4444] text-white rounded-2xl p-6 hover:scale-105 transition">
          <FaDownload size={28} className="mb-3" />
          Export Report
        </button>
      </div>
    </div>
  );
}