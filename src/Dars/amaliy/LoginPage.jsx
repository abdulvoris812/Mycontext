import React from 'react'
import LoginPageImg  from './img/Side-Background-Outer.png'
import './style/style.css'
import { useState, useRef } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './HomePage'

const LoginPage = () => {
  let navigate = useNavigate()
  const heandleGo = () => {
    navigate("/homepage/all")
  }

  let login = "admin"
  let password = 1234
  let inputElement = useRef()
  let inputElement2 = useRef()

  const [value, setValue] = useState("")
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const [value2, setValue2] = useState("")
  const handleChange2 = (e) => {
    setValue2(e.target.value)
  }
  
  const inputFocus = () => {
    console.log(inputElement.current.value)
    if (login == value && password == value2) {
      heandleGo()
    }else if (value == login){
      inputElement2.current.focus()
      alert("Parol noto'g'ri❌")
    }else if (value2 == password){
      inputElement.current.focus()
      alert("Login noto'g'ri❌")
    }else {
      inputElement.current.focus()
      alert("Login ham parol ham noto'g'ri❌")
    }
  }
  return (
    <React.Fragment>
      <div className="hero">
        <div className="container">
          <div className="hero-inner">
            <img src={LoginPageImg} className='img'/>
            <div className="hero-box">
              <h1 className='title'>Welcome</h1>
              <p className='text'>Let`s log you in quickly</p>
              <input  type="text" ref={inputElement} onChange={handleChange} placeholder='Login: admin' className='input'/> <br /><br />
              <input type="password" ref={inputElement2} onChange={handleChange2} placeholder='Parol: 1234' className='input'/> <br /><br />
              <button className='btn' onClick={inputFocus}>LOGIN</button>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/homepage/all' element={<HomePage/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default LoginPage;