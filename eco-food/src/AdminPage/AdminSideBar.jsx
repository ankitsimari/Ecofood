import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./sidebar.css"
import {MdCrisisAlert} from "react-icons/md"


const AdminSidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/analytics",
            name:"Stocks",
            icon:<FaRegChartBar/>
        },
        {
            path:"/sales",
            name:"Sales",
            icon:<MdCrisisAlert/>
        },
        {
            path:"/AdminAbout",
            name:"Users",
            icon:<FaUserAlt/>
        },
        {
            path:"/comment",
            name:"Reviews",
            icon:<FaCommentAlt/>
        },
        {
            path:"/AdminProduct",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/AdminProductList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div className=" AdminContainer">
           <div style={{width: isOpen ? "200px" : "50px"}} className="AdminSidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">EcoFood</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default AdminSidebar;