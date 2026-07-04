import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { getAdminProfile } from "../services/adminService";

export default function AdminSettings() {


 const [profile, setProfile] = useState({
  name: "",
  email: "",
  phone: "",
  role: "",
});
useEffect(() => {

  loadProfile();

}, []);

async function loadProfile() {

  try {

    const data = await getAdminProfile();

    setProfile({
      name: data.name || "",
      email: data.email || "",
      phone: data.phone || "",
      role: data.role || "",
    });

  } catch (error) {

    console.error(error);

    alert("Failed to load admin profile.");

  }

}

  const [appearance, setAppearance] = useState({
    theme: "Light",
    primaryColor: "Blue",
  });

  function handleProfileChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  }

  function handleAppearanceChange(e) {
    setAppearance({
      ...appearance,
      [e.target.name]: e.target.value,
    });
  }

  function saveProfile() {
    alert("Profile saved successfully.");
  }

  function saveAppearance() {
    alert("Appearance saved successfully.");
  }

  return (

    <div className="min-h-screen bg-gray-100 flex">

      <AdminSidebar />

      <div className="flex-1 ml-72 p-10">

        {/* Heading */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-[#0F4C81]">
            Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your admin profile, appearance and system information.
          </p>

        </div>

        {/* ================= Profile ================= */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold text-[#0F4C81] mb-8">
            Admin Profile
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-semibold">
                Name
              </label>

              <input
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full border rounded-xl p-4 mt-2"
              />

            </div>

            <div>

              <label className="font-semibold">
                Email
              </label>

              <input
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full border rounded-xl p-4 mt-2"
              />

            </div>

            <div>

              <label className="font-semibold">
                Phone
              </label>

              <input
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className="w-full border rounded-xl p-4 mt-2"
              />

            </div>

            <div>

              <label className="font-semibold">
                Role
              </label>

              <input
                value={profile.role}
                readOnly
                className="w-full border rounded-xl p-4 mt-2 bg-gray-100"
              />

            </div>

          </div>

          <div className="flex justify-end mt-8">

            <button
              onClick={saveProfile}
              className="bg-[#0F4C81] text-white px-8 py-3 rounded-xl hover:bg-blue-700"
            >
              Save Profile
            </button>

          </div>

        </div>

        {/* ================= Appearance ================= */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold text-[#0F4C81] mb-8">
            Appearance
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-semibold">
                Theme
              </label>

              <select
                name="theme"
                value={appearance.theme}
                onChange={handleAppearanceChange}
                className="w-full border rounded-xl p-4 mt-2"
              >
                <option>Light</option>
                <option>Dark</option>
              </select>

            </div>

            <div>

              <label className="font-semibold">
                Primary Color
              </label>

              <select
                name="primaryColor"
                value={appearance.primaryColor}
                onChange={handleAppearanceChange}
                className="w-full border rounded-xl p-4 mt-2"
              >
                <option>Blue</option>
                <option>Green</option>
                <option>Orange</option>
                <option>Purple</option>
              </select>

            </div>

            <div>

              <label className="font-semibold">
                Website Logo
              </label>

              <input
                type="file"
                className="w-full border rounded-xl p-3 mt-2"
              />

            </div>

            <div>

              <label className="font-semibold">
                Homepage Banner
              </label>

              <input
                type="file"
                className="w-full border rounded-xl p-3 mt-2"
              />

            </div>

          </div>

          <div className="flex justify-end mt-8">

            <button
              onClick={saveAppearance}
              className="bg-[#0F4C81] text-white px-8 py-3 rounded-xl hover:bg-blue-700"
            >
              Save Appearance
            </button>

          </div>

        </div>

        {/* ================= System Information ================= */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-[#0F4C81] mb-8">
            System Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <p className="text-gray-500 font-semibold">
                Application
              </p>

              <p className="text-lg font-bold">
                TrippyGo
              </p>

            </div>

            <div>

              <p className="text-gray-500 font-semibold">
                Frontend
              </p>

              <p className="text-lg">
                React + Vite
              </p>

            </div>

            <div>

              <p className="text-gray-500 font-semibold">
                Backend
              </p>

              <p className="text-lg">
                Node.js + Express
              </p>

            </div>

            <div>

              <p className="text-gray-500 font-semibold">
                Database
              </p>

              <p className="text-lg">
                MongoDB
              </p>

            </div>

            <div>

              <p className="text-gray-500 font-semibold">
                Server Status
              </p>

              <p className="text-green-600 font-bold">
                ● Online
              </p>

            </div>

            <div>

              <p className="text-gray-500 font-semibold">
                Version
              </p>

              <p className="text-lg">
                v1.0
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}