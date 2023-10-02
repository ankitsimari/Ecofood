import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import AllRoutes from "./AllRoutes";
import BasicAccordion from "../Component/Accordian";
import Footer from "../Component/Footer";

export default function ProductsRoute() {
  const mode = useSelector((store) => store.ProductsReducer.darkMode);
  return (
    <div>
      <div
        className="App"
        style={{
          backgroundColor: mode ? "black" : "#f4f4f4",
          color: mode ? "white" : "black",
        }}
      >
        <Navbar />
        <AllRoutes />
        <BasicAccordion />
        <Footer />
      </div>
    </div>
  );
}
