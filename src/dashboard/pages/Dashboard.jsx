import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import HeroBanner from "../components/HeroBanner";
import StatsCards from "../components/StatsCards";
import DestinationGrid from "../components/DestinationGrid";
import AIPlannerCard from "../components/AIPlannerCard";
import DashboardFooter from "../components/DashboardFooter";

export default function Dashboard() {

  const [category, setCategory] = useState("Mountain");

  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex-1 ml-64">

        {/* Topbar */}

        <Topbar
          category={category}
          setCategory={setCategory}
        />

        {/* Dashboard */}

        <main className="px-10 py-8 space-y-10">

          <HeroBanner />

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