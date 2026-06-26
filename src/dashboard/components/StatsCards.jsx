import {
  FaBookmark,
  FaHeart,
  FaMapMarkedAlt,
  FaRobot,
} from "react-icons/fa";

import StatCard from "./StatCard";

export default function StatsCards() {
  const stats = [
    {
      title: "Saved Places",
      value: 12,
      icon: <FaBookmark />,
      color: "bg-blue-100",
    },
    {
      title: "Favorites",
      value: 24,
      icon: <FaHeart />,
      color: "bg-red-100",
    },
    {
      title: "My Itineraries",
      value: 5,
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
        {stats.map((item) => (
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