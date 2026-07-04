import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import ViewItineraryModal from "../components/ViewItineraryModal";
import {
  getItineraries,
  deleteItinerary,
} from "../services/adminService";
import { FaSearch, FaEye, FaTrash } from "react-icons/fa";

export default function AdminItineraries() {

  const [itineraries, setItineraries] = useState([]);
  const [search, setSearch] = useState("");
  const [viewingItinerary, setViewingItinerary] = useState(null);

  useEffect(() => {
    loadItineraries();
  }, []);

  async function loadItineraries() {

    try {

      const data = await getItineraries();

      setItineraries(data);

    } catch (error) {

      console.error(error);

    }

  }
  async function handleDelete(id) {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this itinerary?"
  );

  if (!confirmDelete) return;

  try {

    await deleteItinerary(id);

    setItineraries((prev) =>
      prev.filter((itinerary) => itinerary._id !== id)
    );

    alert("Itinerary deleted successfully.");

  } catch (error) {

    console.error(error);

    alert(error.message);

  }

}

  const filtered = itineraries.filter((itinerary) =>
    itinerary.title?.toLowerCase().includes(search.toLowerCase()) ||
    itinerary.user?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-gray-100 flex">

      <AdminSidebar />

      <div className="flex-1 ml-72 p-10">

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-[#0F4C81]">
            Itinerary Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all user itineraries.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="relative mb-8">

            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              placeholder="Search itinerary..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-xl py-3 pl-12 outline-none"
            />

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4">Title</th>
                  <th className="text-left py-4">User</th>
                  <th className="text-left py-4">Email</th>
                  <th className="text-left py-4">Created</th>
                  <th className="text-center py-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((itinerary) => (

                  <tr
                    key={itinerary._id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="py-4">
                      {itinerary.title}
                    </td>

                    <td>
                      {itinerary.user?.name}
                    </td>

                    <td>
                      {itinerary.user?.email}
                    </td>

                    <td>
                      {new Date(itinerary.createdAt).toLocaleDateString()}
                    </td>

                    <td className="py-4">

                      <div className="flex justify-center gap-3">

                        <button
  onClick={() => setViewingItinerary(itinerary._id)}
  className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 flex items-center justify-center"
>
  <FaEye />
</button>

                       <button
  onClick={() => handleDelete(itinerary._id)}
  className="w-10 h-10 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 flex items-center justify-center"
>
  <FaTrash />
</button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

                </div>

      </div>

      {viewingItinerary && (

        <ViewItineraryModal
          itineraryId={viewingItinerary}
          onClose={() => setViewingItinerary(null)}
        />

      )}

    </div>

  );

}