import { useEffect, useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

import { getDestinations } from "../../services/destinationService";

export default function DestinationTable() {

  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDestinations();
  }, []);

  async function loadDestinations() {

    try {

      const data = await getDestinations();

      setDestinations(data);

    } catch (error) {

      console.error(error);

    }

  }

  const filtered = destinations.filter((destination) =>
    destination.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-bold">

          All Destinations

        </h2>

        <div className="relative w-80">

          <FaSearch
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            placeholder="Search destination..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              border
              rounded-xl
              pl-12
              py-3
              outline-none
            "
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-4">
                Image
              </th>

              <th className="text-left">
                Name
              </th>

              <th className="text-left">
                Province
              </th>

              <th className="text-left">
                Rating
              </th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((destination) => (

              <tr
                key={destination._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4">

                  <img
                    src={destination.heroImage}
                    alt={destination.name}
                    className="w-20 h-16 rounded-lg object-cover"
                  />

                </td>

                <td>

                  {destination.name}

                </td>

                <td>

                  {destination.province}

                </td>

                <td>

                  ⭐ {destination.rating}

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button
                      className="
                        w-10
                        h-10
                        rounded-lg
                        bg-yellow-100
                        text-yellow-700
                      "
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="
                        w-10
                        h-10
                        rounded-lg
                        bg-red-100
                        text-red-600
                      "
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

  );

}