import { useEffect, useState } from "react";

import {
  FaBookmark,
  FaHeart,
  FaMapMarkedAlt,
  FaRobot,
} from "react-icons/fa";

import StatCard from "./StatCard";

import { getDashboardStats } from "../../services/dashboardService";

export default function StatsCards() {
  const [stats, setStats] = useState({
    savedPlaces: 0,
    favorites: 0,
    itineraries: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await getDashboardStats();

        setStats(data);

      } catch (err) {
        console.error(err);
      }
    }

    loadStats();
  }, []);

  const cards = [
    {
      title: "Saved Places",
      value: stats.savedPlaces,
      icon: <FaBookmark />,
      color: "bg-blue-100",
    },
    {
      title: "Favorites",
      value: stats.favorites,
      icon: <FaHeart />,
      color: "bg-red-100",
    },
    {
      title: "My Itineraries",
      value: stats.itineraries,
      icon: <FaMapMarkedAlt />,
      color: "bg-green-100",
    },
    {
      title: "AI Planner",
      value: "Beta",
      icon: <FaRobot />,
      color: "bg-purple-100",
    },
  ];

  return (
    <section>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >

        {cards.map((item) => (

          <StatCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            value={item.value}
            color={item.color}
          />

        ))}

      </div>

    </section>
  );
}