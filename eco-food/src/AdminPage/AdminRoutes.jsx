import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/AdminAbout'
import Comment from './pages/Comment'
import Analytics from './pages/Analytics'
import Product from './pages/AdminProducts'
import AdminProductList from './pages/AdminProductList'
import AdminProducts from './pages/AdminProducts'
import AdminAbout from './pages/AdminAbout'
import Sales from './pages/Sales'
import { AdminProductManage } from '../Component/Hemanth/AdminProductManage'
import { AdminAddProduct } from '../Component/Hemanth/AdminAddProduct'
import { AdminEditProduct } from '../Component/Hemanth/AdminEditProduct'

export default function AdminRoutes() {
  return (
    <div  style={{
      backgroundColor: "#f4f4f4",
      color: "black",
    }}  >
        
      <AdminSidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AdminAbout" element={<AdminAbout/>} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/AdminProduct" element={<AdminProducts/>} />
          <Route path="/AdminProductList" element={<AdminProductList />} />
          <Route path="/adminList" element={<AdminProductManage />} />
        <Route path="/addNewProduct" element={<AdminAddProduct />} />
        <Route path="/edit/:id" element={<AdminEditProduct/>} />
        </Routes>
      </AdminSidebar>
    </div>
  )
}
