import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  FaPalette,
  FaSun,
  FaCompressAlt,
  FaMagic,
  FaRegSquare,
} from "react-icons/fa";

export default function AppearanceCard() {
  const { t } = useTranslation();

  const [settings, setSettings] = useState({
    theme: "light",
    compactLayout: false,
    animations: true,
    roundedCards: true,
  });

  function toggle(key) {
    setSettings((previousSettings) => ({
      ...previousSettings,
      [key]: !previousSettings[key],
    }));
  }

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-14 h-14 rounded-2xl bg-purple-100 flex
                     items-center justify-center text-purple-600"
        >
          <FaPalette size={24} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            {t("appearance.title")}
          </h2>

          <p className="text-gray-500">
            {t("appearance.description")}
          </p>
        </div>
      </div>

      {/* Theme */}
      <div className="mb-10">
        <h3 className="font-bold text-xl mb-5">
          {t("appearance.theme")}
        </h3>

        <button
          type="button"
          className="flex items-center gap-4 border-2 border-[#1A5F7A]
                     rounded-2xl px-6 py-4 bg-blue-50"
        >
          <FaSun className="text-yellow-500 text-xl" />

          <div className="text-left">
            <h4 className="font-bold">
              {t("appearance.lightTheme")}
            </h4>

            <p className="text-sm text-gray-500">
              {t("appearance.lightThemeDescription")}
            </p>
          </div>
        </button>
      </div>

      {/* Options */}
      <div className="space-y-8">
        <SettingToggle
          icon={<FaCompressAlt />}
          title={t("appearance.compactLayout")}
          description={t("appearance.compactLayoutDescription")}
          checked={settings.compactLayout}
          onClick={() => toggle("compactLayout")}
          enabledLabel={t("common.enabled")}
          disabledLabel={t("common.disabled")}
        />

        <SettingToggle
          icon={<FaMagic />}
          title={t("appearance.animations")}
          description={t("appearance.animationsDescription")}
          checked={settings.animations}
          onClick={() => toggle("animations")}
          enabledLabel={t("common.enabled")}
          disabledLabel={t("common.disabled")}
        />

        <SettingToggle
          icon={<FaRegSquare />}
          title={t("appearance.roundedCards")}
          description={t("appearance.roundedCardsDescription")}
          checked={settings.roundedCards}
          onClick={() => toggle("roundedCards")}
          enabledLabel={t("common.enabled")}
          disabledLabel={t("common.disabled")}
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
  enabledLabel,
  disabledLabel,
}) {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex items-center gap-5">
        <div
          className="w-12 h-12 rounded-xl bg-gray-100 flex-shrink-0
                     flex items-center justify-center text-[#1A5F7A] text-xl"
        >
          {icon}
        </div>

        <div>
          <h3 className="font-bold text-lg">{title}</h3>

          <p className="text-gray-500 text-sm">
            {description}
          </p>
        </div>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`${title}: ${
          checked ? enabledLabel : disabledLabel
        }`}
        onClick={onClick}
        className={`w-16 h-9 rounded-full relative flex-shrink-0 transition ${
          checked ? "bg-[#1A5F7A]" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 w-7 h-7 rounded-full bg-white
                      shadow-sm transition-all ${
                        checked ? "left-8" : "left-1"
                      }`}
        />
      </button>
    </div>
  );
}