import React from "react";
import ButtonComponent from "./Button";

export default function Hero() {
  return (
    <div className="container-fluid p-5" >
      <div className="row">
        <div className="col-md-6 mx-lg-5 p-lg-5">
          <h1 className="hero_h1 ">Fastest Delivery in <span className="themeColor">your city</span></h1>
          <p className=" pe-lg-5 my-3"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit error necessitatibus laudantium qui amet accusamus, neque rem, ullam animi ipsam esse maxime iste vitae.</p>
          <ButtonComponent name="click"  />
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
}
