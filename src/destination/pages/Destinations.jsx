import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DestinationGrid from "../../dashboard/components/DestinationGrid";

export default function Destinations() {
  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <main className="px-10 py-8">
          <DestinationGrid />

        </main>
      </div>
    </div>
  );
}

