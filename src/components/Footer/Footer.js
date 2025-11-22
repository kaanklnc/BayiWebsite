// components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import logoPng from '../../assets/logo.png';
const Footer = () => {
  return (
    <footer id="footer" className="footer-luxury">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="brand-col">
<img src={logoPng} alt="Belen Şans Oyunları" className="footer-logo-img" />            <p className="tagline">Yetkili Bayi 300688</p>
            <p className="motto">Güvenle Kazanmanın Tek Adresi</p>
          </div>

          <div className="contact-col">
            <h4>İletişim</h4>
            
            <div className="contact-item">
              {/* Adres İkonu */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p>Atatürk Cd. No:15/A Silifke/Mersin</p>
            </div>

            <div className="contact-item">
              {/* Telefon İkonu */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <p>(0326) 999 99 99</p>
            </div>

            <a 
              href="https://t.me/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="telegram-footer"
            >
              Telegram’dan Ulaş
            </a>
          </div>

          <div className="legal-col">
            <h4>Yasal Uyarı</h4>
            <p>
              Belen Şans Oyunları, iddaa.com’un resmi yetkili bayisidir. 
              Sitemiz üzerinden doğrudan bahis oynanamaz. 
              Sorumlu oyun prensibini benimseriz.
            </p>
            <div className="bayi-code">Bayi Kodu: <strong>300688</strong></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Belen Şans Oyunları. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;