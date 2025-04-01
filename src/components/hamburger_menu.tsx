'use client';

import React, { useState } from 'react';
import './hamburger_menu.css';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
            <div className="menu-category-text">General</div>
            <div className="menu-links">
              <a href="/">Home</a>
            </div>
          </div>

          <div className="menu-section">
            <div className="menu-category-text">Job related</div>
            <div className="menu-links">

            </div>
          </div>

          <div className="menu-section">
            <div className="menu-category-text">Hobbies</div>
            <div className="menu-links">
              <a href="volleyball">Volleyball</a>
              <a href="dj">DJ</a>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;