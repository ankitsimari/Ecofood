import React from 'react'
import DishesCard from './DishesCard'

export default function Filter() {

  return (
    <div >
            <div className='d-flex justify-content-center'>
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
