import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import heroImage from "../../assets/images/everest.jpg";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please accept Terms & Conditions");
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

     alert("Registration Successful!");

navigate("/login");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
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
              Create your account
            </h2>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <label className="font-medium text-sm">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Ayusha Thapa"
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg border bg-slate-50"
              />
            </div>

            <div>
              <label className="font-medium text-sm">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="ayusha@gmail.com"
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg border bg-slate-50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">

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
                    value={formData.password}
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

              <div>
                <label className="font-medium text-sm">
                  Confirm Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 rounded-lg border bg-slate-50"
                  />

                  <button
                    type="button"
                    className="absolute right-3 top-5"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    👁
                  </button>

                </div>
              </div>

            </div>

            <div className="flex items-center gap-3">

              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              <span className="text-sm">
                I agree to Terms & Conditions
              </span>

            </div>

            <button
              type="submit"
              className="w-full bg-[#1A5F7A] text-white py-4 rounded-lg font-semibold hover:bg-[#154b61]"
            >
              Create Account
            </button>

         </form>

<div className="mt-8 text-center">

  <p className="text-gray-600">

    Already have an account?{" "}

    <Link
      to="/login"
      className="text-[#1A5F7A] font-semibold hover:underline"
    >
      Login here
    </Link>

  </p>

</div>

        </div>

      </div>
    </div>
  );
}

export default Register;
