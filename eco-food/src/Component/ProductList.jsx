import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getProducts,getCount } from '../Redux/ProductReducer/action';
import ProductCard from './ProductCard';
import { useSearchParams } from "react-router-dom";
import styled from '@emotion/styled';
import Loader from './Loader';
import { Sidebar } from './Sidebar';
import Filter from './Filter';

export default function ProductList() {

  const [searchParams] = useSearchParams();
  const [page,setPage] = useState(1)

  const dispatch = useDispatch();

  const data = useSelector(store=>store.ProductsReducer.products);

  const length = useSelector(store=>store.ProductsReducer.length);

  

  const Total = Math.ceil(length/6)
  
  const paginationArray = new Array(Total).fill(0)
  console.log(page)

  const handlePage = (index)=>{
    setPage(index+1)
  }

  const handleNext = ()=>{
    if(page<Total){
      setPage(prev=>prev+1)
    }
  }
  const handlePrev = ()=>{
    if(page<1){
      setPage(prev=>prev-1)
    }
  }
  
  const paramsObj = {
    params:{
      category: searchParams.getAll("category"),
      _order:searchParams.get("order"),
      _sort:searchParams.get("order")?"price":null
    }
  }

  const loading = useSelector(store=>store.ProductsReducer.isLoading);
  console.log(loading)

  
  useEffect(()=>{
    dispatch(getProducts(paramsObj,page));
    dispatch(getCount)
  },[searchParams,page])
  
  if(loading){
return <Loader/>
  }
  return (

    <div className='container my-5'>
    {/* <h2 className='text-center m-5'>Products Page</h2> */}
    <Filter/>
    <div className='d-flex'>
  <div className='sidebar'>
  <Sidebar/>
  </div>
  <div className='List'>
    {/* <ProductList/> */}

    <div>
    <div className='m-4' style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {data && data.map((e)=>(
          <ProductCard key={e.id} {...e}/>
          ))}
    </div>

          <div className='d-flex justify-content-center'>
            <button disabled={page==1} className='pageBtn rounded ' onClick={handlePrev}>Prev</button>
            {paginationArray.map((item,index)=>(
              <button className='rounded' style={{
                backgroundColor: page === index + 1 ? "#DC3545" : "transparent",
                padding: "5px 10px",
                border:page === index + 1 ? "1px solid #DC3545" :  "1px solid gray",
                margin: "2px",
                color:page === index + 1 ? "white" : null
              }} key={index} onClick={()=> handlePage(index)}>{index+1}</button>
            ))}
            <button disabled={page==Total} className='pageBtn rounded px-2' onClick={handleNext}>Next</button>
          </div>



    </div>
  </div>
    </div>

</div>


  )
}


