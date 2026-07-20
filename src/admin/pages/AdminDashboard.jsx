import { useEffect, useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import AdminStats from "../components/AdminStats";
import DashboardCharts from "../components/DashboardCharts";
import RecentUsers from "../components/RecentUsers";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";

import { getDashboardStats } from "../services/adminService";

export default function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const data = await getDashboardStats();
      setDashboard(data);
    } catch (err) {
      console.error(err);
    }
  }

  if (!dashboard) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar />

      <div className="flex-1 ml-72 p-10">
        <h1 className="text-4xl font-bold text-[#0F4C81]">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to the TrippyGo Administration Panel.
        </p>

        <div className="mt-10">
          <AdminStats dashboard={dashboard} />
        </div>

        <DashboardCharts dashboard={dashboard} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <RecentUsers dashboard={dashboard} />
          <RecentActivity dashboard={dashboard} />
        </div>
      </div>
    </div>
  );
}