import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import HeroBanner from "../components/HeroBanner";
import StatsCards from "../components/StatsCards";
import DestinationGrid from "../components/DestinationGrid";
import AIPlannerCard from "../components/AIPlannerCard";
import DashboardFooter from "../components/DashboardFooter";

export default function Dashboard() {
  // Empty means no filter, so all destinations load initially
  const [category, setCategory] = useState("");

  return (
    <div className="flex min-h-screen bg-[#FCF9F8]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="ml-64 flex-1">
        <Topbar
          category={category}
          setCategory={setCategory}
        />

        <main className="space-y-10 px-10 py-8">
          {/* <HeroBanner /> */}

          <StatsCards />

          <DestinationGrid
            limit={8}
            category={category}
          />

          <AIPlannerCard />

          <DashboardFooter />
        </main>
      </div>
    </div>
  );
}