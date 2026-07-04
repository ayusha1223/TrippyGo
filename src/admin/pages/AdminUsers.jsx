import { useEffect, useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import { getUsers } from "../services/adminService";

import {
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

export default function AdminUsers() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {

    try {

      const data = await getUsers();

      setUsers(data);

    } catch (error) {

      console.error(error);

    }

  }

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-gray-100 flex">

      <AdminSidebar />

      <div className="flex-1 ml-72 p-10">

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-[#0F4C81]">
            Users Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all registered users.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="relative mb-8">

            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-xl py-3 pl-12 outline-none"
            />

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4">Profile</th>
                  <th className="text-left py-4">Name</th>
                  <th className="text-left py-4">Email</th>
                  <th className="text-left py-4">Role</th>
                  <th className="text-left py-4">Saved</th>
                  <th className="text-left py-4">Favorites</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((user) => (

                  <tr
                    key={user._id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="py-4">

                      {user.profileImage ? (

                        <img
                          src={user.profileImage}
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />

                      ) : (

                        <FaUserCircle
                          className="text-gray-400"
                          size={42}
                        />

                      )}

                    </td>

                    <td>{user.name}</td>

                    <td>{user.email}</td>

                    <td>

                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">

                        {user.role}

                      </span>

                    </td>

                    <td>

                      {user.savedDestinations?.length || 0}

                    </td>

                    <td>

                      {user.favoriteDestinations?.length || 0}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

}