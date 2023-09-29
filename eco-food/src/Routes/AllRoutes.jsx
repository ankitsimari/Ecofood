import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import About from './About'
import Order from './Order'



export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/order' element={<Order/>}/>
        </Routes>
    </div>
  )
}
