import React from 'react';
import '../style/footer.css'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container">
      <footer>
          <div className="footer-inner">
            <h5 className='footer-title'>Book your vacation</h5>
            <div className="footer-box">
              <div className="wrapper-box">
                <div className="box">
                  <p className='box-text'>Accommodation</p>
                  <h5 className="box-title">6730 Luna Land North Rhiannonmouth</h5>
                </div>
                <div className="box">
                  <p className='box-text'>Check-in</p>
                  <h5 className="box-title">19.06.2019</h5>
                </div>
                <div className="box">
                  <p className='box-text'>Check-out</p>
                  <h5 className="box-title">19.06.2019</h5>
                </div>
                <div className="box">
                  <p className='box-text'>Guests</p>
                  <h5 className="box-title">4 adults</h5>
                </div>
              </div>
              <button className='btn'>Search</button>
            </div>
          </div>
      </footer>
      </div>
    </React.Fragment>
  );
}

export default Footer;