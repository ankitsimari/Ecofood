import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';

const SimilarProduct = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the factor as needed for sensitivity
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };


    return (
        <DIV>
           <div className='gallary' 
         ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}>
               <div className='gallary_item'>
                <img src="https://opengameart.org/sites/default/files/card%20back%20red_0.png" alt="" className='gallary_image' />
               </div>
               <div className='gallary_item'>
                <img src="https://opengameart.org/sites/default/files/card%20back%20red_0.png" alt="" className='gallary_image' />
               </div>
               <div className='gallary_item'>
                <img src="https://opengameart.org/sites/default/files/card%20back%20red_0.png" alt="" className='gallary_image' />
               </div>
               <div className='gallary_item'>
                <img src="https://opengameart.org/sites/default/files/card%20back%20red_0.png" alt="" className='gallary_image' />
               </div>
               <div className='gallary_item'>
                <img src="https://opengameart.org/sites/default/files/card%20back%20red_0.png" alt="" className='gallary_image' />
               </div>
               <div className='gallary_item'>
                <img src="https://opengameart.org/sites/default/files/card%20back%20red_0.png" alt="" className='gallary_image' />
               </div>
               <div className='gallary_item'>
                <img src="https://opengameart.org/sites/default/files/card%20back%20red_0.png" alt="" className='gallary_image' />
               </div>
               <div className='gallary_item'>
                <img src="https://opengameart.org/sites/default/files/card%20back%20red_0.png" alt="" className='gallary_image' />
               </div>
               <div className='gallary_item'>
                <img src="https://opengameart.org/sites/default/files/card%20back%20red_0.png" alt="" className='gallary_image' />
               </div>
               <div className='gallary_item'>
                <img src="https://opengameart.org/sites/default/files/card%20back%20red_0.png" alt="" className='gallary_image' />
               </div>

           </div>
        </DIV>
    );
};

export default SimilarProduct;



const DIV = styled.div`
    
   .gallary{
    width: 100%;
    height: 300px;
     display: flex;
     align-items: center;
     column-gap: 20px;
     overflow-x: auto;
     scroll-snap-type: x ;
     
   } 

   .gallary_item{
    height: 100%;
    scroll-snap-align: center;
    min-width: 30%;
   }

   .gallary_image{
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
`