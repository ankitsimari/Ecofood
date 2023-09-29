import styled from "@emotion/styled";
import axios from "axios"
import { useEffect, useState } from "react"
import { getUsers, signUp } from "../../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonComponent from "../Button";
export const SignUp=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState();
    const dispatch=useDispatch()
    const Users = useSelector((store) => {
        console.log("store sig", store.AuthReducer);
        return store.AuthReducer.Users;
      });
    // const getData=()=>{
    //     console.log("step1")
    //   axios.get("https://grocryapi.onrender.com/Users")
    //   .then((res)=>{console.log(res.data)})
    // }
    const handleSubmit=()=>{
        const userData={
            name:email,
            email:email,
            password:password,
            Order:[]
         }

         const checkEm = Users.filter((e, i) => {
            return e.email === userData.email;
          });

          if (checkEm.length == 0) {
            alert("signin success")
              dispatch(signUp(userData))
          }
          else{
           alert("email already present")
          }
       
      
    }
    
    useEffect(()=>{
      dispatch(getUsers)
    },[])
    return(
        <DIV>
            <h1>sigup</h1>
            <Link to="/login">Login</Link>
            <label htmlFor="">email</label>
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="">password</label>
            <input type="number" value={password} onChange={(e)=>{setPassword(+e.target.value)}}/>
            
            <ButtonComponent onClick={handleSubmit} name={"submit"} />
        </DIV>
    )
}
const DIV=styled.div`

width: 40%;
width: 40%;
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    border: 1px solid black;
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
    border:none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.3s;

  h1 {
    color: #dc3545;
  }

button{
    margin-top:10px
}
input{
    color:"black";
   
    
   
}
`