import {
  FaSearch,
  FaMountain,
  FaWater,
  FaParachuteBox,
  FaPaw,
  FaFire,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaMountain />,
    name: "All",
  },
  {
    icon: <FaMountain />,
    name: "Trekking",
  },
  {
    icon: <FaWater />,
    name: "Water",
  },
  {
    icon: <FaParachuteBox />,
    name: "Air",
  },
  {
    icon: <FaPaw />,
    name: "Wildlife",
  },
  {
    icon: <FaFire />,
    name: "Extreme",
  },
];

export default function AdventureFilters({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <section className="bg-white rounded-3xl shadow-md p-6 mb-10">

      {/* Search */}

      <div className="relative">

        <FaSearch
          className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />

       <input
  type="text"
  placeholder="Search adventures..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="
    w-full
    rounded-2xl
    border
    border-gray-200
    pl-14
    pr-5
    py-4
    outline-none
    focus:ring-2
    focus:ring-[#1A5F7A]
  "
/>

      </div>

      {/* Categories */}

      <div className="flex flex-wrap gap-4 mt-8">

       {categories.map((item) => (

  <button
    key={item.name}
    onClick={() => setCategory(item.name)}
    className={`
      flex
      items-center
      gap-2
      px-6
      py-3
      rounded-full
      font-semibold
      transition

      ${
        category === item.name
          ? "bg-[#1A5F7A] text-white"
          : "bg-[#EFF6FF] text-[#1A5F7A] hover:bg-[#1A5F7A] hover:text-white"
      }
    `}
  >

    {item.icon}

    {item.name}

  </button>

))}

      </div>

    </section>
  );
}