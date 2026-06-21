import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./landing/pages/LandingPage";
import Maps from "./landing/pages/Maps";
import HotelDetails from "./landing/pages/HotelDetails";
import  AIGuide from "./landing/pages/AIGuide";
import Adventure from "./landing/pages/Adventures";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import ForgotPassword from "./auth/pages/ForgotPassword";

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
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />

  </Routes>
</BrowserRouter>


);
}

export default App;
