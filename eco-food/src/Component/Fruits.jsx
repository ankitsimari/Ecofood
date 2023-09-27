import React from 'react'
import FruitsCard from './FruitsCard'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export default function Fruits() {
  return (
    <div className='mb-5' >
      <span  className='d-flex justify-content-between mb-5 '>

        <h3 className='ms-lg-5 ps-lg-4 '>Fresh Fruits For You</h3>
        <Link className='me-lg-5 pe-lg-4 text-danger fw-bold  mt-3 text-decoration-none' to="/">Sell more item</Link>
      </span>
        <div className='d-flex justify-content-center flex-wrap'>
        <FruitsCard/>
        <FruitsCard/>
        <FruitsCard/>
        <FruitsCard/>
        </div>
    </div>
  )
}


// const DIV = styled.div`
//     h3{
//         margin: 0;
//     }
// `