import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getProfile } from "../../services/userService";
import destinations from "../data/destination";

import {
  FaBell,
  FaSearch,
  FaChevronDown,
  FaUser,
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
  // {
  //   value: "Food",
  //   translationKey: "topbar.categories.food",
  // },
];

export default function Topbar({ category = "", setCategory }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    let componentMounted = true;

    async function loadProfile() {
      try {
        const user = await getProfile();

        if (componentMounted) {
          setProfile(user);
        }
      } catch (error) {
        console.error("Failed to load profile:", error);
      } finally {
        if (componentMounted) {
          setProfileLoading(false);
        }
      }
    }

    loadProfile();

    return () => {
      componentMounted = false;
    };
  }, []);

  function handleSearch(event) {
    const value = event.target.value;
    const searchValue = value.trim().toLowerCase();

    setSearch(value);

    if (!searchValue) {
      setResults([]);
      return;
    }

    const filteredDestinations = destinations.filter((destination) =>
      destination.name
        ?.toLowerCase()
        .includes(searchValue)
    );

    setResults(filteredDestinations);
  }

  function handleDestinationClick(destinationId) {
    setSearch("");
    setResults([]);
    navigate(`/destinations/${destinationId}`);
  }

  function handleCategoryChange(categoryValue) {
    if (!setCategory) return;

    // Clicking the active category again clears the filter
    // and displays every destination.
    setCategory((currentCategory) =>
      currentCategory === categoryValue
        ? ""
        : categoryValue
    );
  }

  return (
    <header
      className="
        sticky top-0 z-20 border-b border-gray-200
        bg-white/80 backdrop-blur-lg
      "
    >
      <div className="px-4 py-6 md:px-10">
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 md:gap-6">
          {/* Search */}
          <div className="relative flex-1">
            <FaSearch
              className="
                absolute left-5 top-1/2
                -translate-y-1/2 text-gray-400
              "
            />

            <input
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder={t("topbar.searchPlaceholder")}
              aria-label={t("topbar.searchLabel")}
              autoComplete="off"
              className="
                w-full rounded-xl bg-gray-100
                py-4 pl-14 pr-5 outline-none
                transition focus:ring-2
                focus:ring-[#1A5F7A]
              "
            />

            {/* Search results */}
            {search.trim() && (
              <div
                className="
                  absolute left-0 right-0 z-50 mt-2
                  max-h-80 overflow-y-auto rounded-xl
                  border bg-white shadow-xl
                "
              >
                {results.length > 0 ? (
                  results.map((destination) => (
                    <button
                      type="button"
                      key={destination.id}
                      onClick={() =>
                        handleDestinationClick(destination.id)
                      }
                      className="
                        flex w-full items-center gap-4
                        p-4 text-left transition
                        hover:bg-gray-100
                      "
                    >
                      {destination.image ? (
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="
                            h-14 w-14 flex-shrink-0
                            rounded-lg object-cover
                          "
                        />
                      ) : (
                        <div
                          className="
                            flex h-14 w-14 flex-shrink-0
                            items-center justify-center
                            rounded-lg bg-gray-100
                          "
                        >
                          <FaSearch className="text-gray-400" />
                        </div>
                      )}

                      <div className="min-w-0">
                        <h3 className="font-semibold">
                          {destination.name}
                        </h3>

                        <p className="truncate text-sm text-gray-500">
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
            className="
              flex h-12 w-12 flex-shrink-0
              items-center justify-center rounded-full
              bg-gray-100 transition
              hover:bg-[#1A5F7A] hover:text-white
            "
          >
            <FaBell />
          </button>

          {/* Profile */}
          <button
            type="button"
            onClick={() => navigate("/profile")}
            aria-label="Open profile"
            className="
              flex cursor-pointer items-center gap-3
              rounded-2xl border border-gray-200
              bg-white px-4 py-2 text-left
              transition-all duration-300
              hover:border-[#2563EB] hover:shadow-lg
            "
          >
            {profile?.profileImage ? (
              <img
                src={profile.profileImage}
                alt={t("topbar.profileImage")}
                className="
                  h-12 w-12 flex-shrink-0
                  rounded-full object-cover
                "
              />
            ) : (
              <div
                className="
                  flex h-12 w-12 flex-shrink-0
                  items-center justify-center
                  rounded-full bg-gray-100
                "
                aria-label={t("topbar.profileImage")}
              >
                <FaUser className="text-xl text-gray-400" />
              </div>
            )}

            <div className="hidden min-w-0 sm:block">
              <h3
                className="
                  max-w-36 truncate font-semibold
                  text-[#1A5F7A]
                "
              >
                {profileLoading
                  ? t("common.loading")
                  : profile?.name || "User"}
              </h3>

              <p className="text-xs text-gray-500">
                {t("topbar.member")}
              </p>
            </div>

            <FaChevronDown
              className="
                hidden flex-shrink-0 text-gray-500
                sm:block
              "
            />
          </button>
        </div>

        {/* Categories */}
        <div
          className="
            scrollbar-hide mt-6 flex gap-3
            overflow-x-auto
          "
        >
          {categories.map((item) => {
            const isSelected = category === item.value;

            return (
              <button
                type="button"
                key={item.value}
                onClick={() =>
                  handleCategoryChange(item.value)
                }
                className={`
                  whitespace-nowrap rounded-full
                  px-5 py-2 text-sm transition
                  ${
                    isSelected
                      ? "bg-[#1A5F7A] text-white shadow"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                {t(item.translationKey)}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}