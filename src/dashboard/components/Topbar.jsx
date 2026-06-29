import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";
import destinations from "../data/destination";

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
  const [search, setSearch] = useState("");
const [results, setResults] = useState([]);
  const navigate = useNavigate();

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
  value={search}
  onChange={(e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = destinations.filter((destination) =>
      destination.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  }}
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

{results.length > 0 && (
  <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border z-50 max-h-80 overflow-y-auto">

    {results.map((destination) => (

      <div
        key={destination.id}
        className="flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer"
      >
        <img
          src={destination.image}
          alt={destination.name}
          className="w-14 h-14 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-semibold">
            {destination.name}
          </h3>

          <p className="text-sm text-gray-500">
            {destination.description}
          </p>
        </div>

      </div>

    ))}

  </div>
)}

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
  onClick={() => navigate("/profile")}
  className="
  bg-white
  border
  border-gray-200
  rounded-2xl
  px-4
  py-2
  flex
  items-center
  gap-3
  cursor-pointer
  hover:shadow-lg
  hover:border-[#2563EB]
  transition-all
  duration-300
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