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
    <aside className="fixed left-0 top-0 h-screen w-60 bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}

      <div className="h-20 border-b border-gray-200 flex items-center px-6">

        <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center flex-shrink-0 shadow-md">

          <span className="text-white text-2xl font-bold">
            T
          </span>

        </div>

        <div className="ml-3">

          <h1 className="text-3xl font-extrabold text-[#0F4C81] leading-none">
            TrippyGo
          </h1>

          <p className="text-xs text-gray-500 mt-1">
            Explore Nepal
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-5 py-6">

        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">
          Menu
        </p>

        <div className="space-y-2">

          {menu.map((item) => (

            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 font-medium transition-all duration-300

                ${
                  location.pathname === item.path
                    ? "bg-[#0F4C81] text-white shadow-lg"
                    : "text-gray-600 hover:bg-[#EFF6FF] hover:text-[#0F4C81]"
                }
              `}
            >

              <span className="text-lg">
                {item.icon}
              </span>

              <span>
                {item.title}
              </span>

            </Link>

          ))}

        </div>

        {/* AI Assistant */}

       <Link
    to="/ai-assistant"
    className="
        mt-8
        block
        rounded-2xl
        bg-gradient-to-r
        from-[#0F4C81]
        to-[#2563EB]
        p-4
        text-white
        shadow-lg
        hover:scale-[1.02]
        transition
    "
>

    <div className="flex items-center gap-3">

        <div
            className="
            w-12
            h-12
            rounded-full
            bg-white
            flex
            items-center
            justify-center
            text-[#2563EB]
            "
        >
            <FaRobot size={18} />
        </div>

        <div>

            <h3 className="font-semibold">
                AI Assistant
            </h3>

            <p className="text-sm text-white/80">
                Chat with TrippyGo AI
            </p>

        </div>

    </div>

</Link>

      </nav>

      {/* Bottom */}

      <div className="mt-auto border-t border-gray-200 p-5 space-y-2">

        <button className="w-full flex items-center gap-3 rounded-lg px-3 py-3 text-gray-600 hover:bg-gray-100 transition">

          <FaQuestionCircle />

          <span>Support</span>

        </button>

        <button className="w-full flex items-center gap-3 rounded-lg px-3 py-3 text-red-500 hover:bg-red-50 transition">

          <FaSignOutAlt />

          <span>Log Out</span>

        </button>

      </div>

    </aside>
  );
}