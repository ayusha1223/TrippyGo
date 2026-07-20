import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        language: {
          title: "Language",
          description: "Choose your preferred language.",
          english: "English",
          englishDescription: "English language",
          nepali: "नेपाली",
          nepaliDescription: "Nepali language",
        },

        navigation: {
          home: "Home",
          destinations: "Destinations",
          adventures: "Adventures",
          itinerary: "Itinerary",
          favourites: "Favourites",
          profile: "Profile",
        },
      },
    },

    ne: {
      translation: {
        language: {
          title: "भाषा",
          description: "आफ्नो मनपर्ने भाषा छान्नुहोस्।",
          english: "अंग्रेजी",
          englishDescription: "अंग्रेजी भाषा",
          nepali: "नेपाली",
          nepaliDescription: "नेपाली भाषा",
        },

        navigation: {
          home: "गृहपृष्ठ",
          destinations: "गन्तव्यहरू",
          adventures: "साहसिक गतिविधिहरू",
          itinerary: "यात्रा योजना",
          favourites: "मनपर्ने",
          profile: "प्रोफाइल",
        },
      },
    },
  },

  lng: savedLanguage,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;