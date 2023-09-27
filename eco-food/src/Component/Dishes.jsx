import React from 'react'
import DishesCard from './DishesCard'
import FruitsCard from './FruitsCard'
import {Link} from "react-router-dom"

export default function Dishes() {
  return (
    <div>
        <span className='d-flex justify-content-between'>
         <h3 className='ms-lg-5 ps-lg-4 my-3'>Our Fresh Dishes</h3>
            <Link className='me-lg-5 pe-lg-4 text-danger fw-bold mt-3 text-decoration-none' to="/">Sell more item</Link>
        </span>
    <div className='d-flex justify-content-center'>
        <DishesCard  name={"Fruits"}/>
        <DishesCard  name={"Curry"}/>
        <DishesCard  name={"IceCream"}/>
        <DishesCard  name={"Fish"}/>
        <DishesCard  name={"Drink"}/>
        <DishesCard  name={"Chicken"}/>
    </div>
    <div className='d-flex justify-content-center flex-wrap my-4'>
        <FruitsCard/>
        <FruitsCard/>
        <FruitsCard/>
        <FruitsCard/>
        </div>
    </div>
  )
}
