// import React, {useState, useEffect} from 'react';
import React from 'react';
import Signin from './components/signin';
import Signup from './components/signup';

const Dars8 = () => {
  // const [count, setCount] = useState(0)
  // const [calculator, setCalculator] = useState(0)
  // function  myRender() {
  //   setCount(count + 1)
  // }
  // useEffect(
  //   function () {
      // setInterval(() => {
      //   myRender()
      // }, 1000 );
    // }
  // )
  // useEffect(() => {
  //   setCalculator(() => count * 2)
  // },
  // [count]
  // )
  return (
    <React.Fragment>
      {/* <h1>Render boldi {count} marotaba</h1>
      <button onClick={() => setCount((c) => c - 1)}>Count-</button>
      <button onClick={() => setCount((c) => c + 1)}>Count+</button>
      <h1>Calculator: {calculator}</h1> */}
      <Signin/>
      <Signup/>
    </React.Fragment>
  );
}

export default Dars8;