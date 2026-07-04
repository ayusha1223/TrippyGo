import { useEffect, useState } from "react";

import {
  FaUsers,
  FaMapMarkedAlt,
  FaRoute,
  FaHeart,
} from "react-icons/fa";

import { getDashboardStats } from "../services/adminService";

export default function AdminStats() {

  const [stats, setStats] = useState(null);

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {

    try {

      const data = await getDashboardStats();

      setStats(data);

    } catch (error) {

      console.error(error);

    }

  }

  if (!stats) {

    return (
      <div className="text-center py-20">
        Loading Dashboard...
      </div>
    );

  }

  const cards = [
    {
      title: "Users",
      value: stats.users,
      color: "bg-blue-500",
      icon: <FaUsers size={26} />,
    },
    {
      title: "Destinations",
      value: stats.destinations,
      color: "bg-green-500",
      icon: <FaMapMarkedAlt size={26} />,
    },
    {
      title: "Itineraries",
      value: stats.itineraries,
      color: "bg-orange-500",
      icon: <FaRoute size={26} />,
    },
    {
      title: "Favorites",
      value: stats.favorites,
      color: "bg-red-500",
      icon: <FaHeart size={26} />,
    },
  ];

  return (

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-3xl shadow-lg p-7"
        >

          <div className="flex justify-between">

            <div>

              <p className="text-gray-500">

                {card.title}

              </p>

              <h2 className="text-4xl font-bold mt-3">

                {card.value}

              </h2>

            </div>

            <div
              className={`${card.color} w-16 h-16 rounded-2xl text-white flex items-center justify-center`}
            >
              {card.icon}
            </div>

          </div>

        </div>

      ))}

    </div>

  );

}