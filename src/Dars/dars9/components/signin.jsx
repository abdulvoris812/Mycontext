import React from 'react';
import Tw from "../images/social media.svg"
import { Routes, Route, Link} from 'react-router-dom';
import "../style/style.css"
import Sup from "./signup";

const Signin = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="lbox">
          <h1 className='ltitle'>Welcome Back!</h1>
          <p className='ltext'>To keep connected with us plase <br /> login with your personal info</p>
          <Link to={"/contact"}>
            <button className='lbtn'>SIGN IN</button>
          </Link>
        </div>
        <div className="rbox">
          <h1 className='rtitle'>Create Account</h1>
          <img className='rimg' src={Tw}/>
          <p className='rtext'>or use your email for registration</p>
          <div className="ibox">
            <input className='rinput' type="text" placeholder='Name'/>
            <input className='rinput' type="text" placeholder='Email'/>
            <input className='rinput' type="text" placeholder='Password'/>
          </div>
          <button className="rbtn">SIGN UP</button>
        </div>
      </div>
      <Routes>
        
        <Route path='contact' element={<Sup/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default Signin;