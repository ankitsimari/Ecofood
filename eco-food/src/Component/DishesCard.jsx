import styled from '@emotion/styled'
import React from 'react'
import {FaFilter} from 'react-icons/fa'

export default function DishesCard({name}) {
  return (
<DIV>

    <div className='shadow rounded'>
   <FaFilter className="bomb fs-2"/>
    <h6>{name}</h6>
    </div>
</DIV>
  )
}


const DIV = styled.div`

div{

    width: 90px;
    height: 100px;
    margin: 10px;
    display: grid;
    place-items: center;
    background-color:white ;
    /* background-color:#DC3545 ; */
}
div:hover{
    background-color:#DC3545 ;
    color: white;
}


     .bomb{
        background-color: #DC3545;
        color: white;
        border-radius: 50%;
        padding: 5px;
    }
    div:hover .bomb{
        background-color: white;
        color: #DC3545;
        border-radius: 50%;
        padding: 5px;
    }
`