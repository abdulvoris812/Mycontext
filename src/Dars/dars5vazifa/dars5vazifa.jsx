import React from 'react';
import Card from './components/card'
import './style/style.css'
import C1 from './img/c1.svg'
import C2 from './img/c2.svg'
import C3 from './img/c3.svg'
import D1 from './img/d1.svg'
import D2 from './img/d2.svg'
import D3 from './img/d3.svg'
import D4 from './img/d4.svg'
import D5 from './img/d5.svg'
import D6 from './img/d6.svg'
import In from './img/in.svg'
import Tw from './img/twitter.svg'
import Fc from './img/facebook.svg'

const Vazifa = () => {
  let data = [
    {
      img1: C1,
      img2: D1,
      title: "Name",
      text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      icon1: In,
      icon2: Tw,
      icon3: Fc
    },
    {
      img1: C2,
      img2: D2,
      title: "Name",
      text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      icon1: In,
      icon2: Tw,
      icon3: Fc
    },
    {
      img1: C3,
      img2: D3,
      title: "Name",
      text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      icon1: In,
      icon2: Tw,
      icon3: Fc
    },
    {
      img1: C3,
      img2: D4,
      title: "Name",
      text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      icon1: In,
      icon2: Tw,
      icon3: Fc
    },
    {
      img1: C1,
      img2: D5,
      title: "Name",
      text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      icon1: In,
      icon2: Tw,
      icon3: Fc
    },
    {
      img1: C2,
      img2: D6,
      title: "Name",
      text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      icon1: In,
      icon2: Tw,
      icon3: Fc
    },
  ]
  return (
    <React.Fragment>
      <div className="grid">
        {data.map((item, index) => {
          return (
            <Card data={item} key={index}/>
          )
        })}
      </div>
    </React.Fragment>
  );
}

export default Vazifa;