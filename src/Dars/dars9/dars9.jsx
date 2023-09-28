import React from 'react';
import { Routes, Route} from 'react-router-dom';
// import { Routes, Route, Link, NavLink} from 'react-router-dom';
import Sup from './components/signup';
import Sin from './components/signin';
import Admin from './components/admin';
import User from './components/user';

const Dars9 = () => {
  // const [count, setCount] = useState(0)
  // const handleCount = () => {
  //   setCount((count) => count + 1)
  // }
  return (
    <React.Fragment>
      {/* <div className='navbar'>
        <a href="/">home</a>
        <a href="/contact">contact</a>
      </div> */}
      {/* <div className='navbar'>
        <Link to={"/"}>
          <button className='lbtn'>SIGN IN</button>
        </Link>
        <Link to={"/contact"}>
          <button className='lbtn'>SIGN UP</button>
        </Link>
      </div> */}
      {/* <div>
        <button onClick={handleCount}>count</button>
        <h1>{count}</h1>
      </div> */}
      <Routes>
        <Route index element={<Sin/>}/>
        <Route path='contact' element={<Sup/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='user' element={<User/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default Dars9;