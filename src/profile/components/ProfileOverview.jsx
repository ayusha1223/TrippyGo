import { useEffect, useRef, useState } from "react";
import {
  FaCamera,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

import {
  getProfile,
  uploadProfileImage,
} from "../../services/userService";

import { getItineraries } from "../../itinerary/services/itineraryService";

export default function ProfileOverview() {
  const [profile, setProfile] = useState(null);
  const [itineraryCount, setItineraryCount] = useState(0);
  const [previewImage, setPreviewImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef(null);

  async function handleImageSelect(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    // Only allow image files
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      event.target.value = "";
      return;
    }

    // Limit file size to 5 MB
    if (file.size > 5 * 1024 * 1024) {
      alert("The image must be smaller than 5 MB.");
      event.target.value = "";
      return;
    }

    const temporaryPreview = URL.createObjectURL(file);

    setPreviewImage(temporaryPreview);
    setUploading(true);

    try {
      const result = await uploadProfileImage(file);

      setProfile((previousProfile) => ({
        ...previousProfile,
        profileImage: result.profileImage,
      }));

      setPreviewImage("");
      URL.revokeObjectURL(temporaryPreview);

      alert("Profile image updated successfully.");
    } catch (error) {
      console.error("Profile image upload failed:", error);

      setPreviewImage("");
      URL.revokeObjectURL(temporaryPreview);

      alert("Failed to upload profile image.");
    } finally {
      setUploading(false);

      // Allows the same image to be selected again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }

  useEffect(() => {
    async function loadProfile() {
      try {
        const [user, itineraries] = await Promise.all([
          getProfile(),
          getItineraries(),
        ]);

        setProfile(user);
        setItineraryCount(
          Array.isArray(itineraries) ? itineraries.length : 0
        );
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    }

    loadProfile();
  }, []);

  if (!profile) {
    return (
      <div className="rounded-3xl bg-white p-10 shadow-lg">
        Loading Profile...
      </div>
    );
  }

  const displayedImage = previewImage || profile.profileImage;

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        {/* Profile picture */}
        <div className="relative">
          {displayedImage ? (
            <img
              src={displayedImage}
              alt={`${profile.name || "User"} profile`}
              className="h-44 w-44 rounded-full border-4 border-[#2563EB] object-cover"
            />
          ) : (
            <div className="flex h-44 w-44 items-center justify-center rounded-full border-4 border-[#2563EB] bg-gray-100">
              <FaUser className="text-7xl text-gray-400" />
            </div>
          )}

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            aria-label="Upload profile image"
            className="
              absolute bottom-2 right-2 flex h-12 w-12
              items-center justify-center rounded-full
              bg-[#2563EB] text-white shadow-lg
              transition hover:scale-105
              disabled:cursor-not-allowed disabled:opacity-60
            "
          >
            <FaCamera />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            disabled={uploading}
            onChange={handleImageSelect}
          />
        </div>

        {/* User information */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold text-[#1A5F7A]">
              {profile.name || "User"}
            </h2>

            <FaCheckCircle className="text-2xl text-green-500" />
          </div>

          <p className="mt-2 text-gray-500">
            Explorer Member
          </p>

          <div className="mt-4 flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt />

            <span>
              {profile.location || "Location not set"}
            </span>
          </div>

          <div className="mt-8 flex gap-10">
            <div>
              <h3 className="text-3xl font-bold text-[#1A5F7A]">
                {profile.savedDestinations?.length || 0}
              </h3>

              <p className="text-gray-500">
                Saved Places
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#1A5F7A]">
                {profile.favoriteDestinations?.length || 0}
              </h3>

              <p className="text-gray-500">
                Favorites
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#1A5F7A]">
                {itineraryCount}
              </h3>

              <p className="text-gray-500">
                Itineraries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}