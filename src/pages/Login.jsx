import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import heroImage from "../assets/images/everest.jpg";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
      const data = await loginUser(formData);

      alert(data.message);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex">
      
      {/* Left Side */}
      <div className="hidden lg:flex w-3/5 relative">
        <img
          src={heroImage}
          alt="Nepal"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-16 left-16 text-white">
          <h1 className="text-6xl font-bold mb-4">
            Explore Nepal
          </h1>

          <p className="text-xl max-w-lg">
            Discover mountains, culture,
            adventures and unforgettable
            journeys.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-2/5 flex items-center justify-center bg-slate-50 p-8">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-4xl font-bold mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-8">
            Sign in to continue exploring.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-4 border rounded-xl"
            />

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full p-4 border rounded-xl"
              />

              <button
                type="button"
                className="absolute right-4 top-4"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                👁
              </button>
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-blue-600"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              className="w-full bg-blue-700 text-white py-4 rounded-xl font-semibold hover:bg-blue-800"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;