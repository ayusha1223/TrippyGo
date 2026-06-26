import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import HeroBanner from "../components/HeroBanner";
import StatsCards from "../components/StatsCards";
import DestinationGrid from "../components/DestinationGrid";
import AIPlannerCard from "../components/AIPlannerCard";
import DashboardFooter from "../components/DashboardFooter";
import DestinationCard from "../components/DestinationCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Navigation */}
        <Topbar />

        {/* Main Dashboard */}
        <main className="px-10 py-8 space-y-10">

          <HeroBanner />

          <StatsCards />

          <DestinationGrid />

          <DestinationCard />

          <AIPlannerCard />

          <DashboardFooter />

        </main>
      </div>
    </div>
  );
}