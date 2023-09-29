import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { getUsers, login, logout } from "../../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginSuccess } from "../../Redux/AuthReducer/actionTypes";
import { Alert } from "@mui/material";
import ButtonComponent from "../Button";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const Users = useSelector((store) => {
    console.log("store", store.AuthReducer);
    return store.AuthReducer.Users;
  });
  const isAuth = useSelector((store) => {
    return store.AuthReducer.isAuth;
  });

  // const getData=()=>{
  //     console.log("step1")
  //   axios.get("https://grocryapi.onrender.com/Users")
  //   .then((res)=>{console.log(res.data)})
  // }
  //  axios.post("https://grocryapi.onrender.com/Users",userData)
  //  .then((res)=>{console.log(res,"1")})
  //  .catch((err)=>{console.log(err,"2")})

  const handleSubmit = () => {
    const Data = {
      email: email,
      password: password,
    };
    console.log(Data, "Data");

    const emData = Users.filter((e, i) => {
      return e.email == Data.email;
    });

    console.log(emData, "emData");
    if (emData.length != 0) {
      if (emData[0].password === Data.password) {
        console.log("successful login ");
      
        alert("login Success");
        dispatch(login(emData[0]));
      } else {
        console.log("wrond password");
        alert("wrong password")
      }
    } else {
      console.log("email not found");
      alert("email not matched")
    }
  };
  const handleLogout = () => {
    dispatch(logout);
  };

  useEffect(() => {
    dispatch(getUsers);
  }, []);
  return (
    <>
      <DIV>
        <div className="logout">
          <h1>logout</h1>
          {/* <button onClick={handleLogout}>logout</button> */}
          <ButtonComponent onClick={handleLogout} name={"logout"} />
        </div>

        <div className="login">
          <h1>Login</h1>
          <Link to="/signup">signUp</Link>
          {isAuth?<Alert severity="success">login successful</Alert>:
          <Alert severity="info">login for better experince</Alert>
          }
          <label htmlFor="">email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="">password</label>
          <input
            type="number"
            value={password}
            onChange={(e) => {
              setPassword(+e.target.value);
            }}
          />
          {/* <button onClick={handleSubmit}>submit</button> */}
          <ButtonComponent onClick={handleSubmit} name={"submit"} />
        </div>
      </DIV>
    </>
  );
};
const DIV = styled.div`
.login{

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
}

  button {
    margin-top: 10px;
    border: none;
  }
  h1 {
    color: #dc3545;
  }
`;
