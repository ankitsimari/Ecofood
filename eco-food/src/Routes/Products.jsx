import React from 'react'
import ProductList from '../Component/ProductList'
import ProductCard from '../Component/ProductCard'
import pine_img from "../Image/f6.png"

export default function Products() {
  return (
    <div>
        <h2 className='text-center m-5'>Products Page</h2>
        <ProductCard title={"Ankit"} price={200} category={"ramPuri"}  image={pine_img} />
        <ProductList/>
    </div>
  )
}
