import { DarkMode, GET_ADMIN_PRODUCT, TotalData, getProductFail, getProductRequest, getProductSuccess } from "./actionTypes"
import axios from "axios"

export const getProducts = (paramsObj,page) => (dispatch)=>{
    dispatch({type:getProductRequest});
    axios.get(`https://grocryapi.onrender.com/products?_page=${page}&_limit=6`,paramsObj).then((res)=>{
        dispatch({type:getProductSuccess,payload:res.data})
    }).catch((err)=>{
        dispatch({type:getProductFail})
    })
}

export const handleDarkMode = (dispatch)=>{
   dispatch({type:DarkMode})
}



 export const getCount = (dispatch)=>{
    axios.get(`https://grocryapi.onrender.com/products`).then((res)=>{
    dispatch({type:TotalData,payload:res.data.length})
    }).catch((err)=>{

    })
  }


