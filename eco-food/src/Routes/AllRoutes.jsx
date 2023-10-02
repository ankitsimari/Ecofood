import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Order from './Order'
import { Login } from '../Component/Hemanth/Login'
import PrivateRoutes from './PrivateRoutes'
import SingleCardPage from '../Component/Sagar/SingleCardPage'
import { SignUp } from '../Component/Hemanth/Signup'
import ProductList from '../Component/ProductList'
import { CartPage } from '../Component/Hemanth/CartPage'





export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/product' element={<Products/>}/> */}
            <Route path='/product' element={<ProductList/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/order' element={
              <PrivateRoutes>
                <Order/>
              </PrivateRoutes>
            }/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cartPage' element={
            <PrivateRoutes>
              <CartPage/>
          </PrivateRoutes>
            }/>
            <Route path='/signup' element={<SignUp/>}/>


            


        </Routes>
    </div>
  )
}
