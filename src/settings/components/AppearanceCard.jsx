import { useState } from "react";
import {
  FaPalette,
  FaSun,
  FaCompressAlt,
  FaMagic,
  FaRegSquare,
} from "react-icons/fa";

export default function AppearanceCard() {
  const [settings, setSettings] = useState({
    theme: "Light",
    compactLayout: false,
    animations: true,
    roundedCards: true,
  });

  function toggle(key) {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
          <FaPalette size={24} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            Appearance
          </h2>

          <p className="text-gray-500">
            Customize the appearance of TrippyGo.
          </p>
        </div>

      </div>

      {/* Theme */}

      <div className="mb-10">

        <h3 className="font-bold text-xl mb-5">
          Theme
        </h3>

        <button
          className="flex items-center gap-4 border-2 border-[#1A5F7A] rounded-2xl px-6 py-4 bg-blue-50"
        >
          <FaSun className="text-yellow-500 text-xl" />

          <div className="text-left">

            <h4 className="font-bold">
              Light Theme
            </h4>

            <p className="text-sm text-gray-500">
              Clean and bright appearance.
            </p>

          </div>

        </button>

      </div>

      {/* Options */}

      <div className="space-y-8">

        <SettingToggle
          icon={<FaCompressAlt />}
          title="Compact Layout"
          description="Reduce spacing to show more content."
          checked={settings.compactLayout}
          onClick={() => toggle("compactLayout")}
        />

        <SettingToggle
          icon={<FaMagic />}
          title="Show Animations"
          description="Enable smooth transitions and hover effects."
          checked={settings.animations}
          onClick={() => toggle("animations")}
        />

        <SettingToggle
          icon={<FaRegSquare />}
          title="Rounded Cards"
          description="Use rounded corners throughout the application."
          checked={settings.roundedCards}
          onClick={() => toggle("roundedCards")}
        />

      </div>

    </div>
  );
}

function SettingToggle({
  icon,
  title,
  description,
  checked,
  onClick,
}) {
  return (
    <div className="flex justify-between items-center">

      <div className="flex items-center gap-5">

        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-[#1A5F7A] text-xl">
          {icon}
        </div>

        <div>

          <h3 className="font-bold text-lg">
            {title}
          </h3>

          <p className="text-gray-500 text-sm">
            {description}
          </p>

        </div>

      </div>

      <button
        onClick={onClick}
        className={`w-16 h-9 rounded-full relative transition ${
          checked
            ? "bg-[#1A5F7A]"
            : "bg-gray-300"
        }`}
      >

        <span
          className={`absolute top-1 w-7 h-7 rounded-full bg-white transition ${
            checked
              ? "left-8"
              : "left-1"
          }`}
        />

      </button>

    </div>
  );
}