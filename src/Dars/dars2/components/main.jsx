import React from 'react';
import "../style/main.css"
import "../style/allStye.css"
import Card from './img/card image 1.svg'
import Card2 from './img/card image 2.svg'
import Card3 from './img/card image 3.svg'

const Main = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="container">
          <div className="main-inner">
          <div className="nav">
            <li className='li'>Fashion</li>
            <li className='li'>Travel</li>
            <li className='li'>Every Gay</li>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img src={Card} />
              <h2 className='main-title'>Cintúron de Cuero Negro</h2>
              <p className='main-text'>$3,770.00 MXN</p>
              <button className='main-btn'>Comprar</button>
            </div>
            <div className="card">
              <img src={Card2} />
              <h2 className='main-title'>Perfume Negro</h2>
              <p className='main-text'>$3,770.00 MXN</p>
              <button className='main-btn'>Comprar</button>
            </div>
            <div className="card">
              <img src={Card3} />
              <h2 className='main-title'>Guantes de Cuero Negro</h2>
              <p className='main-text'>$3,770.00 MXN</p>
              <button className='main-btn'>Comprar</button>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img src={Card2} />
              <h2 className='main-title'>Cintúron de Cuero Negro</h2>
              <p className='main-text'>$3,770.00 MXN</p>
              <button className='main-btn'>Comprar</button>
            </div>
            <div className="card">
              <img src={Card} />
              <h2 className='main-title'>Perfume Negro</h2>
              <p className='main-text'>$3,770.00 MXN</p>
              <button className='main-btn'>Comprar</button>
            </div>
            <div className="card">
              <img src={Card3} />
              <h2 className='main-title'>Guantes de Cuero Negro</h2>
              <p className='main-text'>$3,770.00 MXN</p>
              <button className='main-btn'>Comprar</button>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img src={Card} />
              <h2 className='main-title'>Cintúron de Cuero Negro</h2>
              <p className='main-text'>$3,770.00 MXN</p>
              <button className='main-btn'>Comprar</button>
            </div>
            <div className="card">
              <img src={Card3} />
              <h2 className='main-title'>Perfume Negro</h2>
              <p className='main-text'>$3,770.00 MXN</p>
              <button className='main-btn'>Comprar</button>
            </div>
            <div className="card">
              <img src={Card2} />
              <h2 className='main-title'>Guantes de Cuero Negro</h2>
              <p className='main-text'>$3,770.00 MXN</p>
              <button className='main-btn'>Comprar</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;