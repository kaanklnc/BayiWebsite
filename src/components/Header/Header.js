// components/Header/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';
import logoPng from '../../assets/logo.png';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-premium ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src={logoPng} alt="Belen Şans Oyunları" className="header-logo-img" />
        </div>
        <nav className={`nav ${mobileOpen ? 'open' : ''}`}>
          <a href="#home">Ana Sayfa</a>
          <a href="#about">Hakkımızda</a>
          <a href="#how-to-play">Nasıl Oynanır?</a>
          <a href="#campaigns">Kampanyalar</a>
          <a 
            href="https://t.me/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="telegram-btn" // Class değişti
          >
            Telegram
          </a>
        </nav>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  );
};

export default Header;