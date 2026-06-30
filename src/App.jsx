import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./landing/pages/LandingPage";
import Maps from "./landing/pages/Maps";
import HotelDetails from "./landing/pages/HotelDetails";
import  AIGuide from "./landing/pages/AIGuide";
import Adventure from "./landing/pages/Adventures";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import ForgotPassword from "./auth/pages/ForgotPassword";
import Dashboard from "./dashboard/pages/Dashboard";
import Profile from "./profile/pages/Profile";
import Destinations from "./destination/pages/Destinations";
import DestinationDetails from "./destination/pages/DestinationDetails";
import AIAssistant from "./ai/pages/AIAssistant";
import MyItineraries from "./itinerary/pages/MyItineraries";
function App() {
return ( <BrowserRouter> <Routes>

    {/* Landing Page */}
    <Route path="/" element={<LandingPage />} />

    {/* Maps Page */}
    <Route path="/maps" element={<Maps />} />
    <Route path="/hotel-details" element={<HotelDetails />} />
    <Route path="/adventures" element={<Adventure />} />
    <Route path="/ai-guide" element={<AIGuide />} />
    {/* Authentication */}
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/dashboard" element={<Dashboard />} />
  <Route
    path="/destinations"
    element={<Destinations />}
/>
<Route
    path="/ai-assistant"
    element={<AIAssistant />}
/>
<Route
    path="/itinerary"
    element={<MyItineraries />}
/>

<Route
    path="/destination/:id"
    element={<DestinationDetails />}
/>

  </Routes>
</BrowserRouter>


);
}

export default App;
