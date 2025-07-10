'use client';

import React, { useState } from 'react';
import './hamburger_menu.css';
import { useLanguage } from "./language_context";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { language } = useLanguage();

  return (
    <div className="hamburger-container">
      <button className="hamburger" onClick={toggleMenu}>
        <div className="hitbox" />
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {isOpen && (
        <div className="menu">

          <div className="menu-section">
            <div className="menu-category-text">
              {language === "en" ? "General" : "Generelt"}
            </div>
            <div className="menu-links">
              <a href="/">
                {language === "en" ? "Home" : "Hjem"}
              </a>
            </div>
          </div>

          <div className="menu-section">
            <div className="menu-category-text">
              {language === "en" ? "Job related" : "Jobbrelatert"}
            </div>
            <div className="menu-links">

            </div>
          </div>

          <div className="menu-section">
            <div className="menu-category-text">
              {language === "en" ? "Hobbies" : "Hobbyer"}
            </div>
            <div className="menu-links">
              <a href="volleyball">
                {language === "en" ? "Volleyball" : "Volleyball"}
              </a>
              <a href="dj">
              {language === "en" ? "DJ" : "DJ"}
              </a>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;