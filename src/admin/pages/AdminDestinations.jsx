import { useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import DestinationTable from "../components/DestinationTable";
import AddDestinationModal from "../components/AddDestinationModal";

import { FaPlus } from "react-icons/fa";

export default function AdminDestinations() {

  const [showAddModal, setShowAddModal] =
    useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}

      <AdminSidebar />

      {/* Main */}

      <div className="flex-1 ml-72 p-10">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-[#0F4C81]">

              Destination Management

            </h1>

            <p className="text-gray-500 mt-2">

              Manage all tourist destinations.

            </p>

          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="
              bg-[#0F4C81]
              text-white
              px-6
              py-4
              rounded-xl
              flex
              items-center
              gap-3
              hover:bg-blue-700
            "
          >
            <FaPlus />

            Add Destination

          </button>

        </div>

        <div className="mt-10">

          <DestinationTable />

        </div>

      </div>

      {showAddModal && (

        <AddDestinationModal
          onClose={() => setShowAddModal(false)}
        />

      )}

    </div>
  );
}