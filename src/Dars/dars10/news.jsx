// import React from 'react'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div>
      <h1>news</h1>
      <Link to={"/news/1"}>Yanglik1</Link>  <br />
      <Link to={"/news/2"}>Yanglik2</Link>  <br />
      <Link to={"/news/3"}>Yanglik3</Link>  <br />
      <Link to={"/news/4"}>Yanglik4</Link>  <br />
    </div>
  )
}

export default News
