import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./languageSelector";

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col h-screen w-full bg-black text-white p-10 justify-center items-center gap-5">
      <LanguageSelector />
      <h1 className="text-4xl">{t("greeting")}</h1>
    </div>
  );
};

export default App;
