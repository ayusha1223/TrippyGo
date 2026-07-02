import { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  getProfile,
  updateProfile,
} from "../../services/userService";

export default function PersonalInformationCard() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {

    async function loadProfile() {

      try {

        const data = await getProfile();

        setProfile({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          location: data.location || "",
        });

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    loadProfile();

  }, []);

  function handleChange(e) {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

  }

  if (loading) {

    return (
      <div className="bg-white rounded-3xl shadow-lg p-10">
        Loading Profile...
      </div>
    );

  }

  async function handleSave() {

  try {

    setSaving(true);

    await updateProfile(profile);

    alert("Profile updated successfully.");

  } catch (error) {

    console.error(error);

    alert("Failed to update profile.");

  } finally {

    setSaving(false);

  }

}

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-[#1A5F7A] mb-8">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Name */}

        <div>

          <label className="font-semibold">
            Full Name
          </label>

          <div className="relative mt-2">

            <FaUser className="absolute left-5 top-5 text-gray-400" />

            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border rounded-2xl py-4 pl-14 pr-4"
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label className="font-semibold">
            Email
          </label>

          <div className="relative mt-2">

            <FaEnvelope className="absolute left-5 top-5 text-gray-400" />

            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border rounded-2xl py-4 pl-14 pr-4"
            />

          </div>

        </div>

        {/* Phone */}

        <div>

          <label className="font-semibold">
            Phone
          </label>

          <div className="relative mt-2">

            <FaPhone className="absolute left-5 top-5 text-gray-400" />

            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full border rounded-2xl py-4 pl-14 pr-4"
            />

          </div>

        </div>

        {/* Location */}

        <div>

          <label className="font-semibold">
            Location
          </label>

          <div className="relative mt-2">

            <FaMapMarkerAlt className="absolute left-5 top-5 text-gray-400" />

            <input
              name="location"
              value={profile.location}
              onChange={handleChange}
              className="w-full border rounded-2xl py-4 pl-14 pr-4"
            />

          </div>

        </div>
              </div>

      {/* Save Button */}

      <div className="flex justify-end mt-10">

        <button
          onClick={handleSave}
          disabled={saving}
          className="
            bg-[#1A5F7A]
            hover:bg-[#14495F]
            text-white
            px-8
            py-4
            rounded-2xl
            font-semibold
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

      </div>

    </div>
  );

}