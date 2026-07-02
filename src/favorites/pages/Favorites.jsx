import { useEffect, useState } from "react";
import {
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import DashboardFooter from "../../dashboard/components/DashboardFooter";

import { getSavedItems } from "../../services/userService";

export default function Favorites() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    try {
      const data = await getSavedItems();

      setItems(
        data.filter((item) => item.isFavorite)
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-[#FCF9F8] flex">

      <Sidebar />

      <div className="flex-1 ml-64">

        <Topbar />

        <main className="px-10 py-8">

          <div className="mb-10">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center">

                <FaHeart size={24} />

              </div>

              <div>

                <h1 className="text-4xl font-bold text-[#1A5F7A]">
                  Favorites
                </h1>

                <p className="text-gray-500 mt-2">
                  All your favorite destinations and experiences.
                </p>

              </div>

            </div>

          </div>

          {items.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-md p-20 text-center">

              <FaHeart
                size={50}
                className="mx-auto text-gray-300"
              />

              <h2 className="text-2xl font-bold mt-6">
                No Favorites Yet
              </h2>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {items.map((item) => (

                <div
                  key={item._id}
                  className="bg-white rounded-3xl overflow-hidden shadow-md"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-6">

                    <div className="flex justify-between">

                      <h2 className="text-2xl font-bold">
                        {item.title}
                      </h2>

                      <span className="capitalize bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {item.type}
                      </span>

                    </div>

                    <div className="flex items-center gap-2 mt-5 text-gray-500">

                      <FaMapMarkerAlt />

                      Favorite

                    </div>

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