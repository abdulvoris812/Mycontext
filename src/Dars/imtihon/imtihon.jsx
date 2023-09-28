import { useState } from "react";
import React from 'react';
import "./style/style.css"

const Imtihon = () => { 
  const [value, setValue] = useState(true)
  function handleClick() {
		setValue(!value);
  }
  return (
    <React.Fragment>
      <div className={value ? "wrapper" : "wrapper2"}>
        <div className={value ? "child" : "child2"}></div>
      </div>
      <button className="btn" onClick={handleClick}>Change</button>
    </React.Fragment>
  );
}

export default Imtihon;