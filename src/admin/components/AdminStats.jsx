import {
  FaUsers,
  FaMapMarkedAlt,
  FaRoute,
  FaHeart,
} from "react-icons/fa";

const stats = [
  {
    title: "Users",
    value: 0,
    color: "bg-blue-500",
    icon: <FaUsers size={28} />,
  },
  {
    title: "Destinations",
    value: 0,
    color: "bg-green-500",
    icon: <FaMapMarkedAlt size={28} />,
  },
  {
    title: "Itineraries",
    value: 0,
    color: "bg-orange-500",
    icon: <FaRoute size={28} />,
  },
  {
    title: "Favorites",
    value: 0,
    color: "bg-red-500",
    icon: <FaHeart size={28} />,
  },
];

export default function AdminStats() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-3xl shadow-lg p-6"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                {item.title}
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {item.value}
              </h2>

            </div>

            <div
              className={`${item.color} w-16 h-16 rounded-2xl text-white flex items-center justify-center`}
            >
              {item.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}