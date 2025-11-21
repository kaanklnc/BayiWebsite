// components/Hero/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-modern">
      <video autoPlay muted loop playsInline className="hero-video" preload="auto">
        <source src="/videos/iddaa-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-content-modern">
        <h1 className="hero-title">
          BELEN <span className="gold-text">ŞANS</span> OYUNLARI
        </h1>
        <p className="hero-subtitle">
          Yetkili Bayi <span className="bayi-code">10088</span> • 10+ Yıl Güven
        </p>
        <p className="hero-slogan">
          Kazanma Heyecanı Artık Daha Güvenli ve Daha Yakın
        </p>

        <div className="hero-cta-group">
          <a href="#how-to-play" className="cta-primary">
            <span>Hemen Başla</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5l8 7-8 7V5z" />
            </svg>
          </a>

          <a
            href="https://t.me/username" // Telegram Linki
            target="_blank"
            rel="noopener noreferrer"
            className="cta-telegram" // Class ismi değişti
          >
            {/* Telegram İkonu */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
               <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.655-.786l3.193-15.174c.323-1.305-.157-1.834-1.436-1.255z"/>
            </svg>
            <span>Telegram ile Ulaş</span>
          </a>
        </div>

        <div className="trust-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 3.5l7 7H5l7-7zm0 4.5v8h-2v-8h2zm-4 3v5H6v-5h2zm8 0v5h-2v-5h2z" />
          </svg>
          <span>Resmi iddaa.com Yetkili Bayi • Yasal & Güvenli</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;