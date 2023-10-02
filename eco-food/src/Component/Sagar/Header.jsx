import React from 'react';

import { styled } from 'styled-components';
import ProductInfo from './ProductInfo';
import Slider from './Slider';


const Header = () => {


    return (
         <DIV>      
      <Slider/>
      <ProductInfo/>
      </DIV>
    );
};

export default Header;


const DIV = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 50px;
/* margin-top: 50px; */
DIV>div{
  margin: 0px;
}


@media screen and (min-width: 350px) and (max-width:550px){
display: flex;
flex-direction: row;
justify-content: space-around;
/* margin-top: 50px; */
height: 280px;
background-color:#DBF0EC;
DIV>div{
  margin: 0px;
}
}


`
