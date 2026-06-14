import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/everest.jpg";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);

    alert(
      "Password reset functionality will be added later."
    );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00475E]/30 to-black/40"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg bg-white/70 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-12">

        {/* Logo */}
        <div className="text-center mb-10">

          <h1 className="text-3xl font-bold text-[#1A5F7A]">
            TrippyGo
          </h1>

          <h2 className="text-4xl font-semibold text-[#00475E] mt-6">
            Forgot Password?
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Enter your email address and we'll send
            you a password reset link.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="wanderer@example.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#1A5F7A]"
            />

          </div>

          <button
            type="submit"
            className="w-full h-13 bg-[#1A5F7A] hover:bg-[#00475E] text-white rounded-lg font-semibold transition duration-300"
          >
            Send Reset Link →
          </button>

        </form>

        {/* Footer */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-[#1A5F7A] font-medium"
          >
            ← Back to Login
          </Link>

        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;