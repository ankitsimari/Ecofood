import styled from '@emotion/styled'
import React from 'react'
import {FaInstagram, FaMailBulk, FaTwitter, FaWhatsapp} from 'react-icons/fa'

export default function Footer() {
  return (


    <DIV className='container-fluid themeBg'>
        <div className="row ">
            <div className="col-md-8">
                <h5 className='text-white'>@All Rights Belongs to Masai School</h5>
            </div>
            <div className="col-md-4">
            <FaTwitter className='fs-2 text-white m-2'/>
            <FaWhatsapp className='fs-2 text-white m-2'/>
            <FaInstagram className='fs-2 text-white m-2'/>
            <FaMailBulk className='fs-2 text-white m-2'/>
            </div>
        </div>
    </DIV>

  )
}

const DIV = styled.div`
    height: 120px;
    .col-md-4{
        height: 120px !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .col-md-8{
        display: grid;
        place-content: center;
    }
`