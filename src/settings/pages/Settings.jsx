import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DashboardFooter from "../../dashboard/components/DashboardFooter";

import LanguageCard from "../components/LanguageCard";
import AppearanceCard from "../components/AppearanceCard";
import AIPreferencesCard from "../components/AIPreferenceCard";
import NotificationCard from "../components/NotificationCard";
import TravelPreferencesCard from "../components/TravelPreferencesCard";
import SaveSettingsButton from "../components/SaveSettingsButton";

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col min-h-screen">

        <Topbar />

        <main className="flex-1 px-10 py-8">

          {/* Header */}

          <div className="mb-10">

            <h1 className="text-5xl font-bold text-[#1A5F7A]">
              Settings
            </h1>

            <p className="text-gray-500 mt-2">
              Customize your TrippyGo experience.
            </p>

          </div>

          {/* Cards */}

          <div className="space-y-8">

            <LanguageCard />

            <AppearanceCard />

            <TravelPreferencesCard />

            <AIPreferencesCard />

            <NotificationCard />

          </div>

          {/* Save Button */}

          <div className="mt-10">

            <SaveSettingsButton />

          </div>

        </main>

        <DashboardFooter />

      </div>

    </div>
  );
}