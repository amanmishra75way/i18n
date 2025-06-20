import React from "react";
import { useTranslation } from "react-i18next";

const language = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="flex gap-4">
      {language.map((lang, index) => (
        <button
          key={index}
          onClick={() => changeLanguage(lang.code)}
          className={`px-4 py-2 rounded-full font-semibold shadow-md transition-colors duration-300 ${
            i18n.language === lang.code
              ? "bg-blue-500 text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
