import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import mt from "./locales/mt/translation.json";
import hr from "./locales/hr/translation.json";
import rs from "./locales/rs/translation.json";
import es from "./locales/es/translation.json";
// import any other languages you have

const detectCountry = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return data.country;
  } catch (error) {
    console.error("Error detecting country:", error);
    return null;
  }
};

const initializeI18n = async () => {
  const country = await detectCountry();

  const languageMap = {
    MT: "mt", // Malta
    RS: "rs", // Serbia
    HR: "hr", // Croatia
    ES: "es", // Spain
    // Add more country codes as needed
    // US: "en",
    // GB: "en",
    // etc.
  };

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        mt: { translation: mt },
        hr: { translation: hr },
        rs: { translation: rs },
        es: { translation: es },
        // Add all other languages here
      },
      lng: languageMap[country] || "en",
      fallbackLng: "en",
      detection: {
        order: [
          "querystring",
          "cookie",
          "localStorage",
          "sessionStorage",
          "navigator",
          "htmlTag",
          "path",
          "subdomain",
        ],
        caches: ["cookie", "localStorage"],
      },
      interpolation: { escapeValue: false },
    });
};

initializeI18n();

export default i18n;
