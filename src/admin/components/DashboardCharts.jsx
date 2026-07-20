import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#EC4899",
];

const MONTHS = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function DashboardCharts({ dashboard }) {
  const userGrowth = dashboard.monthlyUsers.map((item) => ({
    month: MONTHS[item._id],
    users: item.total,
  }));

  const destinationData = dashboard.destinationCategories;

  const popularDestinations = dashboard.popularDestinations.map((item) => ({
    name: item.name,
    rating: item.rating,
  }));

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-10">
      {/* Monthly User Growth */}
      <div className="bg-white rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-[#0F4C81] mb-6">
          Monthly User Growth
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userGrowth}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#2563EB"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Destination Categories */}
      <div className="bg-white rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-[#0F4C81] mb-6">
          Destination Categories
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={destinationData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {destinationData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Popular Destinations */}
      <div className="bg-white rounded-3xl shadow-lg p-6 lg:col-span-2">
        <h2 className="text-xl font-bold text-[#0F4C81] mb-6">
          Top Rated Destinations
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={popularDestinations}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis domain={[0, 5]} />

            <Tooltip />

            <Bar
              dataKey="rating"
              fill="#2563EB"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}