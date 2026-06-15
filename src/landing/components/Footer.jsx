function Footer() {
  return (
    <footer className="bg-[#00475E] text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            TrippyGo
          </h2>

          <p className="text-gray-300 leading-7">
            © 2026 TrippyGo. All rights reserved.
            <br />
            Your gateway to the Himalayas.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="uppercase font-semibold tracking-wider mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">
              About Us
            </li>

            <li className="hover:text-white cursor-pointer">
              FAQ
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact Support
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="uppercase font-semibold tracking-wider mb-4">
            Support
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">
              Travel Insurance
            </li>

            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="uppercase font-semibold tracking-wider mb-4">
            Connect
          </h3>

          <div className="flex gap-4">

            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#00475E] transition">
              F
            </button>

            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#00475E] transition">
              I
            </button>

            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#00475E] transition">
              X
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;