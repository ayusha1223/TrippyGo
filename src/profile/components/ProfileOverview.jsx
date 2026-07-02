import { FaCamera, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export default function ProfileOverview() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <div className="flex flex-col lg:flex-row items-center gap-8">

        {/* Profile Picture */}

        <div className="relative">

          <img
            src="https://i.pravatar.cc/250?img=12"
            alt="Profile"
            className="w-44 h-44 rounded-full object-cover border-4 border-[#2563EB]"
          />

          <button
            className="
              absolute
              bottom-2
              right-2
              w-12
              h-12
              rounded-full
              bg-[#2563EB]
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              hover:scale-105
              transition
            "
          >
            <FaCamera />
          </button>

        </div>

        {/* User Info */}

        <div className="flex-1">

          <div className="flex items-center gap-3">

            <h2 className="text-4xl font-bold text-[#1A5F7A]">
              Aayush Thapa
            </h2>

            <FaCheckCircle className="text-green-500 text-2xl" />

          </div>

          <p className="text-gray-500 mt-2">
            Explorer Member
          </p>

          <div className="flex items-center gap-2 mt-4 text-gray-600">

            <FaMapMarkerAlt />

            <span>Perth, Australia</span>

          </div>

          <div className="flex gap-10 mt-8">

            <div>

              <h3 className="text-3xl font-bold text-[#1A5F7A]">
                12
              </h3>

              <p className="text-gray-500">
                Saved Places
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-[#1A5F7A]">
                24
              </h3>

              <p className="text-gray-500">
                Favorites
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-[#1A5F7A]">
                5
              </h3>

              <p className="text-gray-500">
                Itineraries
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}