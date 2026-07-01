import { useEffect, useState } from "react";
import {
  FaBookmark,
  FaMapMarkerAlt,
  FaTrash,
} from "react-icons/fa";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DashboardFooter from "../../dashboard/components/DashboardFooter";

import {
  getSavedItems,
  deleteSavedItem,
} from "../../services/userService";

export default function Saved() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    try {
      const data = await getSavedItems();

      setItems(
        data.filter((item) => item.isSaved)
      );
    } catch (err) {
      console.error(err);
    }
  }
  async function handleDelete(id) {
  try {
    await deleteSavedItem(id);

    setItems((prev) =>
      prev.filter((item) => item._id !== id)
    );

  } catch (err) {
    console.error(err);
    alert("Failed to remove item.");
  }
}

  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex-1 ml-64">

        {/* Topbar */}

        <Topbar />

        <main className="px-10 py-8">

          {/* Header */}

          <div className="mb-10">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-[#1A5F7A] text-white flex items-center justify-center">

                <FaBookmark size={24} />

              </div>

              <div>

                <h1 className="text-4xl font-bold text-[#1A5F7A]">
                  Saved Places
                </h1>

                <p className="text-gray-500 mt-2">
                  All your saved destinations, adventures,
                  places, hotels and more.
                </p>

              </div>

            </div>

          </div>

          {/* Empty */}

          {items.length === 0 && (

            <div className="bg-white rounded-3xl shadow-md p-20 text-center">

              <FaBookmark
                size={50}
                className="mx-auto text-gray-300"
              />

              <h2 className="text-2xl font-bold mt-6">
                Nothing Saved Yet
              </h2>

              <p className="text-gray-500 mt-3">
                Save destinations, adventures and places
                to access them later.
              </p>

            </div>

          )}

          {/* Cards */}

          {items.length > 0 && (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {items.map((item) => (

                <div
                  key={item._id}
                  className="
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-md
                    hover:shadow-xl
                    transition
                  "
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-6">

                    <div className="flex justify-between items-center">

                      <h2 className="text-2xl font-bold">
                        {item.title}
                      </h2>

                      <span className="capitalize bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">

                        {item.type}

                      </span>

                    </div>

                    <div className="flex items-center gap-2 mt-5 text-gray-500">

                      <FaMapMarkerAlt />

                      <span>
                        Saved in TrippyGo
                      </span>

                    </div>

                   <button
  onClick={() => handleDelete(item._id)}
  className="
    mt-6
    w-full
    bg-red-50
    text-red-600
    py-3
    rounded-xl
    flex
    justify-center
    items-center
    gap-2
    hover:bg-red-100
    transition
  "
>

                      <FaTrash />

                      Remove

                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </main>

        <DashboardFooter />

      </div>

    </div>
  );
}