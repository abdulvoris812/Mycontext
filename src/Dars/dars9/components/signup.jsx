import React from 'react';
import Tw from "../images/social media.svg"
import { Routes, Route, Link} from 'react-router-dom';
import "../style/style.css"
import Sin from "./signin"

const Signup = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="rbox">
          <h1 className='rtitle'>Sign In to Your Account</h1>
          <img className='rimg' src={Tw}/>
          <p className='rtext'>oe use your email account</p>
          <div className="ibox">
            <input className='rinput' type="text" placeholder='Login'/>
            <input className='rinput' type="text" placeholder='Password'/>
          </div>
          <button className='rbtn'>SIGN IN</button>
        </div>
        <div className="lbox2">
          <h1 className='ltitle'>Hello Friend!</h1>
          <p className='ltext'>Enter your personal details and <br /> start your journey with us</p>
          <Link to={"/"}>
            <button className='lbtn'>SIGN UP</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path='contact' element={<Sin/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default Signup;