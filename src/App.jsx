import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LandingPage from "./landing/pages/LandingPage";
import Maps from "./landing/pages/Maps";
import HotelDetails from "./landing/pages/HotelDetails";
import AIGuide from "./landing/pages/AIGuide";
import Adventure from "./landing/pages/Adventures";
import Adventures from "./adventure/pages/Adventure";

import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import ForgotPassword from "./auth/pages/ForgotPassword";

import Dashboard from "./dashboard/pages/Dashboard";
import Profile from "./profile/pages/Profile";

import Destinations from "./destination/pages/Destinations";
import DestinationDetails from "./destination/pages/DestinationDetails";

import AIAssistant from "./ai/pages/AIAssistant";

import MyItineraries from "./itinerary/pages/MyItineraries";

import Saved from "./saved/pages/Saved";
import Favorites from "./favorites/pages/Favorites";

import Settings from "./settings/pages/Settings";

import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminDestinations from "./admin/pages/AdminDestinations";
import AdminUsers from "./admin/pages/AdminUsers";
import AdminItineraries from "./admin/pages/AdminItineraries";
import AdminSettings from "./admin/pages/AdminSettings";

import ActivityDetails from "./explore/pages/ActivityDetails";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#1f2937",
            borderRadius: "16px",
            padding: "16px",
            fontSize: "15px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          },

          success: {
            iconTheme: {
              primary: "#16a34a",
              secondary: "#ffffff",
            },
          },

          error: {
            iconTheme: {
              primary: "#dc2626",
              secondary: "#ffffff",
            },
          },
        }}
      />

      <Routes>
        {/* Landing */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/hotel-details" element={<HotelDetails />} />
        <Route path="/adventures" element={<Adventure />} />
        <Route path="/ai-guide" element={<AIGuide />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* User */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/explorer" element={<Adventures />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/itinerary" element={<MyItineraries />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/activity-details" element={<ActivityDetails />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/admin/destinations"
          element={<AdminDestinations />}
        />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route
          path="/admin/itineraries"
          element={<AdminItineraries />}
        />
        <Route
          path="/admin/settings"
          element={<AdminSettings />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;