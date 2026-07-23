import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import heroImage from "../../assets/images/everest.jpg";

const toastBaseStyle = {
  padding: "16px 24px",
  fontSize: "16px",
  fontWeight: "600",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
};

const successToastOptions = {
  duration: 3000,
  position: "top-center",
  style: {
    ...toastBaseStyle,
    color: "#166534",
    background: "#DCFCE7",
    border: "1px solid #86EFAC",
  },
  iconTheme: {
    primary: "#16A34A",
    secondary: "#FFFFFF",
  },
};

const errorToastOptions = {
  duration: 5000,
  position: "top-center",
  style: {
    ...toastBaseStyle,
    color: "#991B1B",
    background: "#FEE2E2",
    border: "1px solid #FCA5A5",
  },
  iconTheme: {
    primary: "#DC2626",
    secondary: "#FFFFFF",
  },
};

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();

    if (!name) {
      toast.error("Please enter your full name.", errorToastOptions);
      return;
    }

    if (!email) {
      toast.error("Please enter your email address.", errorToastOptions);
      return;
    }

    if (!formData.password) {
      toast.error("Please enter a password.", errorToastOptions);
      return;
    }

    if (formData.password.length < 8) {
      toast.error(
        "Password must contain at least 8 characters.",
        errorToastOptions
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.", errorToastOptions);
      return;
    }

    if (!formData.terms) {
      toast.error(
        "Please accept the Terms & Conditions.",
        errorToastOptions
      );
      return;
    }

    try {
      setSubmitting(true);

      await axios.post(
        "http://localhost:5001/api/auth/register",
        {
          name,
          email,
          password: formData.password,
        }
      );

      toast.success(
        "Registration successful! Redirecting to login...",
        successToastOptions
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Registration failed:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Registration failed. Please try again.";

      toast.error(errorMessage, errorToastOptions);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="
        flex min-h-screen items-center justify-center
        bg-cover bg-center p-4 md:p-10
      "
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div
        className="
          flex min-h-[740px] w-full max-w-6xl
          overflow-hidden rounded-xl border border-white/20
          bg-white/10 shadow-2xl backdrop-blur-lg
        "
      >
        {/* Left side */}
        <div
          className="
            hidden w-1/2 flex-col justify-between
            bg-[#1A5F7A]/50 p-12 text-white md:flex
          "
        >
          <div>
            <h1 className="mb-5 text-5xl font-bold">
              Explore Nepal
            </h1>

            <p className="text-lg text-white/90">
              Join a community of explorers discovering Nepal&apos;s
              hidden beauty.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">
                Curated Destinations
              </h3>

              <p className="text-sm text-white/80">
                Handpicked places from all over Nepal.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                AI Travel Planner
              </h3>

              <p className="text-sm text-white/80">
                Build your perfect itinerary instantly.
              </p>
            </div>
          </div>

          <p className="text-xs text-white/70">
            © 2026 TrippyGo
          </p>
        </div>

        {/* Right side */}
        <div className="w-full overflow-y-auto bg-white p-8 md:w-1/2 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1A5F7A]">
              Create your account
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            {/* Full name */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your full name"
                autoComplete="name"
                disabled={submitting}
                onChange={handleChange}
                className="
                  mt-2 w-full rounded-lg border bg-slate-50 p-3
                  outline-none transition
                  focus:border-[#1A5F7A]
                  focus:ring-2 focus:ring-[#1A5F7A]/20
                  disabled:cursor-not-allowed disabled:opacity-60
                "
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email address"
                autoComplete="email"
                disabled={submitting}
                onChange={handleChange}
                className="
                  mt-2 w-full rounded-lg border bg-slate-50 p-3
                  outline-none transition
                  focus:border-[#1A5F7A]
                  focus:ring-2 focus:ring-[#1A5F7A]/20
                  disabled:cursor-not-allowed disabled:opacity-60
                "
              />
            </div>

            {/* Password fields */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    placeholder="Minimum 8 characters"
                    autoComplete="new-password"
                    disabled={submitting}
                    onChange={handleChange}
                    className="
                      mt-2 w-full rounded-lg border bg-slate-50
                      p-3 pr-12 outline-none transition
                      focus:border-[#1A5F7A]
                      focus:ring-2 focus:ring-[#1A5F7A]/20
                      disabled:cursor-not-allowed disabled:opacity-60
                    "
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    disabled={submitting}
                    onClick={() =>
                      setShowPassword((previousValue) => !previousValue)
                    }
                    className="
                      absolute right-3 top-1/2
                      -translate-y-[35%] text-lg
                      disabled:cursor-not-allowed disabled:opacity-50
                    "
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={
                      showConfirmPassword ? "text" : "password"
                    }
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Repeat password"
                    autoComplete="new-password"
                    disabled={submitting}
                    onChange={handleChange}
                    className="
                      mt-2 w-full rounded-lg border bg-slate-50
                      p-3 pr-12 outline-none transition
                      focus:border-[#1A5F7A]
                      focus:ring-2 focus:ring-[#1A5F7A]/20
                      disabled:cursor-not-allowed disabled:opacity-60
                    "
                  />

                  <button
                    type="button"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirmed password"
                        : "Show confirmed password"
                    }
                    disabled={submitting}
                    onClick={() =>
                      setShowConfirmPassword(
                        (previousValue) => !previousValue
                      )
                    }
                    className="
                      absolute right-3 top-1/2
                      -translate-y-[35%] text-lg
                      disabled:cursor-not-allowed disabled:opacity-50
                    "
                  >
                    {showConfirmPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                disabled={submitting}
                onChange={handleChange}
                className="h-4 w-4 accent-[#1A5F7A]"
              />

              <span className="text-sm">
                I agree to the Terms &amp; Conditions
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="
                w-full rounded-lg bg-[#1A5F7A] py-4
                font-semibold text-white transition
                hover:bg-[#154b61]
                disabled:cursor-not-allowed disabled:opacity-60
              "
            >
              {submitting ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#1A5F7A] hover:underline"
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