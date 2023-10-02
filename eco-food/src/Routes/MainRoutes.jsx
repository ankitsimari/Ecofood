import React from 'react'
import ProductsRoute from './ProductsRoute'
import AdminRoutes from '../AdminPage/AdminRoutes'

export default function MainRoutes() {
  let Admin = false;
  return (
    <div>
      {Admin?  <AdminRoutes/>:  <ProductsRoute/>}
      
      
    </div>
  )
}
