import React from 'react'
import strawberry_img from "../Image/f1.png"
import styled from '@emotion/styled'
import {FaCartPlus} from 'react-icons/fa'

export default function FruitsCard() {
  return (
   <DIV>

    <div className='shadow rounded p-2'>
        <img src={strawberry_img} alt="" />
  <div className='text '>
      <FaCartPlus className='text-danger fs-3 float-end mt-2 pe-1 me-2'/>
        <h4 className='text-end me-2'>strawberry</h4>
        <p className='text-end me-2 mb-1'>dummy</p>
        <h6 className='text-end me-2 pe-1'><span>₹</span> 300</h6>
  </div>
      
    </div>
   </DIV>

    
  )
}


const DIV = styled.div`



.shadow{
  width: 250px;
  height: 140px;
  margin: 20px ;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.3s;
}

.shadow:hover{
  transform:scale(1.1);
}
img {
    margin-top: -15px;
    width: 120px;
    border-radius: 50%;
   
  }
  span{
    color: red;
    font-weight: bolder;
  }
  h4,h6,p{
    margin-top: 0  !important;
    margin-bottom:0;
}
  h4{
    /* margin-left:-20px !important; */
    font-size: 20px;
    /* padding-right:20px; */
    margin-top: 45px !important;
    
  }


  .text{
    float: right;
  }

`