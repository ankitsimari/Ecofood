import React from 'react'
import Hero from '../Component/Hero'
import Fruits from '../Component/Fruits'
import Dishes from '../Component/Dishes'
import { useSelector } from 'react-redux'
import Testimonial from '../Component/Testimonial'
import HeroSection from '../Component/HeroSection'
import Services from '../Component/services'

export default function Home() {
  const data = useSelector(store=>store);
  console.log(data)
  return (
    <div>
      
      <HeroSection/>
      <Services/>
      <Fruits/>
      <Dishes/>
      <Testimonial/>
    </div>
  )
}
