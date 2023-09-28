import React from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import Add from './add'
import Edit from './edit'
import Singlepage from './singlepage'
import { Route, Routes} from 'react-router-dom'

const Amaliy = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/*' element={<LoginPage/>}/>
        <Route path='/homepage/:category' element={<HomePage/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/singlepage' element={<Singlepage/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default Amaliy;