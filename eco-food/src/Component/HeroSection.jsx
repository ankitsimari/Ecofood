import React from 'react'
import ButtonComponent from './Button'
import styled from '@emotion/styled'
import heroImg from "../Image/hero.png"

export default function HeroSection() {
  return (
    <DIV className='container '>
        <div className="row">
            <div className="col-md-6 p-lg-5 mt-5 order-2 order-lg-1 text">
                <h1 className='my-2'>We Deliver Only <span className='themeColor'>FRESH FOOD</span></h1>
                <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, totam. Porro maiores ratione quia, voluptas quas obcaecati id fuga quos</p>
                <ButtonComponent name="Order Now  >"/>
            </div>
            <div className="col-md-6 order-1 order-lg-2">
             <img className='w-100' src={heroImg} alt="" />
            </div>
        </div>

    </DIV>
  )
}


const DIV = styled.div`
    h1{
        font-size: 50px;
    }
.text{
    margin-top: 160px;
}
`