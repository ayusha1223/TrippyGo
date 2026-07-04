import { useEffect, useRef, useState } from "react";
import {
  createDestination,
  getDestination,
} from "../services/adminService";

export default function DestinationForm({
  destinationId,
  onClose,
}) {

const [formData, setFormData] = useState({
  name: "",
  slug: "",
  province: "",
  district: "",
  location: "",
  rating: "",
  budget: "",
  duration: "",
  bestTime: "",
  description: "",
  heroImage: "",
});
  const [previewImage, setPreviewImage] = useState("");

const fileInputRef = useRef(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSave() {

  try {

    await createDestination({
      name: formData.name,
      slug: formData.slug,
      province: formData.province,
      district: formData.district,
      rating: Number(formData.rating),
      budget: formData.budget,
      duration: formData.duration,
      bestTime: formData.bestTime,
      description: formData.description,

      // Temporary until Cloudinary is connected
      heroImage: previewImage,
    });

    alert("Destination created successfully!");

  } catch (error) {

    console.error(error);

    alert("Failed to create destination.");

  }

}
  function handleHeroImage(e) {

  const file = e.target.files[0];

  if (!file) return;

  setFormData({
    ...formData,
    heroImage: file,
  });

  setPreviewImage(URL.createObjectURL(file));

}
useEffect(() => {

  if (!destinationId) return;

  async function loadDestination() {

    try {

      const destination =
        await getDestination(destinationId);

      setFormData({
        name: destination.name || "",
        slug: destination.slug || "",
        province: destination.province || "",
        district: destination.district || "",
        location: destination.location || "",
        rating: destination.rating || "",
        budget: destination.budget || "",
        duration: destination.duration || "",
        bestTime: destination.bestTime || "",
        description: destination.description || "",
        heroImage: destination.heroImage || "",
      });

      setPreviewImage(destination.heroImage);

    } catch (error) {

      console.error(error);

      alert("Failed to load destination.");

    }

  }

  loadDestination();

}, [destinationId]);

  return (

    <div className="space-y-8">

      {/* Basic Information */}

      <div className="bg-white rounded-3xl shadow-md p-8">

        <h2 className="text-2xl font-bold text-[#0F4C81] mb-8">
          Basic Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="font-semibold">
              Destination Name
            </label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
              placeholder="Pokhara"
            />

          </div>

          <div>

            <label className="font-semibold">
              Slug
            </label>

            <input
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
              placeholder="pokhara"
            />

          </div>

          <div>

            <label className="font-semibold">
              Province
            </label>

            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
            >

              <option value="">
                Select Province
              </option>

              <option>Koshi</option>
              <option>Madhesh</option>
              <option>Bagmati</option>
              <option>Gandaki</option>
              <option>Lumbini</option>
              <option>Karnali</option>
              <option>Sudurpashchim</option>

            </select>

          </div>

          <div>

            <label className="font-semibold">
              District
            </label>

            <input
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
            />

          </div>

          <div>

            <label className="font-semibold">
              Location
            </label>

            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
            />

          </div>

          <div>

            <label className="font-semibold">
              Rating
            </label>

            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
            />

          </div>

          <div>

            <label className="font-semibold">
              Budget
            </label>

            <input
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
              placeholder="$300"
            />

          </div>

          <div>

            <label className="font-semibold">
              Duration
            </label>

            <input
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
              placeholder="5 Days"
            />

          </div>

          <div className="md:col-span-2">

            <label className="font-semibold">
              Best Time to Visit
            </label>

            <input
              name="bestTime"
              value={formData.bestTime}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
              placeholder="September - November"
            />

          </div>

        </div>

           </div>

      {/* Hero Image */}

      <div className="bg-white rounded-3xl shadow-md p-8">

        <h2 className="text-2xl font-bold text-[#0F4C81] mb-8">
          Hero Image
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Preview */}

          <div
            className="
              h-72
              rounded-2xl
              border-2
              border-dashed
              border-gray-300
              overflow-hidden
              bg-gray-100
            "
          >

            {previewImage ? (

  <img
    src={previewImage}
    alt="Preview"
    className="w-full h-full object-cover"
  />

) : (

  <div className="flex flex-col justify-center items-center h-full">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20 text-gray-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 16l4-4 4 4 8-8"
      />
    </svg>

    <p className="mt-4 text-lg font-semibold text-gray-500">
      Upload Hero Image
    </p>

    <p className="text-gray-400 text-sm">
      JPG • PNG • WEBP
    </p>

  </div>

)}


          </div>

          {/* Upload */}

          <div className="flex flex-col justify-center">

            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="
                bg-[#0F4C81]
                text-white
                px-6
                py-4
                rounded-xl
                hover:bg-blue-700
              "
            >
              Choose Image
            </button>
            {formData.heroImage && (

  <div className="mt-6">

    <p className="font-semibold">

      Selected File

    </p>

    <p className="text-gray-500">

      {formData.heroImage.name}

    </p>

  </div>

)}

            <input
              ref={fileInputRef}
              type="file"
              hidden
              accept="image/*"
              onChange={handleHeroImage}
            />

            <p className="text-gray-500 mt-5">
              Recommended image size:
              <br />
              1600 × 900 pixels
            </p>

          </div>

        </div>

      </div>
      {/* Description */}

<div className="bg-white rounded-3xl shadow-md p-8">

  <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
    Description
  </h2>

  <textarea
    name="description"
    value={formData.description}
    onChange={handleChange}
    rows={8}
    placeholder="Write a detailed description about this destination..."
    className="
      w-full
      border
      rounded-xl
      p-5
      resize-none
      focus:outline-none
      focus:ring-2
      focus:ring-[#0F4C81]
    "
  />

</div>
               {/* Action Buttons */}

<div className="bg-white rounded-3xl shadow-md p-8">

  <div className="flex justify-end gap-5">

    <button
      type="button"
      className="
        px-8
        py-4
        rounded-xl
        border
        border-gray-300
        hover:bg-gray-100
      "
    >
      Cancel
    </button>

   <button
  type="button"
  onClick={handleSave}
  className="
    bg-[#0F4C81]
    text-white
    px-8
    py-4
    rounded-xl
    hover:bg-blue-700
  "
>
  Save Destination
</button>

  </div>

</div>
      

    </div>

  );

}

