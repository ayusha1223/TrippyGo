import { useState } from "react";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DashboardFooter from "../../dashboard/components/DashboardFooter";

import AdventureHero from "../components/AdventureHero";
import AdventureFilters from "../components/AdventureFilters";
import AdventureGrid from "../components/AdventureGrid";

export default function Adventures() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1 ml-64 flex flex-col min-h-screen">

        {/* Top Navigation */}

        <Topbar />

        {/* Main */}

        <main className="flex-1 px-10 py-8">

          {/* Hero */}

          <AdventureHero />

          {/* Filters */}

         <AdventureFilters
  search={search}
  setSearch={setSearch}
  category={category}
  setCategory={setCategory}
/>

          {/* Adventure Grid */}

         <AdventureGrid
  search={search}
  category={category}
/>

        </main>

        {/* Footer */}

        <DashboardFooter />

      </div>

    </div>
  );
}