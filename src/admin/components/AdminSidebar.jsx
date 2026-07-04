import { Link } from "react-router-dom";
import {
  FaChartPie,
  FaMapMarkedAlt,
  FaUsers,
  FaRoute,
  FaRobot,
  FaCog,
} from "react-icons/fa";

const menu = [
  {
    title: "Dashboard",
    icon: <FaChartPie />,
    path: "/admin",
  },
  {
    title: "Destinations",
    icon: <FaMapMarkedAlt />,
    path: "/admin/destinations",
  },
  {
    title: "Users",
    icon: <FaUsers />,
    path: "/admin/users",
  },
  {
    title: "Itineraries",
    icon: <FaRoute />,
    path: "/admin/itineraries",
  },
  {
    title: "AI",
    icon: <FaRobot />,
    path: "/admin/ai",
  },
  {
    title: "Settings",
    icon: <FaCog />,
    path: "/admin/settings",
  },
];

export default function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-[#0F4C81] text-white">

      <div className="p-8 border-b border-white/20">

        <h1 className="text-3xl font-bold">
          TrippyGo
        </h1>

        <p className="text-sm opacity-70">
          Admin Panel
        </p>

      </div>

      <nav className="mt-8 px-5">

        {menu.map((item) => (

          <Link
            key={item.title}
            to={item.path}
            className="
              flex
              items-center
              gap-4
              p-4
              rounded-xl
              hover:bg-white/10
              mb-2
            "
          >
            {item.icon}

            <span>{item.title}</span>

          </Link>

        ))}

      </nav>

    </aside>
  );
}