import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export const AdminProductSearch = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [order, setOrder] = useState(searchParams.get("order") || []);

  const [category, setCate] = useState(searchParams.getAll("category") || []);
 
  


  const handleCategory = (e) => {
    const { value } = e.target;
    let newCate = [...category];
    if (newCate.includes(value)) {
      newCate = newCate.filter((el) => el !== value);
    } else {
      newCate.push(value);
    }
    setCate(newCate);
    console.log(newCate,"cate")
  };
  const handleOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  useEffect
  (() => {
    let params = {
      category
    };
    order && (params.order = order);
   // cate &&(params.cate = cate)
    setSearchParams(params);
  }, [ order,category]);

 

  return (
    <div>
    

      <h3>Filter by category</h3>
      <div>
        <input
          type="checkbox"
          value={"Fruits"}
          onChange={handleCategory}
          checked={category.includes("Fruits")}
        />
        <label>Fruits</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Vegetables"}
          onChange={handleCategory}
          checked={category.includes("Vegetables")}
        />
        <label>Vegetables</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Chicken"}
          onChange={handleCategory}
          checked={category.includes("Chicken")}
        />
        <label>Chicken</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Seafood"}
          onChange={handleCategory}
          checked={category.includes("Seafood")}
        />
        <label>Seafood</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Mutton"}
          onChange={handleCategory}
          checked={category.includes("Mutton")}
        />
        <label>Mutton</label>
      </div>

      

      <h3>Sort By Price</h3>
      <div onChange={handleOrder}>
        <input
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Low to High</label>
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>High to Low</label>
        <input
          type="radio"
          name="order"
          value={""}
          defaultChecked={order === ""}
        />
        <label>Reset</label>
      </div>
    </div>
  );
};
