import React from 'react';
import "../style/hero.css"
import "../style/allStye.css"
import Heroimg from './img/hero image.svg';

const Hero = () => {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-box">
              <h1 className='hero-title'>Kasia Aviator</h1>
              <p className='hero-text'>Imagina unos lentes de sol absolutamente impresionantes, diseñados para aquellos que buscan una combinación perfecta <br /> entre estilo y funcionalidad<br /><br />Precio habitual: $4,420.00 MXN<br />Precio de oferta: $3,770.00 MXN</p>
              <button className='hero-btn'>Comprar</button>
            </div>
            <img src={Heroimg} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;