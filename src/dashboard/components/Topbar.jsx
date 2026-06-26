import { useState } from "react";
import {
  FaBell,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

const categories = [
  "Mountain",
  "Lakes",
  "Culture",
  "Wildlife",
  "Adventure",
  "Food",
];

export default function Topbar() {
  const [selected, setSelected] = useState("Mountain");

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-gray-200">

      <div className="px-10 py-6">

        {/* Top Row */}

        <div className="flex items-center justify-between gap-6">

          {/* Search */}

          <div className="relative flex-1">

            <FaSearch
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search destinations..."
              className="
              w-full
              rounded-xl
              bg-gray-100
              py-4
              pl-14
              pr-5
              outline-none
              focus:ring-2
              focus:ring-[#1A5F7A]
              "
            />

          </div>

          {/* Notification */}

          <button
            className="
            h-12
            w-12
            rounded-full
            bg-gray-100
            hover:bg-[#1A5F7A]
            hover:text-white
            transition
            flex
            items-center
            justify-center
            "
          >
            <FaBell />
          </button>

          {/* Profile */}

          <div
            className="
            bg-gray-100
            rounded-xl
            px-4
            py-2
            flex
            items-center
            gap-3
            cursor-pointer
            hover:bg-gray-200
            transition
            "
          >
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>

              <h3 className="font-semibold text-[#1A5F7A]">
                Aayush Thapa
              </h3>

              <p className="text-xs text-gray-500">
                Explorer Member
              </p>

            </div>

            <FaChevronDown className="text-gray-500" />

          </div>

        </div>

        {/* Categories */}

        <div className="mt-6 flex gap-3 overflow-x-auto scrollbar-hide">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`
              whitespace-nowrap
              rounded-full
              px-5
              py-2
              text-sm
              transition

              ${
                selected === item
                  ? "bg-[#1A5F7A] text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }
              `}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </header>
  );
}