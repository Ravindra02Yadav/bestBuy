import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from '../pages/Cart'
import DealsofDay from '../pages/DealsofDay'
import Home from '../pages/Home'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/DealsofDay' element={<DealsofDay/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        
        </Routes>
    </div>
  )
}

export default AllRoutes