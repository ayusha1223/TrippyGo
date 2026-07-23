import { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";

import {
  getProfile,
  updateProfile,
} from "../../services/userService";

const toastStyle = {
  padding: "16px 24px",
  fontSize: "16px",
  fontWeight: "600",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
};

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
      } catch (error) {
        console.error("Failed to load profile:", error);

        toast.error("Failed to load your profile.", {
          duration: 5000,
          position: "top-center",
          style: {
            ...toastStyle,
            color: "#991B1B",
            background: "#FEE2E2",
            border: "1px solid #FCA5A5",
          },
          iconTheme: {
            primary: "#DC2626",
            secondary: "#FFFFFF",
          },
        });
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setProfile((previousProfile) => ({
      ...previousProfile,
      [name]: value,
    }));
  }

  async function handleSave(event) {
    event.preventDefault();

    if (!profile.name.trim()) {
      toast.error("Full name is required.", {
        position: "top-center",
      });
      return;
    }

    if (!profile.email.trim()) {
      toast.error("Email address is required.", {
        position: "top-center",
      });
      return;
    }

    try {
      setSaving(true);

      const updatedProfile = await updateProfile({
        name: profile.name.trim(),
        email: profile.email.trim(),
        phone: profile.phone.trim(),
        location: profile.location.trim(),
      });

      // Use returned data if the backend returns the updated user
      if (updatedProfile) {
        setProfile((previousProfile) => ({
          name: updatedProfile.name ?? previousProfile.name,
          email: updatedProfile.email ?? previousProfile.email,
          phone: updatedProfile.phone ?? previousProfile.phone,
          location:
            updatedProfile.location ?? previousProfile.location,
        }));
      }

      toast.success("Profile updated successfully!", {
        duration: 4000,
        position: "top-center",
        style: {
          ...toastStyle,
          color: "#166534",
          background: "#DCFCE7",
          border: "1px solid #86EFAC",
        },
        iconTheme: {
          primary: "#16A34A",
          secondary: "#FFFFFF",
        },
      });
    } catch (error) {
      console.error("Failed to update profile:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update profile. Please try again.",
        {
          duration: 5000,
          position: "top-center",
          style: {
            ...toastStyle,
            color: "#991B1B",
            background: "#FEE2E2",
            border: "1px solid #FCA5A5",
          },
          iconTheme: {
            primary: "#DC2626",
            secondary: "#FFFFFF",
          },
        }
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 shadow-lg">
        Loading Profile...
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSave}
      className="rounded-3xl bg-white p-8 shadow-lg"
    >
      <h2 className="mb-8 text-3xl font-bold text-[#1A5F7A]">
        Personal Information
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="font-semibold"
          >
            Full Name
          </label>

          <div className="relative mt-2">
            <FaUser className="absolute left-5 top-5 text-gray-400" />

            <input
              id="name"
              name="name"
              type="text"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
              className="
                w-full rounded-2xl border py-4 pl-14 pr-4
                outline-none transition
                focus:border-[#1A5F7A]
                focus:ring-2 focus:ring-[#1A5F7A]/20
              "
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="font-semibold"
          >
            Email
          </label>

          <div className="relative mt-2">
            <FaEnvelope className="absolute left-5 top-5 text-gray-400" />

            <input
              id="email"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="
                w-full rounded-2xl border py-4 pl-14 pr-4
                outline-none transition
                focus:border-[#1A5F7A]
                focus:ring-2 focus:ring-[#1A5F7A]/20
              "
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="font-semibold"
          >
            Phone
          </label>

          <div className="relative mt-2">
            <FaPhone className="absolute left-5 top-5 text-gray-400" />

            <input
              id="phone"
              name="phone"
              type="tel"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              autoComplete="tel"
              className="
                w-full rounded-2xl border py-4 pl-14 pr-4
                outline-none transition
                focus:border-[#1A5F7A]
                focus:ring-2 focus:ring-[#1A5F7A]/20
              "
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="font-semibold"
          >
            Location
          </label>

          <div className="relative mt-2">
            <FaMapMarkerAlt className="absolute left-5 top-5 text-gray-400" />

            <input
              id="location"
              name="location"
              type="text"
              value={profile.location}
              onChange={handleChange}
              placeholder="Enter your location"
              autoComplete="address-level2"
              className="
                w-full rounded-2xl border py-4 pl-14 pr-4
                outline-none transition
                focus:border-[#1A5F7A]
                focus:ring-2 focus:ring-[#1A5F7A]/20
              "
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="
            rounded-2xl bg-[#1A5F7A] px-8 py-4
            font-semibold text-white transition
            hover:bg-[#14495F]
            disabled:cursor-not-allowed disabled:opacity-50
          "
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}