import axios from "axios";
import { GetUsersData, LoginFail, LoginRequest, LoginSuccess, LoginUpdate, LogoutUpdate, SignUpFail, SignUpRequest, SignUpSuccess } from "./actionTypes";


export const signUp = (userData) => (dispatch) => {
    dispatch({ type:SignUpRequest  });
    return axios
      .post("https://grocryapi.onrender.com/Users", userData)
      .then((res) => {
        console.log("post signup",res.data)
        dispatch({ type:SignUpSuccess , payload: res.data});
      })
      .catch((err) => {
        dispatch({ type:SignUpFail , payload: err.message });
      });
  };
  

  export const getUsers=(dispatch) => {
    return axios
      .get("https://grocryapi.onrender.com/Users")
      .then((res) => {
        console.log(res.data,"getData")
        dispatch({ type:GetUsersData , payload: res.data});
      })
      .catch((err) => {
        console.log(err)
      });
  };

  export const login=(emData)=>(dispatch)=>{
    console.log("login action")
    dispatch({type:LoginUpdate,payload:emData})
  
  }
  export const logout=(dispatch)=>{
    console.log("logout action")
    dispatch({type:LogoutUpdate})
  
  }