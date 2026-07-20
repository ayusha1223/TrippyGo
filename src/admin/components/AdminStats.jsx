import {
  FaUsers,
  FaMapMarkedAlt,
  FaRoute,
  FaHeart,
} from "react-icons/fa";

export default function AdminStats({ dashboard }) {
  const cards = [
    {
      title: "Users",
      value: dashboard.users,
      color: "bg-blue-500",
      icon: <FaUsers size={26} />,
    },
    {
      title: "Destinations",
      value: dashboard.destinations,
      color: "bg-green-500",
      icon: <FaMapMarkedAlt size={26} />,
    },
    {
      title: "Itineraries",
      value: dashboard.itineraries,
      color: "bg-orange-500",
      icon: <FaRoute size={26} />,
    },
    {
      title: "Favorites",
      value: dashboard.favorites,
      color: "bg-red-500",
      icon: <FaHeart size={26} />,
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-3xl shadow-lg p-7 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-3 text-gray-800">
                {card.value}
              </h2>
            </div>

            <div
              className={`${card.color} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}