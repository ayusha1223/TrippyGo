import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaChartPie,
  FaMapMarkedAlt,
  FaUsers,
  FaRoute,
  FaRobot,
  FaCog,
  FaSignOutAlt,
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
    title: "AI Assistant",
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
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();

    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-[#0F4C81] text-white flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="p-8 border-b border-white/20">
        <h1 className="text-4xl font-extrabold">TrippyGo</h1>

        <p className="text-sm text-white/70 mt-1">
          Admin Dashboard
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-5 py-6 overflow-y-auto">
        {menu.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className={`flex items-center gap-4 px-4 py-4 rounded-xl mb-2 transition-all duration-300 ${
              location.pathname === item.path
                ? "bg-white text-[#0F4C81] font-semibold shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            <span className="text-lg">{item.icon}</span>

            <span>{item.title}</span>
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="border-t border-white/20 p-5">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-red-200 hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          <FaSignOutAlt className="text-lg" />

          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}