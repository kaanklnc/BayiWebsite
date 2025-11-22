import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutPreview from './components/AboutPreview/AboutPreview'; 
import Campaigns from './components/Campaigns/Campaigns'; 
import HowToPlay from './components/HowToPlay/HowToPlay'; 
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Dinamik SEO Yönetimi */}
      <Helmet>
        <title>Belen Şans Oyunları Yetkili iddaa Bayi - 300688 Koduyla Güvenle Oyna</title>
        <meta name="description" content="iddaa.com yetkili bayisi Belen Şans Oyunları. Güvenilir bahis kupon hizmeti, özel kampanyalar ve 300688 bayi kodu. Sorumlu Oyun." />
      </Helmet>
      
      <Header />
      <main>
        <div id="home">
            <Hero />
        </div>
        
        <div id="about">
            <AboutPreview /* isVisible={true} */ /> 
        </div >

        <div id="campaigns">
        <Campaigns /> 
        </div>

        <div id="how-to-play">
             <HowToPlay /> 
        </div>
        <Testimonials /> 
      </main>
      
      <Footer id="footer" />
      
    </div>
  );
}

export default App;