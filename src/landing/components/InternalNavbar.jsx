import { Link } from "react-router-dom";

function InternalNavbar() {
return ( <nav className="sticky top-0 w-full z-50 bg-white shadow-sm"> <div className="max-w-7xl mx-auto mt-4 px-8"> <div className="bg-white border border-gray-200 rounded-2xl px-8 py-4 flex items-center justify-between">

      {/* Logo */}
      <h1 className="text-[#0F4C5C] text-3xl font-bold">
        TrippyGo
      </h1>

      {/* Middle Menu */}
      <div className="hidden md:flex items-center gap-8 text-[#0F4C5C] font-medium">

        <Link to="/" className="hover:text-orange-500 transition">
          Home
        </Link>

        <Link to="/maps" className="hover:text-orange-500 transition">
          Maps
        </Link>

        <Link to="/hotels" className="hover:text-orange-500 transition">
          Hotels
        </Link>

        <Link to="/adventures" className="hover:text-orange-500 transition">
          Adventures
        </Link>

        <Link to="/ai-guide" className="hover:text-orange-500 transition">
          AI Guide
        </Link>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <Link
          to="/login"
          className="text-[#0F4C5C] hover:text-orange-500"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-white font-semibold"
        >
          Sign Up
        </Link>

      </div>

    </div>
  </div>
</nav>

);
}

export default InternalNavbar;
