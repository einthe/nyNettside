"use client";
import "./button.css";
import { useLanguage } from "../components/language_context";

export default function ResumeButton() {
  const { language } = useLanguage();
  const handleClick = () => {
    {language === "en" ? window.open("/docs/Resume.pdf", "_blank") : window.open("/docs/CV.pdf", "_blank")};
  };

  return (
    <div className="button-container" style={{ position: "relative", top: "1rem", left: "0" }}>
      <button className="button" onClick={handleClick}>
        {language === "en" ? "Resume" : "CV"}
      </button>
    </div>
  );
}