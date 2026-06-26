import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import heroImage from "../../assets/images/everest.jpg";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

      localStorage.setItem(
        "token",
        data.token
      );

      alert("Login Successful!");

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-10"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="w-full max-w-6xl h-[740px] rounded-xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl flex">

        {/* LEFT */}
        <div className="w-1/2 bg-[#1A5F7A]/50 text-white p-12 flex flex-col justify-between">

          <div>
            <h1 className="text-5xl font-bold mb-5">
              Explore Nepal
            </h1>

            <p className="text-lg text-white/90">
              Join a community of explorers
              discovering Nepal's hidden beauty.
            </p>
          </div>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold">
                Curated Destinations
              </h3>

              <p className="text-white/80 text-sm">
                Handpicked places from all over Nepal.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                AI Travel Planner
              </h3>

              <p className="text-white/80 text-sm">
                Build your perfect itinerary instantly.
              </p>
            </div>

          </div>

          <p className="text-xs text-white/70">
            © 2026 TrippyGo
          </p>

        </div>

        {/* RIGHT */}
        <div className="w-1/2 bg-white p-12 overflow-y-auto">

          <div className="mb-10">
  <h2 className="text-3xl font-bold text-[#1A5F7A]">
    Welcome Back
  </h2>

  <p className="mt-2 text-gray-600">
    Login to continue your journey.
  </p>
</div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <label className="font-medium text-sm">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="ayusha@gmail.com"
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg border bg-slate-50"
              />
            </div>

            <div>
              <label className="font-medium text-sm">
                Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  onChange={handleChange}
                  className="w-full mt-2 p-3 rounded-lg border bg-slate-50"
                />

                <button
                  type="button"
                  className="absolute right-3 top-5"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  👁
                </button>

              </div>
            </div>

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(
                      e.target.checked
                    )
                  }
                />

                <span className="text-sm">
                  Remember Me
                </span>

              </label>

              <Link
                to="/forgot-password"
                className="text-sm text-[#1A5F7A]"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1A5F7A] text-white py-4 rounded-lg font-semibold hover:bg-[#154b61]"
            >
              {loading
                ? "Signing In..."
                : "Login"}
            </button>

          </form>
          <div className="mt-8 text-center">

  <p className="text-gray-600">

    Don't have an account?{" "}

    <Link
      to="/register"
      className="text-[#1A5F7A] font-semibold hover:underline"
    >
      Register here
    </Link>

  </p>

</div>

        </div>

      </div>
    </div>
  );
}

export default Login;

