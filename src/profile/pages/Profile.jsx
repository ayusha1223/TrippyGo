import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DashboardFooter from "../../dashboard/components/DashboardFooter";
import ProfileOverview from "../components/ProfileOverview";
import PersonalInformationCard from "../components/PersonalInformationCard";
export default function Profile() {
  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col min-h-screen">

        <Topbar />

        <main className="flex-1 px-10 py-8">

          <h1 className="text-5xl font-bold text-[#1A5F7A]">
            My Profile
          </h1>

         <div className="space-y-8">

  <ProfileOverview />

  <PersonalInformationCard />

</div>

        </main>

        <DashboardFooter />

      </div>

    </div>
  );
}