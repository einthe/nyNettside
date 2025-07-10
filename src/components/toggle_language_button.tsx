"use client";

import "./toggle_language_button.css";
import { useLanguage } from "./language_context";

export default function ToggleLanguageButton() {
  const { toggleLanguage } = useLanguage();
  const { language } = useLanguage();

  return (
    <div className="toggle-language-button-container">
        <button className="toggle-language-button" onClick={toggleLanguage}>
            {language === "en" ? "EN" : "NO"}
        </button>
    </div>
  );
}