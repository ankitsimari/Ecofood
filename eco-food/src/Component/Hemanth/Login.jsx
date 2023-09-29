import styled from "@emotion/styled";
import axios from "axios"
import { useEffect, useState } from "react"
export const Login=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState(0);

    const getData=()=>{
        console.log("step1")
      axios.get("https://grocryapi.onrender.com/Users")
      .then((res)=>{console.log(res.data)})
    }
    const handleSubmit=async()=>{
        const userData={
            name:email,
            email:email,
            password:password,
            Order:[]
         }

         axios.post("https://grocryapi.onrender.com/Users",userData)
         .then((res)=>{console.log(res,"1")})
         .catch((err)=>{console.log(err,"2")})

        //  try {
        //     let res = await fetch(`https://grocryapi.onrender.com/Users`, {
        //       method: "POST",
        //       body: JSON.stringify({
        //         packages: userData,
        //       }),
        //       headers: {
        //         "Content-type": "application/json",
        //       },
        //     });
      
        //     let data = await res.json();
        //     console.log(data);
        //     //Data(api);
        //     // getData(api)
        //   } catch (error) {
        //     console.log(error);
        //   }
    }
    useEffect(()=>{
       // getData()
    },[])
    return(
        <DIV>
            <h1>sigup</h1>
            <label htmlFor="">email</label>
            <input type="text"  onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="">password</label>
            <input type="number" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={handleSubmit}>submit</button>
        </DIV>
    )
}
const DIV=styled.div`

width: 40%;
    display: flex;
    flex-direction:column;
    margin-left:100px;
button{
    margin-top:10px
}
`