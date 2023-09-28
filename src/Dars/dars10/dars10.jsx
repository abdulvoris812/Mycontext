import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./home"
import SinglePage from './SinglePage';
import News from './news';

const Dars10 = () => {
  return (
    <React.Fragment>
      <div>
        <Link to={"/"}>Home </Link>
        <Link to={"/news"}> News</Link>
      </div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/news/:id' element={<SinglePage/>}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </React.Fragment>
  );
}

export default Dars10;