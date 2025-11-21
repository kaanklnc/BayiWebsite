// Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    { name: "Ahmet Y.", text: "10 yıldır buradan oynuyorum. Güvenin adresi!", rating: 5 },
    { name: "Zeynep K.", text: "WhatsApp’tan 2 dakikada kupon hazır. Harika hizmet!", rating: 5 },
    { name: "Emre Can", text: "Kampanyalar gerçek, kazançlar hızlı. Teşekkürler Belen!", rating: 5 },
    { name: "Seda Hanım", text: "Yeni başlayanlar için en güvenilir bayi. Kesinlikle tavsiye ederim.", rating: 5 },
    { name: "Mert 06", text: "Bayi kodu 10088 = Kazanç garantisi", rating: 5 },
  ];

  return (
    <section className="testimonials-premium">
      <div className="container">
        <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>

        <div className="marquee">
          <div className="marquee-track">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="quote">"{r.text}"</p>
                <p className="author">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;