import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, NavLink, Link } from 'react-router-dom'
// import { data } from './Data/Data';

const HomePage = () => {
  let params = useParams()
  console.log(params);
  let url = "https://65018bd4736d26322f5bdf64.mockapi.io/sport"

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data)
    })
  }, [])
  return (
    <React.Fragment>
      <div className="navbar">
        <NavLink to={"/homepage/all"}>Hammasi</NavLink>
        <NavLink to={"/homepage/sport"}>Sport</NavLink>
        <NavLink to={"/homepage/kino"}>Kino</NavLink>
        <NavLink to={"/add"}>Add</NavLink>
      </div>
      <div className="container">
        <div  className="card-wrapper">
          {
            params.category == "all"
            ?data.map((item) => {
                return (
                  <Link to={"/page/"+item.id} className="card" key={item.id}>
                    <h3 className="card-title">{item.title}</h3>
                    <img src={item.img} className='card-img'/>
                    <p className='card-text'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsam laborum dolore aspernatur vel, doloribus odit nesciunt excepturi mollitia iusto dolor corrupti.</span><br /> Temporibus ut quaerat fuga enim officia reiciendis eaque, ipsum eum nulla quae! Suscipit eos nulla nemo nam aspernatur culpa tenetur blanditiis, nisi tempora laudantium, vitae placeat expedita modi architecto distinctio, totam ad sint labore incidunt iusto dolore eius inventore? Nulla, dicta quibusdam. Esse ducimus quis dolor, reprehenderit alias dolorem atque ipsam velit, cupiditate vitae quam rerum, eaque perferendis!</p>
                  </Link>
                )
            })
            :data.map((item) => {
              if (item.category.toLowerCase().includes(params.category.toLowerCase())) {
                return (
                  <Link to={"/page/"+item.id} className="card" key={item.id}>
                    <h3 className="card-title">{item.title}</h3>
                    <img src={item.img} className='card-img'/>
                    <p className='card-text'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsam laborum dolore aspernatur vel, doloribus odit nesciunt excepturi mollitia iusto dolor corrupti.</span><br /> Temporibus ut quaerat fuga enim officia reiciendis eaque, ipsum eum nulla quae! Suscipit eos nulla nemo nam aspernatur culpa tenetur blanditiis, nisi tempora laudantium, vitae placeat expedita modi architecto distinctio, totam ad sint labore incidunt iusto dolore eius inventore? Nulla, dicta quibusdam. Esse ducimus quis dolor, reprehenderit alias dolorem atque ipsam velit, cupiditate vitae quam rerum, eaque perferendis!</p>
                  </Link>
                )
              }
            })
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomePage;