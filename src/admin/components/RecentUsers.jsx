export default function RecentUsers({ dashboard }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-[#0F4C81] mb-6">
        Recent Users
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-3">Name</th>
            <th className="pb-3">Email</th>
            <th className="pb-3">Joined</th>
          </tr>
        </thead>

        <tbody>
          {dashboard.latestUsers.map((user) => (
            <tr
              key={user._id}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-4 font-medium">
                {user.name}
              </td>

              <td>{user.email}</td>

              <td>
                {new Date(user.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}