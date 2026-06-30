import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DashboardFooter from "../../dashboard/components/DashboardFooter";

import AIChat from "../components/AIChat";

export default function AIAssistant() {
  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-60">

        {/* Topbar */}
        <Topbar />

        {/* Page */}
        <main className="px-10 py-8">

          <div className="mb-8">

            <h1 className="text-5xl font-bold text-[#1A5F7A]">
              AI Assistant
            </h1>

            <p className="text-gray-500 mt-2">
              Chat with TrippyGo AI about destinations, hotels, trekking and travel planning.
            </p>

          </div>

          <AIChat />

        </main>

        <DashboardFooter />

      </div>

    </div>
  );
}