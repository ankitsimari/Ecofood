import { Link, NavLink } from "react-router-dom"
import ButtonComponent from "./Button";
import styled from "@emotion/styled";


export default function Navbar(){
  
  const handleTop = ()=>{
    window.scrollTo(0, 0);
  }

    return(
       <>

<DIV className="navbar navbar-expand-lg sticky-top ">
    <div className="container text-center text-md-start">  
      <Link onClick={handleTop} className="navbar-brand fw-bolder fs-2 themeColor " to="/"><img src="/img/logo.png" alt=""/> &nbsp; &nbsp;ECOFOOD</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ps-4 ps-lg-0 text-uppercase">
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" aria-current="page" to="/">home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" to="/product">Product</NavLink>
          </li>
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" to="/order">Orders</NavLink>
          </li>
        </ul>
        <div className="d-flex flex-column flex-lg-row">

   
            <ButtonComponent name="login"/>
          
          {/* <Button  className="btn btn-2 fw-bold px-4 mx-3 mx-lg-0  me-xl-5">{isAuth?"UserName":"Register"}</Button> */}
          {/* <NavLink to="/login" >
          {isAuth?<User/>:<Button  className="btn btn-2 fw-bold px-4 mx-3 mx-lg-0  me-xl-5">Register</Button>}
          </NavLink> */}
          

        </div>
      </div>
    </div>
  </DIV>
       </>
    )
}


const DIV = styled.nav`
   backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`