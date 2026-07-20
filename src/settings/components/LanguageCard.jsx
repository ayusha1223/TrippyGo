import { useTranslation } from "react-i18next";
import { FaCheckCircle, FaGlobe } from "react-icons/fa";

export default function LanguageCard() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || i18n.language || "en";

  async function changeLanguage(language) {
    await i18n.changeLanguage(language);

    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-14 h-14 rounded-2xl bg-blue-100 flex
                     items-center justify-center text-[#1A5F7A]"
        >
          <FaGlobe size={24} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            {t("language.title")}
          </h2>

          <p className="text-gray-500">
            {t("language.description")}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* English */}
        <button
          type="button"
          onClick={() => changeLanguage("en")}
          className={`
            relative border-2 rounded-2xl p-6 text-left transition
            ${
              currentLanguage.startsWith("en")
                ? "border-[#1A5F7A] bg-blue-50"
                : "border-gray-200 hover:border-[#1A5F7A]"
            }
          `}
        >
          {currentLanguage.startsWith("en") && (
            <FaCheckCircle
              size={20}
              className="absolute top-4 right-4 text-[#1A5F7A]"
            />
          )}

          <h3 className="text-2xl font-bold">
            🇬🇧 {t("language.english")}
          </h3>

          <p className="text-gray-500 mt-2">
            {t("language.englishDescription")}
          </p>
        </button>

        {/* Nepali */}
        <button
          type="button"
          onClick={() => changeLanguage("ne")}
          className={`
            relative border-2 rounded-2xl p-6 text-left transition
            ${
              currentLanguage.startsWith("ne")
                ? "border-[#1A5F7A] bg-blue-50"
                : "border-gray-200 hover:border-[#1A5F7A]"
            }
          `}
        >
          {currentLanguage.startsWith("ne") && (
            <FaCheckCircle
              size={20}
              className="absolute top-4 right-4 text-[#1A5F7A]"
            />
          )}

          <h3 className="text-2xl font-bold">
            🇳🇵 {t("language.nepali")}
          </h3>

          <p className="text-gray-500 mt-2">
            {t("language.nepaliDescription")}
          </p>
        </button>
      </div>
    </div>
  );
}