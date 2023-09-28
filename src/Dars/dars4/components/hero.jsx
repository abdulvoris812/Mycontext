import React from 'react';
import '../style/hero.css';
import Card from '../images/hero img.svg';

const Hero = () => {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-box">
              <h1 className='title'>Beatiful Places of England</h1>
              <p className='text'>Plan your vacation on the most beatiful places of England</p>
            </div>
            <div className="hero-card">
              <div className="title-box">
                <p className='text-card'>Up next</p>
                <h3 className='title-card'>Aerial View <br /> of Rock  Cliffs</h3>
              </div>
              <img src={Card} alt="img" className='card-img'/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;