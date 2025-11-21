// components/AboutPreview/AboutPreview.js
import React from 'react';
import './AboutPreview.css';

const AboutPreview = () => {
  // İkonlar SVG formatında tanımlandı
  const features = [
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
          <path d="M4 22h16"/>
          <path d="M12 17v5"/>
          <path d="M12 2a5 5 0 0 1 5 5v4.5a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"/>
        </svg>
      ),
      title: "10+ Yıl Tecrübe", 
      desc: "Sektör lideri hizmet" 
    },
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ), 
      title: "Resmi Yetkili Bayi", 
      desc: "iddaa.com 10088" 
    },
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ), 
      title: "Anında Kupon", 
      desc: "7/24 WhatsApp hizmeti" 
    },
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ), 
      title: "Müşteri Memnuniyeti", 
      desc: "%100 güvenilirlik" 
    },
  ];

  return (
    <section className="about-lux">
      <div className="container">
        <h2 className="section-title">
          Neden <span className="gold">Belen Şans Oyunları?</span>
        </h2>

        <div className="about-grid">
          <div className="text-side">
            <p className="big-text">
              10 yılı aşkın süredir <strong>iddaa.com</strong> yetkili bayisi olarak
              <br />güven, kalite ve hızı bir arada sunuyoruz.
            </p>
            <div className="bayi-code-display">
              <span>Yetkili Bayi Kodumuz</span>
              <strong>10088</strong>
            </div>
            <a href="#contact" className="lux-btn">
              Bize Ulaşın
            </a>
          </div>

          <div className="cards-side">
            {features.map((f, i) => (
              <div key={i} className="lux-card" style={{'--i': i}}>
                <div className="card-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;