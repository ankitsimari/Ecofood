import React from 'react'
import Button from '@mui/material/Button';
import styled from '@emotion/styled';


export default function ButtonComponent({name}) {
  return (
    <DIV>
  <Button className='button' variant="contained">{name}</Button>
     </DIV>
  )
}


const DIV = styled.div`
  Button{
    background-color: #ff6f0d;
    color: #f4f4f4;
    font-weight: bold;
    border: 1px solid #ff6f0d;
  }
  Button:hover{
    background-color:#f4f4f4 ;
    color: #ff6f0d;
    font-weight: bold;
    
  }
`