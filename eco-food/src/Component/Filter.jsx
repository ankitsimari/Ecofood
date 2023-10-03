import React, { useEffect } from 'react'
import DishesCard from './DishesCard'
import AOS from "aos"
import 'aos/dist/aos.css'

export default function Filter() {
  useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  return (
    <div className='filter' >
            <div className='d-flex justify-content-center' data-aos="fade-right">
        <DishesCard  name={"Fruits"} value="Fruits"  />
        <DishesCard  name={"Vegetables"} value="Vegetables"  />
        <DishesCard  name={"Seafood"} value="Seafood" />
        <DishesCard  name={"Fish"} value="Fish" />
        <DishesCard  name={"Mutton"} value="Mutton" />
        <DishesCard  name={"Chicken"} value="" />
    </div>
    </div>
  )
}
