// components/Campaigns/Campaigns.js
import React from 'react';
import './Campaigns.css';

const Campaigns = () => {
  const offers = [
    { amount: "500 TL", title: "HOŞ GELDİN BONUSU", desc: "Yeni üyelere özel ilk kupon hediyesi" },
    { amount: "1.000 TL", title: "ARKADAŞINI GETİR", desc: "Her arkadaşın için anında nakit kazan" },
    { amount: "VIP", title: "ÖZEL MÜŞTERİ", desc: "Yüksek oranlar ve size özel danışman" },
  ];

  return (
    <section className="campaigns-lux">
      <div className="container">
        <h2 className="section-title">
          <span className="gold-text">Size Özel Fırsatlar</span> 
        </h2>        
        <div className="campaigns-grid">
          {offers.map((c, i) => (
            <div key={i} className="offer-card">
              <div className="glow"></div>
              <div className="amount">{c.amount}</div>
              {/* Kampanya Adı */}
              <h3 className="campaign-title">{c.title}</h3>
              {/* İtalik Bilgilendirme */}
              <p className="campaign-desc">*{c.desc}</p>
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="claim-btn">Hemen Al →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;