import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import About from './About'
import Order from './Order'
import ProductInfo from '../Component/Sagar/ProductInfo'
import { Login } from '../Component/Hemanth/Login'
import PrivateRoutes from './PrivateRoutes'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/order' element={
              <PrivateRoutes>
                <Order/>
              </PrivateRoutes>
            }/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/singlePage/:id' element={<ProductInfo/>}/>

        </Routes>
    </div>
  )
}
