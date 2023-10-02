import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';
import { editAdminProduct } from '../../Redux/ProductReducer/action';

export const AdminEditProduct=()=>{
    const {id}=useParams();
    // const[data,setData]=useState({})
    const navigate=useNavigate()
     const dispatch=useDispatch()
     const products = useSelector((store) => store.ProductsReducer.adminProducts);
     const[price,setPrice]=useState(0);
     const[name,setName]=useState("");
     const[image,setImage]=useState("");
     const[about,setAbout]=useState("");
     const[category,setCategory]=useState("");
 
    const handleEdit=()=>{
     const userData={
         title:name,price,category,about,image
     }
    dispatch(editAdminProduct(id,userData)).then((res)=>{
        navigate(-1)
    })
    }
     useEffect(()=>{
       
         const arr=products.filter((el)=>{return el.id===+id})
        setPrice(arr[0].price);
        setName(arr[0].title)
        setCategory(arr[0].category)
        setImage(arr[0].image)
        setAbout(arr[0].about)
     // console.log(price,title,"price title")
     
     },[])
 return(
     <div>
        <label htmlFor="">title</label>
        <br />
         <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
         <br />
        <label htmlFor="">Image</label>
        <br />
         <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} />
         <br />
         <label htmlFor="">category</label>
         <br />
         <select name="" id="" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <option value="Fruits">fruits</option>
            <option value="Vegetables">vegitable</option>
            <option value="Chicken">chicken</option>
            <option value="Seafood">seafood</option>
            <option value="Mutton">mutton</option>
         </select>
         <br />
         <label htmlFor="">price</label>
         <br />
         <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
         <br />
       
         <label htmlFor="">About</label>
         <br />
         <input type="text" value={about} onChange={(e)=>{setAbout(e.target.value)}} />
         <br />
         <button onClick={handleEdit}>submit</button>   
     </div>
 )
 }
 