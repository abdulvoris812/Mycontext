import React, {useRef, useState} from 'react';
import './style/style.css';

const Dars7 = () => {
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
      alert("Hush kelibsiz admin❕")
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
  // console.log(value)
  return (
    <React.Fragment>
      {/* <input type="text" ref={inputElement} onChange={handleChange}/> */}
      {/* <button onClick={inputFocus}>Focus</button>  */}
      <div>
        <input type="text" ref={inputElement} onChange={handleChange} placeholder='Login: admin'/><br /><br />
        <input type="password" ref={inputElement2} onChange={handleChange2} placeholder='Parol: 1234'/><br /><br />
        <button onClick={inputFocus}>Tekshirish</button>
      </div>
    </React.Fragment>
  )
}

export default Dars7;