// components/HowToPlay/HowToPlay.js
import React from 'react';
import './HowToPlay.css';

const HowToPlay = () => {
  const steps = [
    { num: "01", title: "iddaa.com'a Giriş Yap", desc: "Web veya mobil uygulamadan hesabınıza giriş yapın" },
    { num: "02", title: "Bayi Kodu Alanını Bul", desc: "Kupon oluştururken 'Bayi Seç' bölümüne gidin" },
    { num: "03", title: "10088 Kodunu Gir", desc: "Yetkili bayi kodumuzu yazın ve onaylayın" },
    { num: "04", title: "Kuponunu Oluştur!", desc: "Artık Belen Şans güvencesiyle oynuyorsun" },
  ];

  return (
    <section id="how-to-play" className="howtoplay-premium">
      <div className="container">
        <h2 className="section-title">
          4 Adımda <span className="gold">Kazanmaya Başla</span>
        </h2>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className="step-card" data-step={step.num}>
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <div className="step-connector"></div>
            </div>
          ))}
        </div>

        <div className="alternative-box">
          <div className="pulse-icon">
            {/* Location Yazısı yerine Harita İkonu */}
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <p>
            Ya da doğrudan <strong>bayimizi ziyaret edin</strong> veya Telegram’dan kupon talebinizi iletin.
            <br />7/24 sizinle birlikteyiz!
          </p>
          <a 
            href="https://t.me/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="telegram-cta"
          >
            Telegram’dan Kupon Al
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;