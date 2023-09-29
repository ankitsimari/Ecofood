


import React,{useEffect,useState} from 'react';
import { styled } from 'styled-components';
import { BsStarFill } from 'react-icons/bs';

function ProductInfo(props) {
  
   const statarr = new Array(5).fill(0).map((e)=> <BsStarFill style={{color:"Orange"}}/>) 

    return (
       <DIV>
            <h1>Product_Name</h1>
            <div className='rating'>{statarr}</div> 
            <h4>48 reviews | 75k unit Sold</h4>
            <p>The perfect morning routine. 63+ vitamins, minerals, adaptogens, probiotics, berries, and greens for a happy and healthy life!</p>
            <span className='amountSpan' >MRP: <span className='amount'>₹ 3000</span ></span> 
            <div className='paySave'>
                <div>
                    <span className='pay'>You Pay: ₹ 2000 </span>
                 </div> 
                 <div className='save'>    
                       <span>(SAVE ₹ 290)</span>
                  
                </div>
            </div>    
            <span className='tax'>(inclusive of all taxes)</span>
        </DIV>
    );
}

export default ProductInfo;


// //{
//     "title": "Pineapple",
//     "price": 2.99,
//     "category": "Fruits",
//     "ingredients": "Pineapple",
//     "about": "Juicy and tropical pineapple, great for fresh fruit salads.",
//     "rating": 4.6,
//     "image": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
//   }



 const DIV = styled.div`
    display:flex;
    flex-Direction:column;
    text-Align:start;
    width:400px;
    margin:0px;
    padding-top: 30px;

    .rating{
        display:flex;
        gap:5px;
        font-size:18px;
        margin-top:15px;
    }

    h1,h4,p{
        margin:0px;
        margin-top: 15px;
    }

    h1{
        color: #004747;
        font-size: 50px;
    }

    p{
        line-height: 1.5;
    }

   span{
    color: #004747;
   }
  
   .paySave{
    display: flex;
    flex-direction: row;
    align-content: center;
    gap:10px;
    margin-top: 15px;
   }
   
   .amountSpan{
    font-Size:22px;
    color: black;
    margin-top: 15px;
   }
   .amount{
    text-Decoration:2px solid;
    text-Decoration-Line:line-through;
    text-Decoration-Color:#e37666;
    color: black;
   }

   .pay{
     font-size: 26px;
     font-weight: 700;
   }

   .save{
    display: flex;
    align-items: center;
   }
   .save>span{
    font-size: 20px;
    font-weight: 500;
    color:#e37666;
   }

   .tax{
    font-size: 20px;
    font-weight: 500;
    margin-top: 15px;
   }


   @media screen and (min-width: 350px) and (max-width:550px){
    display:flex;
    flex-Direction:column;
    text-Align:start;
    width:400px;
    margin:0px;
    padding-left: 40px;
    padding-top: 30px;
    .rating{
        display:flex;
        gap:3px;
        font-size:13px;
        margin-top:3px;
    }

    h1,h4,p{
        margin:0px;
        margin-top: 4px;
    }

    h1{
        color: #004747;
        font-size: 15px;
    }

    h4{
        font-size: 10px;
    }

    p{
        line-height: 1.5;
        font-size: 9px;
    }

   span{
    color: #004747;
   }
  
   .paySave{
    display: flex;
    flex-direction: column;
    align-content: center;
    gap:2px;
    margin-top: 0px;
   }
   
   .amountSpan{
    font-Size:10px;
    color: black;
    margin-top: 3px;
   }
   .amount{
    text-Decoration:2px solid;
    text-Decoration-Line:line-through;
    text-Decoration-Color:#e37666;
    color: black;
   }

   .pay{
     font-size: 12px;
     font-weight: 700;
     margin-bottom: 0px;
   }

   .save{
    display: flex;
    align-items: center;
   }
   .save>span{
    font-size: 11px;
    font-weight: 500;
    color:#e37666;
   }

   .tax{
    font-size: 10px;
    font-weight: 500;
    margin-top: 2px;
   }
   }

   @media screen and (min-width: 551px) and (max-width:750px){
    display:flex;
    flex-Direction:column;
    text-Align:start;
    width:400px;
    margin:0px;
    padding-left: 40px;
    padding-top: 30px;
    .rating{
        display:flex;
        gap:3px;
        font-size:13px;
        margin-top:3px;
    }

    h1,h4,p{
        margin:0px;
        margin-top: 4px;
    }

    h1{
        color: #004747;
        font-size: 17px;
    }

    h4{
        font-size: 13px;
    }

    p{
        line-height: 1.5;
        font-size: 11px;
    }

   span{
    color: #004747;
   }
  
   .paySave{
    display: flex;
    flex-direction: column;
    align-content: center;
    gap:2px;
    margin-top: 3px;
   }
   
   .amountSpan{
    font-Size:13px;
    color: black;
    margin-top: 4px;
   }
   .amount{
    text-Decoration:2px solid;
    text-Decoration-Line:line-through;
    text-Decoration-Color:#e37666;
    color: black;
   }

   .pay{
     font-size: 14px;
     font-weight: 700;
     margin-bottom: 3px;
   }

   .save{
    display: flex;
    align-items: center;
   }
   .save>span{
    font-size: 13px;
    font-weight: 500;
    color:#e37666;
   }

   .tax{
    font-size: 12px;
    font-weight: 500;
    margin-top: 3px;
   }
   }

   @media screen and (min-width: 601px) and (max-width:750px){
    display:flex;
    flex-Direction:column;
    text-Align:start;
    width:370px;
    margin:0px;
    padding-left: 40px;
    padding-top: 30px;
    .rating{
        display:flex;
        gap:3px;
        font-size:14px;
        margin-top:4px;
    }

    h1,h4,p{
        margin:0px;
        margin-top: 5px;
    }

    h1{
        color: #004747;
        font-size: 19px;
    }

    h4{
        font-size: 14px;
    }

    p{
        line-height: 1.5;
        font-size: 12px;
    }

   span{
    color: #004747;
   }
  
   .paySave{
    display: flex;
    flex-direction: row;
    align-content: center;
    gap:2px;
    margin-top: 3px;
   }
   
   .amountSpan{
    font-Size:14px;
    color: black;
    margin-top: 5px;
   }
   .amount{
    text-Decoration:2px solid;
    text-Decoration-Line:line-through;
    text-Decoration-Color:#e37666;
    color: black;
   }

   .pay{
     font-size: 15px;
     font-weight: 700;
     margin-bottom: 4px;
   }

   .save{
    display: flex;
    align-items: center;
   }
   .save>span{
    font-size: 14px;
    font-weight: 500;
    color:#e37666;
   }

   .tax{
    font-size: 13px;
    font-weight: 500;
    margin-top: 3px;
   }
   }

   @media screen and (min-width: 751px) and (max-width:900px){
    display:flex;
    flex-Direction:column;
    text-Align:start;
    width:370px;
    margin:0px;
    padding-left: 40px;
    padding-top: 30px;
    .rating{
        display:flex;
        gap:3px;
        font-size:14px;
        margin-top:5px;
    }

    h1,h4,p{
        margin:0px;
        margin-top: 5px;
    }

    h1{
        color: #004747;
        font-size: 25px;
    }

    h4{
        font-size: 16px;
    }

    p{
        line-height: 1.5;
        font-size: 14px;
    }

   span{
    color: #004747;
   }
  
   .paySave{
    display: flex;
    flex-direction: row;
    align-content: center;
    gap:2px;
    margin-top: 3px;
   }
   
   .amountSpan{
    font-Size:16px;
    color: black;
    margin-top: 5px;
   }
   .amount{
    text-Decoration:2px solid;
    text-Decoration-Line:line-through;
    text-Decoration-Color:#e37666;
    color: black;
   }

   .pay{
     font-size: 18px;
     font-weight: 700;
     margin-bottom: 4px;
   }

   .save{
    display: flex;
    align-items: center;
   }
   .save>span{
    font-size: 17px;
    font-weight: 500;
    color:#e37666;
   }

   .tax{
    font-size: 16px;
    font-weight: 500;
    margin-top: 3px;
   }
   }

   @media screen and (min-width: 901px) and (max-width:1200px){
    display:flex;
    flex-Direction:column;
    text-Align:start;
    width:370px;
    margin:0px;
    padding-left: 40px;
    padding-top: 30px;
    .rating{
        display:flex;
        gap:3px;
        font-size:16px;
        margin-top:5px;
    }

    h1,h4,p{
        margin:0px;
        margin-top: 5px;
    }

    h1{
        color: #004747;
        font-size: 30px;
    }

    h4{
        font-size: 18px;
    }

    p{
        line-height: 1.5;
        font-size: 16px;
    }

   span{
    color: #004747;
   }
  
   .paySave{
    display: flex;
    flex-direction: row;
    align-content: center;
    gap:2px;
    margin-top: 3px;
   }
   
   .amountSpan{
    font-Size:18px;
    color: black;
    margin-top: 5px;
   }
   .amount{
    text-Decoration:2px solid;
    text-Decoration-Line:line-through;
    text-Decoration-Color:#e37666;
    color: black;
   }

   .pay{
     font-size: 20px;
     font-weight: 700;
     margin-bottom: 4px;
   }

   .save{
    display: flex;
    align-items: center;
   }
   .save>span{
    font-size: 19px;
    font-weight: 500;
    color:#e37666;
   }

   .tax{
    font-size: 17px;
    font-weight: 500;
    margin-top: 3px;
   }
   }
 `
