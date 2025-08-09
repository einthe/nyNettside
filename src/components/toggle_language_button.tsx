"use client";

import "./button.css";
import { useLanguage } from "./language_context";

export default function ToggleLanguageButton() {
  const { toggleLanguage } = useLanguage();
  const { language } = useLanguage();

  return (
    <div className="button-container">
        <button className="button" onClick={toggleLanguage}
  onAnimationEnd={(e) => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      (e.currentTarget as HTMLButtonElement).blur();
    }
  }}>
            {language === "en" ? "EN" : "NO"}
        </button>
    </div>
  );
}