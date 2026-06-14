import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import heroImage from "../../assets/images/everest.jpg";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);

      alert(data.message);

      setLoading(false);
    } catch (error) {
      setLoading(false);

      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FCF9F8]">

      {/* Left Hero Section */}
      <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden">

        <img
          src={heroImage}
          alt="Explore Nepal"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A5F7A]/80 via-transparent to-transparent"></div>

        <div className="absolute top-10 left-10 z-10">
          <h1 className="text-white text-4xl font-bold">
            TrippyGo
          </h1>
        </div>

        <div className="absolute bottom-16 left-16 text-white z-10">

          <h1 className="text-7xl font-bold leading-tight tracking-tight mb-6">
            Explore <br />
            Nepal
          </h1>

          <p className="text-xl max-w-xl leading-relaxed">
            Discover breathtaking mountains,
            rich culture, hidden destinations,
            trekking adventures and unforgettable
            journeys across Nepal.
          </p>

        </div>
      </div>

      {/* Right Login Section */}
      <div className="w-full lg:w-2/5 flex items-center justify-center bg-white px-8 lg:px-16">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">

          <div className="mb-8">

            <h2 className="text-5xl font-bold text-[#00475E] mb-3">
              Welcome Back
            </h2>

            <p className="text-gray-500">
              Login to continue your journey.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                className="w-full h-14 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1A5F7A]"
              />
            </div>

            {/* Password */}
            <div>

              <div className="flex justify-between mb-2">

                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-[#1A5F7A] hover:underline"
                >
                  Forgot Password?
                </Link>

              </div>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1A5F7A]"
                />

                <button
                  type="button"
                  className="absolute right-4 top-4 text-gray-500"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>

            {/* Remember Me */}

<div className="flex items-center justify-between">

  <label className="flex items-center gap-3 cursor-pointer">

    <input
      type="checkbox"
      checked={rememberMe}
      onChange={(e) =>
        setRememberMe(e.target.checked)
      }
      className="w-4 h-4 text-[#1A5F7A] border-gray-300 rounded focus:ring-[#1A5F7A]"
    />

    <span className="text-sm text-gray-600">
      Remember me for 30 days
    </span>

  </label>

</div>

            {/* Login Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-[#1A5F7A] hover:bg-[#00475E] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              {loading
                ? "Signing In..."
                : " Login"}
            </button>

          </form>

          {/* Footer */}

          <div className="mt-8 text-center">

            <p className="text-gray-600">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-[#159947] font-semibold hover:underline"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;