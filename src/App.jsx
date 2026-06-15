import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./landing/pages/LandingPage";

import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import ForgotPassword from "./auth/pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;