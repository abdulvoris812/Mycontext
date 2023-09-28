import React from 'react';
import "./style.scss";
import Logo from './images/Logo.svg';
import Burger from './images/burger.svg';
import HeroImg1 from './images/hero-img.svg';
import HeroImg2 from './images/404.svg';

const Dars3 = () => {
  return (
    <React.Fragment>
      {/* <svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        className="svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0.238361 0L0 0.950266L0.476832 1.06889L3.78811 1.89384L5.39405 4.29358L8.80452 14.4868L6.79204 18.4969H7.76575C7.64841 18.7338 7.58741 18.9945 7.58747 19.2587C7.58747 20.2146 8.3758 21 9.33531 21C10.2948 21 11.0831 20.2146 11.0831 19.2587C11.0831 18.9861 11.0188 18.7275 10.9049 18.4969H16.5049C16.3876 18.7338 16.3266 18.9945 16.3267 19.2587C16.3267 20.2146 17.115 21 18.0745 21C19.034 21 19.8223 20.2146 19.8223 19.2587C19.8223 18.9861 19.758 18.7275 19.6441 18.4969H20.3139V17.5174H8.38285L9.63911 15.0142H20.1766L24 3.58688H6.10269L4.39548 1.03537L0.715357 0.118844L0.238361 0ZM6.52173 4.56626H11.4655V7.0694H7.35927L6.52173 4.56626ZM12.4486 4.56626H16.709V7.0694H12.4486V4.56626ZM17.6922 4.56626H22.6359L21.7984 7.0694H17.6922V4.56626ZM7.68688 8.04889H11.4655V10.552H8.52442L7.68688 8.04889ZM12.4486 8.04889H16.709V10.552H12.4486V8.04889ZM17.6922 8.04889H21.4708L20.6332 10.552H17.6922V8.04889ZM8.85214 11.5315H11.4655V14.0346H9.68958L8.85214 11.5315ZM12.4486 11.5315H16.709V14.0346H12.4486V11.5315ZM17.6922 11.5315H20.3055L19.4681 14.0346H17.6922V11.5315ZM9.33531 18.4968C9.76353 18.4968 10.1 18.832 10.1 19.2586C10.1 19.6852 9.76353 20.0204 9.33531 20.0204C8.90709 20.0204 8.57063 19.6852 8.57063 19.2586C8.57063 18.832 8.90709 18.4968 9.33531 18.4968ZM18.0745 18.4968C18.5027 18.4968 18.8392 18.832 18.8392 19.2586C18.8392 19.6852 18.5027 20.0204 18.0745 20.0204C17.6463 20.0204 17.3098 19.6852 17.3098 19.2586C17.3098 18.832 17.6463 18.4968 18.0745 18.4968Z" fill="black"/>
      </svg> */}
      <header>
        <div className="container">
          <div className="header-inner">
            <a href="../../../index.html">
              <img src = {Logo} alt="logo" className='logo'/>
            </a>
            <ul className='nav-list'>
              <li className='nav-item'>
                <a href="#">Home</a>
              </li>
              <li className='nav-item'>
                <a href="#">About</a>
              </li>
              <li className='nav-item'>
                <a href="#">Products </a>
              </li>
              <li className='nav-item'>
                <a href="#">Contacts</a>
              </li>
            </ul>
            <img src={Burger} alt="burger" className='burger'/>
          </div>
        </div>
      </header>

      <main>
        <div className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-box">
                <h1 className='title'>Ooops...</h1>
                <h1 className='title2'>Page Not Found</h1>
                <p className='text'>
                Sorry. the content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link. 
                </p>
                <button className='btn'>Go Back</button>
              </div>
              <img src={HeroImg1} alt="hero" className='hero-img'/>
              <img src={HeroImg2} alt="404" className='hero-img2'/>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Dars3;