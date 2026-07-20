import { useEffect, useState } from "react";

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
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const menu = [
  {
    translationKey: "sidebar.dashboard",
    icon: FaHome,
    path: "/dashboard",
  },
  {
    translationKey: "sidebar.destinations",
    icon: FaMountain,
    path: "/destinations",
  },
  {
    translationKey: "sidebar.explorer",
    icon: FaHiking,
    path: "/explorer",
  },
  {
    translationKey: "sidebar.savedPlaces",
    icon: FaBookmark,
    path: "/saved",
  },
  {
    translationKey: "sidebar.favorites",
    icon: FaHeart,
    path: "/favorites",
  },
  {
    translationKey: "sidebar.itineraries",
    icon: FaMapMarkedAlt,
    path: "/itinerary",
  },
  {
    translationKey: "sidebar.settings",
    icon: FaCog,
    path: "/settings",
  },
];

export default function Sidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [supportOpen, setSupportOpen] = useState(false);

  function openSupport() {
    setSupportOpen(true);
  }

  function closeSupport() {
    setSupportOpen(false);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();

    navigate("/login");
  }

  // Close the support card with Escape
  useEffect(() => {
    if (!supportOpen) return;

    function handleEscape(event) {
      if (event.key === "Escape") {
        closeSupport();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [supportOpen]);

  return (
    <>
      <aside
        className="fixed left-0 top-0 z-30 h-screen w-60 bg-white
                   border-r border-gray-200 flex flex-col"
      >
        {/* Logo */}
        <div className="h-20 border-b border-gray-200 flex items-center px-6">
          <div
            className="w-12 h-12 rounded-xl bg-[#2563EB] flex
                       items-center justify-center flex-shrink-0 shadow-md"
          >
            <span className="text-white text-2xl font-bold">
              T
            </span>
          </div>

          <div className="ml-3">
            <h1
              className="text-3xl font-extrabold text-[#0F4C81]
                         leading-none"
            >
              TrippyGo
            </h1>

            <p className="text-xs text-gray-500 mt-1">
              {t("sidebar.tagline")}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <p
            className="text-xs uppercase tracking-widest text-gray-400
                       mb-4 font-semibold"
          >
            {t("sidebar.menu")}
          </p>

          <div className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-4 rounded-xl
                              px-4 py-3 font-medium transition-all
                              duration-300 ${
                                isActive
                                  ? "bg-[#0F4C81] text-white shadow-lg"
                                  : "text-gray-600 hover:bg-[#EFF6FF] hover:text-[#0F4C81]"
                              }`}
                >
                  <Icon className="text-lg flex-shrink-0" />

                  <span>{t(item.translationKey)}</span>
                </Link>
              );
            })}
          </div>

          {/* AI Assistant */}
          <Link
            to="/ai-assistant"
            className="mt-8 block rounded-2xl bg-gradient-to-r
                       from-[#0F4C81] to-[#2563EB] p-4 text-white
                       shadow-lg hover:scale-[1.02] transition"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full bg-white flex
                           items-center justify-center text-[#2563EB]
                           flex-shrink-0"
              >
                <FaRobot size={18} />
              </div>

              <div>
                <h3 className="font-semibold">
                  {t("sidebar.aiAssistant")}
                </h3>

                <p className="text-sm text-white/80">
                  {t("sidebar.aiDescription")}
                </p>
              </div>
            </div>
          </Link>
        </nav>

        {/* Bottom actions */}
        <div className="mt-auto border-t border-gray-200 p-5 space-y-2">
          <button
            type="button"
            onClick={openSupport}
            className="w-full flex items-center gap-3 rounded-lg
                       px-3 py-3 text-gray-600 hover:bg-gray-100
                       transition"
          >
            <FaQuestionCircle />

            <span>{t("sidebar.support")}</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 rounded-lg
                       px-3 py-3 text-red-500 hover:bg-red-50
                       transition"
          >
            <FaSignOutAlt />

            <span>{t("sidebar.logout")}</span>
          </button>
        </div>
      </aside>

      {/* Support popup */}
      {supportOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="support-modal-title"
          onClick={closeSupport}
          className="fixed inset-0 z-[100] bg-black/60
                     backdrop-blur-sm flex items-center
                     justify-center p-4"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl
                       w-full max-w-xl max-h-[90vh] overflow-y-auto p-8"
          >
            {/* Close icon */}
            <button
              type="button"
              onClick={closeSupport}
              aria-label={t("supportModal.close")}
              className="absolute top-4 right-4 w-10 h-10
                         rounded-full text-3xl text-gray-500
                         hover:text-white hover:bg-red-500 transition
                         flex items-center justify-center"
            >
              ×
            </button>

            {/* Modal heading */}
            <div className="flex items-center gap-4 mb-7 pr-10">
              <div
                className="w-14 h-14 rounded-2xl bg-blue-100
                           text-[#1A5F7A] flex items-center
                           justify-center flex-shrink-0"
              >
                <FaQuestionCircle size={25} />
              </div>

              <div>
                <h2
                  id="support-modal-title"
                  className="text-3xl font-bold text-[#1A5F7A]"
                >
                  {t("Support")}
                </h2>

                <p className="text-gray-500 mt-1">
                  {t("")}
                </p>
              </div>
            </div>

            {/* Support message */}
            <p className="text-gray-600 leading-7 mb-6">
              {t("")}
            </p>

            {/* Contact information */}
            <div className="space-y-4">
              {/* Email */}
              <div
                className="flex items-center gap-4 bg-gray-50
                           border border-gray-100 rounded-2xl p-4"
              >
                <div
                  className="w-11 h-11 rounded-xl bg-blue-100
                             text-[#1A5F7A] flex items-center
                             justify-center flex-shrink-0"
                >
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1A5F7A]">
                    {t("supportModal.emailTitle")}
                  </h3>

                  <a
                    href="mailto:support@trippygo.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@trippygo.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-center gap-4 bg-gray-50
                           border border-gray-100 rounded-2xl p-4"
              >
                <div
                  className="w-11 h-11 rounded-xl bg-green-100
                             text-green-700 flex items-center
                             justify-center flex-shrink-0"
                >
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1A5F7A]">
                    {t("supportModal.phoneTitle")}
                  </h3>

                  <a
                    href="tel:+9779800000000"
                    className="text-blue-600 hover:underline"
                  >
                    +977 9800000000
                  </a>
                </div>
              </div>

              {/* Opening hours */}
              <div
                className="flex items-center gap-4 bg-gray-50
                           border border-gray-100 rounded-2xl p-4"
              >
                <div
                  className="w-11 h-11 rounded-xl bg-yellow-100
                             text-yellow-700 flex items-center
                             justify-center flex-shrink-0"
                >
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1A5F7A]">
                    {t("supportModal.hoursTitle")}
                  </h3>

                  <p className="text-gray-600">
                    {t("supportModal.hours")}
                  </p>
                </div>
              </div>
            </div>

            {/* Security information */}
            <div
              className="mt-6 rounded-xl border border-amber-200
                         bg-amber-50 p-4 text-sm text-amber-900
                         leading-6"
            >
              {t("supportModal.securityMessage")}
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={closeSupport}
              className="mt-7 w-full bg-[#1A5F7A] text-white
                         font-semibold py-3 rounded-xl
                         hover:bg-[#134b61] transition"
            >
              {t("common.close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}