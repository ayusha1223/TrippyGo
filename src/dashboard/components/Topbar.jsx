import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getProfile } from "../../services/userService";
import destinations from "../data/destination";

import {
  FaBell,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

const categories = [
  {
    value: "Mountain",
    translationKey: "topbar.categories.mountain",
  },
  {
    value: "Lakes",
    translationKey: "topbar.categories.lakes",
  },
  {
    value: "Culture",
    translationKey: "topbar.categories.culture",
  },
  {
    value: "Wildlife",
    translationKey: "topbar.categories.wildlife",
  },
  {
    value: "Adventure",
    translationKey: "topbar.categories.adventure",
  },
  {
    value: "Food",
    translationKey: "topbar.categories.food",
  },
];

export default function Topbar({ category, setCategory }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const user = await getProfile();
        setProfile(user);
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    }

    loadProfile();
  }, []);

  function handleSearch(event) {
    const value = event.target.value;
    setSearch(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const filteredDestinations = destinations.filter((destination) =>
      destination.name
        .toLowerCase()
        .includes(value.trim().toLowerCase())
    );

    setResults(filteredDestinations);
  }

  function handleCategoryChange(categoryValue) {
    if (setCategory) {
      setCategory(categoryValue);
    }
  }

  return (
    <header
      className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg
                 border-b border-gray-200"
    >
      <div className="px-10 py-6">
        {/* Top row */}
        <div className="flex items-center justify-between gap-6">
          {/* Search */}
          <div className="relative flex-1">
            <FaSearch
              className="absolute left-5 top-1/2 -translate-y-1/2
                         text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder={t("topbar.searchPlaceholder")}
              aria-label={t("topbar.searchLabel")}
              className="w-full rounded-xl bg-gray-100 py-4 pl-14 pr-5
                         outline-none focus:ring-2 focus:ring-[#1A5F7A]"
            />

            {/* Search results */}
            {search.trim() && (
              <div
                className="absolute left-0 right-0 mt-2 bg-white rounded-xl
                           shadow-xl border z-50 max-h-80 overflow-y-auto"
              >
                {results.length > 0 ? (
                  results.map((destination) => (
                    <button
                      type="button"
                      key={destination.id}
                      onClick={() => {
                        setSearch("");
                        setResults([]);
                        navigate(`/destinations/${destination.id}`);
                      }}
                      className="w-full flex items-center gap-4 p-4
                                 hover:bg-gray-100 text-left transition"
                    >
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-14 h-14 rounded-lg object-cover
                                   flex-shrink-0"
                      />

                      <div className="min-w-0">
                        <h3 className="font-semibold">
                          {destination.name}
                        </h3>

                        <p className="text-sm text-gray-500 truncate">
                          {destination.description}
                        </p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="p-5 text-center text-gray-500">
                    {t("topbar.noResults")}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Notification */}
          <button
            type="button"
            aria-label={t("topbar.notifications")}
            className="h-12 w-12 rounded-full bg-gray-100
                       hover:bg-[#1A5F7A] hover:text-white transition
                       flex items-center justify-center flex-shrink-0"
          >
            <FaBell />
          </button>

          {/* Profile */}
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="bg-white border border-gray-200 rounded-2xl
                       px-4 py-2 flex items-center gap-3 cursor-pointer
                       hover:shadow-lg hover:border-[#2563EB]
                       transition-all duration-300 text-left"
          >
            <img
              src={
                profile?.profileImage ||
                "https://i.pravatar.cc/150?img=12"
              }
              alt={t("topbar.profileImage")}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-[#1A5F7A]">
                {profile?.name || t("common.loading")}
              </h3>

              <p className="text-xs text-gray-500">
                {t("topbar.member")}
              </p>
            </div>

            <FaChevronDown className="text-gray-500" />
          </button>
        </div>

        {/* Categories */}
        <div className="mt-6 flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((item) => (
            <button
              type="button"
              key={item.value}
              onClick={() => handleCategoryChange(item.value)}
              className={`whitespace-nowrap rounded-full px-5 py-2
                          text-sm transition ${
                            category === item.value
                              ? "bg-[#1A5F7A] text-white shadow"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                          }`}
            >
              {t(item.translationKey)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}