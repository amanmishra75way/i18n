import i18next, { init } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "hi",
    resources: {
      en: {
        translation: {
          greeting: "Welcome to My React App",
        },
      },
      hi: {
        translation: {
          greeting: "मेरे रिएक्ट ऐप में आपका स्वागत है",
        },
      },
    },
  });
