"use client";

import "./button.css";
import { useLanguage } from "./language_context";

export default function ToggleLanguageButton() {
  const { toggleLanguage } = useLanguage();
  const { language } = useLanguage();

  return (
    <div className="button-container">
        <button className="button" onClick={toggleLanguage}>
            {language === "en" ? "EN" : "NO"}
        </button>
    </div>
  );
}