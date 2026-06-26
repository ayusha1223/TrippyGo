import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function DashboardFooter() {
  return (
    <footer className="mt-20 border-t border-gray-200 pt-12">

      <div className="grid md:grid-cols-4 gap-10">

        {/* Logo */}

        <div>

          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            TrippyGo
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            Explore Nepal through AI powered travel
            planning and unforgettable adventures.
          </p>

        </div>

        {/* Explore */}

        <div>

          <h3 className="font-bold mb-5">
            Explore
          </h3>

          <ul className="space-y-3 text-gray-500">

            <li>Destinations</li>

            <li>Adventures</li>

            <li>Hotels</li>

            <li>Travel Guide</li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h3 className="font-bold mb-5">
            Company
          </h3>

          <ul className="space-y-3 text-gray-500">

            <li>About</li>

            <li>Blog</li>

            <li>Privacy</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* Social */}

        <div>

          <h3 className="font-bold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl text-[#1A5F7A]">

            <FaFacebook />

            <FaInstagram />

            <FaLinkedin />

            <FaGithub />

          </div>

        </div>

      </div>

      <div className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-500">

        <span>
          © 2026 TrippyGo. All rights reserved.
        </span>

        <span>
          Made with ❤️ in Nepal
        </span>

      </div>

    </footer>
  );
}