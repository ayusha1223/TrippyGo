import AdminSidebar from "../components/AdminSidebar";
import AdminStats from "../components/AdminStats";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}

      <AdminSidebar />

      {/* Main */}

      <div className="flex-1 ml-72">

        <div className="p-10">

          <h1 className="text-4xl font-bold text-[#0F4C81]">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome to the TrippyGo Administration Panel.
          </p>

          <div className="mt-10">

    <AdminStats />

</div>

        </div>

      </div>

    </div>
  );
}