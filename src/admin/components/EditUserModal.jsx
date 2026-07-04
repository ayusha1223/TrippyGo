import { useEffect, useState } from "react";
import {
  getUser,
  updateUser,
} from "../services/adminService";

export default function EditUserModal({
  userId,
  onClose,
}) {

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "user",
  });

  useEffect(() => {

    async function loadUser() {

      try {

        const data = await getUser(userId);

        setUser({
          name: data.name,
          email: data.email,
          role: data.role,
        });

      } catch (error) {

        console.error(error);

        alert("Failed to load user.");

      }

    }

    if (userId) {
      loadUser();
    }

  }, [userId]);

  function handleChange(e) {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  }

 async function handleSave() {

  try {

    await updateUser(userId, user);

    alert("User updated successfully.");

    onClose();

  } catch (error) {

    console.error(error);

    alert(error.message);

  }

}

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl w-full max-w-2xl p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-[#0F4C81]">
            Edit User
          </h2>

          <button
            onClick={onClose}
            className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600"
          >
            Close
          </button>

        </div>

        {/* Form */}

        <div className="space-y-6">

          {/* Name */}

          <div>

            <label className="font-semibold">
              Name
            </label>

            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
            />

          </div>

          {/* Email */}

          <div>

            <label className="font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
            />

          </div>

          {/* Role */}

          <div>

            <label className="font-semibold">
              Role
            </label>

            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mt-2"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={onClose}
            className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="bg-[#0F4C81] text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>

  );

}