import { useState } from "react";
import { createUser } from "../services/adminService";

export default function AddUserModal({ onClose, onCreated }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleCreate() {
    try {
      await createUser(formData);

      alert("User created successfully.");

      onCreated();

      onClose();

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl w-full max-w-xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-[#0F4C81]">
            Add User
          </h2>

          <button
            onClick={onClose}
            className="bg-red-500 text-white px-5 py-2 rounded-xl"
          >
            Close
          </button>

        </div>

        <div className="space-y-5">

          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="border px-6 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="bg-[#0F4C81] text-white px-6 py-3 rounded-xl"
          >
            Create User
          </button>

        </div>

      </div>

    </div>
  );
}