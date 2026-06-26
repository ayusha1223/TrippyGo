import {
  FaCamera,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaSave,
  FaUser,
} from "react-icons/fa";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#F6F8FC] p-10">

      <h1 className="text-4xl font-bold text-[#0F4C81] mb-8">
        My Profile
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT */}

        <div className="bg-white rounded-3xl shadow-lg p-8 h-fit">

          <div className="flex flex-col items-center">

            <img
              src="https://i.pravatar.cc/200?img=12"
              alt="profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
            />

            <button
              className="
              mt-5
              bg-[#0F4C81]
              text-white
              px-5
              py-3
              rounded-xl
              flex
              items-center
              gap-2
              hover:bg-blue-700
              "
            >
              <FaCamera />

              Change Photo
            </button>

            <h2 className="text-2xl font-bold mt-8">
              Aayush Thapa
            </h2>

            <p className="text-gray-500">
              Explorer Member
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="lg:col-span-2 space-y-8">

          {/* Personal Info */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-8">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-semibold">
                  Full Name
                </label>

                <div className="relative mt-2">

                  <FaUser className="absolute left-4 top-4 text-gray-400" />

                  <input
                    defaultValue="Aayush Thapa"
                    className="w-full border rounded-xl pl-12 py-4"
                  />

                </div>

              </div>

              <div>

                <label className="font-semibold">
                  Email
                </label>

                <div className="relative mt-2">

                  <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                  <input
                    defaultValue="aayush@email.com"
                    className="w-full border rounded-xl pl-12 py-4"
                  />

                </div>

              </div>

              <div>

                <label className="font-semibold">
                  Phone
                </label>

                <div className="relative mt-2">

                  <FaPhone className="absolute left-4 top-4 text-gray-400" />

                  <input
                    defaultValue="+61 412345678"
                    className="w-full border rounded-xl pl-12 py-4"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Password */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-8">
              Change Password
            </h2>

            <div className="space-y-5">

              <div className="relative">

                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full border rounded-xl pl-12 py-4"
                />

              </div>

              <div className="relative">

                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full border rounded-xl pl-12 py-4"
                />

              </div>

              <div className="relative">

                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border rounded-xl pl-12 py-4"
                />

              </div>

            </div>

          </div>

          {/* Save */}

          <button
            className="
            bg-[#0F4C81]
            text-white
            px-8
            py-4
            rounded-xl
            flex
            items-center
            gap-3
            hover:bg-blue-700
            "
          >
            <FaSave />

            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}