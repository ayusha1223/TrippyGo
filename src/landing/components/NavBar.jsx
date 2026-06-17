import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto mt-6 px-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-white text-3xl font-bold">
            TrippyGo
          </h1>

          {/* Middle Menu */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">

  <Link to="/" className="hover:text-orange-400">
    Home
  </Link>

  <Link to="/Maps" className="hover:text-orange-400">
    Maps
  </Link>

  <Link to="/hotels" className="hover:text-orange-400">
    Hotels
  </Link>

  <Link to="/adventures" className="hover:text-orange-400">
    Adventures
  </Link>

  <Link to="/ai-guide" className="hover:text-orange-400">
    AI Guide
  </Link>

</div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-white hover:text-orange-400"
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

export default NavBar;