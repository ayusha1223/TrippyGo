import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

export default function LanguageCard() {
  const { i18n } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-[#1A5F7A]">

          <FaGlobe size={24} />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#1A5F7A]">
            Language
          </h2>

          <p className="text-gray-500">
            Choose your preferred language.
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* English */}

        <button
          onClick={() => changeLanguage("en")}
          className={`
            border-2
            rounded-2xl
            p-6
            text-left
            transition
            ${
              i18n.language.startsWith("en")
                ? "border-[#1A5F7A] bg-blue-50"
                : "border-gray-200 hover:border-[#1A5F7A]"
            }
          `}
        >

          <h3 className="text-2xl font-bold">
            🇬🇧 English
          </h3>

          <p className="text-gray-500 mt-2">
            English language
          </p>

        </button>

        {/* Nepali */}

        <button
          onClick={() => changeLanguage("ne")}
          className={`
            border-2
            rounded-2xl
            p-6
            text-left
            transition
            ${
              i18n.language.startsWith("ne")
                ? "border-[#1A5F7A] bg-blue-50"
                : "border-gray-200 hover:border-[#1A5F7A]"
            }
          `}
        >

          <h3 className="text-2xl font-bold">
            🇳🇵 नेपाली
          </h3>

          <p className="text-gray-500 mt-2">
            नेपाली भाषा
          </p>

        </button>

      </div>

    </div>
  );
}