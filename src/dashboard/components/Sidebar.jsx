import {
  FaHome,
  FaMountain,
  FaHiking,
  FaRobot,
  FaHeart,
  FaBookmark,
  FaMapMarkedAlt,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    title: "Destinations",
    icon: <FaMountain />,
    path: "/destinations",
  },
  {
    title: "Adventures",
    icon: <FaHiking />,
    path: "/adventures",
  },
  {
    title: "Saved Places",
    icon: <FaBookmark />,
    path: "/saved",
  },
  {
    title: "Favorites",
    icon: <FaHeart />,
    path: "/favorites",
  },
  {
    title: "My Itineraries",
    icon: <FaMapMarkedAlt />,
    path: "/itinerary",
  },
  {
    title: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}

      <div className="h-24 flex items-center justify-center border-b">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-[#1A5F7A] text-white flex items-center justify-center text-2xl font-bold">
            T
          </div>

          <div>

            <h1 className="text-2xl font-bold text-[#1A5F7A]">
              TrippyGo
            </h1>

            <p className="text-xs text-gray-500">
              Explore Nepal
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-8">

        <p className="text-xs uppercase text-gray-400 font-semibold mb-5">
          Menu
        </p>

        <div className="space-y-2">

          {menu.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300

              ${
                location.pathname === item.path
                  ? "bg-[#1A5F7A] text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100"
              }
              `}
            >
              <span className="text-lg">{item.icon}</span>

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          ))}

        </div>

        {/* AI Button */}

        <div className="mt-10 rounded-2xl bg-[#1A5F7A] text-white p-5">

          <div className="flex items-center gap-3 mb-3">

            <div className="w-10 h-10 rounded-full bg-white text-[#1A5F7A] flex items-center justify-center">

              <FaRobot />

            </div>

            <h3 className="font-semibold">
              AI Planner
            </h3>

          </div>

          <p className="text-sm text-white/80 mb-4">
            Generate personalized trips using AI.
          </p>

          <button className="w-full bg-white text-[#1A5F7A] rounded-xl py-2 font-semibold hover:bg-gray-100 transition">
            Open Planner
          </button>

        </div>

      </nav>

      {/* Bottom */}

      <div className="border-t p-5 space-y-3">

        <button className="w-full flex items-center gap-3 text-gray-600 hover:text-[#1A5F7A]">

          <FaQuestionCircle />

          Support

        </button>

        <button className="w-full flex items-center gap-3 text-red-500 hover:text-red-700">

          <FaSignOutAlt />

          Log Out

        </button>

      </div>

    </aside>
  );
}