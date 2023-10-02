import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addAdminProduct } from "../../Redux/ProductReducer/action";

const inintialState = {
  title: "",
  image: "",
  price: "",
  category: "",
  about: "",
};

export const AdminAddProduct = () => {
  const [data, setData] = useState(inintialState);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(addAdminProduct(data)).then((res)=>{
        navigate(-1)
    })
    
    setData(inintialState);
  };

  console.log("data", data);

  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <input
          type="text"
          name="title"
          placeholder="Name"
          onChange={handleChange}
          value={data.name}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={handleChange}
          value={data.image}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={data.price}
        />
        
        <select name="category" onChange={handleChange}>
          <option value="">Select Brand</option>
          <option value="Fruits">fruits</option>
            <option value="Vegetables">vegitable</option>
            <option value="Chicken">chicken</option>
            <option value="Seafood">seafood</option>
            <option value="Mutton">mutton</option>
        </select>
        <input
          type="text"
          name="about"
          placeholder="about"
          onChange={handleChange}
          value={data.about}
        />
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: auto;
  padding: 30px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  input,
  select {
    height: 40px;
    width: 100%;
    font-size: 20px;
  }

  button {
    width: 50%;
    height: 35px;
  }
`;
