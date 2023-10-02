import React,{useEffect,useState} from 'react';
import { styled } from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComponent from '../Button';
import axios from 'axios';
import { loginOnload, productOnload } from '../../Redux/AuthReducer/action';
import Swal from 'sweetalert2';

function ProductInfo({title,about,rating,price}) {

    const [cartData,setCartData]=useState()
    const [dataPro,setData]=useState()
    const navigate = useNavigate();
    const {id} =  useParams();
     const store=useSelector(store=>store.AuthReducer)
     const isAuth=useSelector(store=>store.AuthReducer.isAuth)
    const data = useSelector(store=>store.ProductsReducer.products);
    const logId = useSelector(store=>store.AuthReducer.loginUser.id);
    const order = useSelector(store=>store.AuthReducer.loginUser.Order);
    const dispatch=useDispatch();
    const[update,setupdate]=useState(false)
    console.log(order,"orderin")

  let maniData;
    if(dataPro!==undefined){

        const main = dataPro.filter((e=>e.id==id))
        
        maniData = main[0]
        console.log(maniData,"dataSigCart");
    }

    // main data is singleData
    
  
   const statarr = new Array(5).fill(0).map((e)=> <BsStarFill key={Math.random()} style={{color:"Orange"}}/>) 

   const handleCart=()=>{
  console.log(isAuth,"isAuth")

   if(isAuth===false){
       console.log("navigate")
       navigate("/login");
   }
   else{

    console.log(store,"store")
    //make id dynamic with params()
    console.log(logId,order,"order")
    console.log(maniData,"maniData")

    let dat=order.filter((e,i)=>{return e.id==maniData.id})
    console.log(dat,"dat")
   
    if(dat.length==1){
       console.log("already present")
       Swal.fire({
        title: 'alredy present ',
        text: 'product added already in cart',
        icon: 'error',
        confirmButtonColor: '#DC3545'
      })
    }else{
        console.log("add cart")

        axios.patch(`https://grocryapi.onrender.com/LoggedIn/${logId}`,{
        Order:[...order,maniData]
         })
        .then((res)=>{console.log(res,"success message newdata")
        
            
        console.log("add cart message")
         Swal.fire({
             title: 'cart +1',
             text: 'product added Successfully!',
             icon: 'success', // Set the icon to 'success'
             confirmButtonColor: '#DC3545'
           });

          dispatch(loginOnload(logId))
           })
           .catch((err)=>{console.log("log",err)})
        }

    }

     setupdate(prev=>!prev)

     }
    //user api request

    // axios.patch(`https://grocryapi.onrender.com/Users/1`,{
    //     Order:[...cartData,maniData]
    // })
    // .then((res)=>{console.log(res)})

   




   useEffect(()=>{
    //make id dynamic with params()
   axios.get("https://grocryapi.onrender.com/Users/1")
   .then((res)=>{console.log(res.data.Order,"resOrder")
    const arr=res.data.Order
    //arr.push(res.data.Order)
    setCartData(arr)
   })
   axios.get("https://grocryapi.onrender.com/Products")
   .then((res)=>{console.log(res.data,"rproduct")
    const arr=res.data
    //arr.push(res.data.Order)
    setData(arr)
   })

   dispatch(productOnload)
   dispatch(loginOnload(logId))
   console.log("getData user id 1")
   },[])


//    useEffect(()=>{
//     axios.get(`https://grocryapi.onrender.com/Products/${id}`)
//    .then((res)=>{console.log(res.data,"rsingleData")
//     const arr=[]
//     arr.push(res.data)
//     setData(arr)
//    })
//    },[])


console.log("prodcutinfo")

    return (
       <DIV>

        <Link to={"/cartPage"}>Cart</Link>
           {maniData && <h1>{maniData.title}</h1>}

            <div className='rating'>{statarr}</div> 
            <h4>48 reviews | 75k unit Sold</h4>
            <p>{maniData?.about}</p>
            <span className='amountSpan' >MRP: <span className='amount'>₹ {maniData?.price+1000}</span ></span> 
            <div className='paySave'>
                <div>
                    <span className='pay'>You Pay: ₹ {maniData?.price} </span>
                 </div> 
                 <div className='save'>    
                       <span>(SAVE ₹ 1000)</span>
                </div>
            </div>    
            <span className='tax'>(inclusive of all taxes)</span>
       <ButtonComponent  onClick={handleCart} name="Add to cart" />
        </DIV>
    );
}

export default ProductInfo;


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
        color: black;
        font-size: 50px;
    }

    p{
        line-height: 1.5;
    }

   span{
    color: black;
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
    margin-top: 5px;
    margin-bottom: 15px;
   }

   .tax + div button{
    border-radius: 2px;
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