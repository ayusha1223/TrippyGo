import { FaPalette } from "react-icons/fa";
import { useState } from "react";

export default function AppearanceCard() {
  const [theme, setTheme] = useState("Light");

  const themes = [
    "Light",
    "Dark",
    "System",
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">

          <FaPalette size={24} />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            Appearance
          </h2>

          <p className="text-gray-500">
            Personalize the look of TrippyGo.
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-5">

        {themes.map((item) => (

          <button
            key={item}
            onClick={() => setTheme(item)}
            className={`
              rounded-2xl
              border-2
              p-6
              transition

              ${
                theme === item
                  ? "border-[#1A5F7A] bg-blue-50"
                  : "border-gray-200 hover:border-[#1A5F7A]"
              }
            `}
          >

            <h3 className="text-xl font-bold">
              {item}
            </h3>

          </button>

        ))}

      </div>

    </div>
  );
}