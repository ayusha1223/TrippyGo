import { useState } from "react";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DestinationGrid from "../../dashboard/components/DestinationGrid";
import DashboardFooter from "../../dashboard/components/DashboardFooter";

export default function Destinations() {

  const [category, setCategory] = useState("All");

  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col min-h-screen">

        <Topbar
          category={category}
          setCategory={setCategory}
        />

        <main className="flex-1 px-10 py-8">

          <DestinationGrid
            category={category}
          />

        </main>

        <DashboardFooter />

      </div>

    </div>
  );
}