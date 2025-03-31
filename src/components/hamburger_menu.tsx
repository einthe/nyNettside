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
          <a href="/">Home</a>
          <a href="volleyball">Volleyball</a>
          <a href="dj">DJ</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;