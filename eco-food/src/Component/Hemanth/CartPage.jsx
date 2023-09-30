import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonComponent from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { upDateOrder } from "../../Redux/AuthReducer/actionTypes";

export const CartPage = () => {
  const [cartArr, setCartArr] = useState([]);
  const [totalPrice, setTotal] = useState(0);
  const [orderSt, setOrderSt] = useState([]);
  const dispatch=useDispatch()

  //const orderArr = [];
  // const orderLs = localStorage.getItem("cartData");
  // let orderArr=[]
  // if (orderLs == null) {

  //   orderArr = [];

  // } else {
  //   orderArr = JSON.parse(orderLs);
  // }

  //  const orders=useSelector((store)=>{return store.AuthReducer.loginUser.Order})

  //      if(orders){
  //       const arr=orders.map((e,i)=>{e.quantity=1
  //         return e
  //       })
  //       setCartArr(arr)
  //      }

  const handleInc = (id) => {

    //locallychecking and updating
    const arr = cartArr.map((e, i) => {
      if (e.id == id) {
        e.quantity++;
        e.total = e.price * e.quantity;
      }
      return e;
    });
    setCartArr(arr);

    //updating API
    axios.patch(`https://grocryapi.onrender.com/Users/1`,{
      Order:[...arr]
     })
     .then((res)=>{console.log(res)})

     //updating Store{AuthReducer.login.Order}
    // dispatch(upDateOrder(arr))
  };

     const handleDec=(id)=>{
      const arr = cartArr.map((e, i) => {
        if (e.id == id) {
          e.quantity--;
          e.total = e.price * e.quantity;
        }
        return e;
      });
      setCartArr(arr);

      axios.patch(`https://grocryapi.onrender.com/Users/1`,{
      Order:[...arr]
     })
     .then((res)=>{console.log(res)})
       
     //dispatch(upDateOrder(arr))
     }



   const handleDelete=(id)=>{
    const arr = cartArr.filter((e, i) => { return e.id!=id
    });

    setCartArr(arr);

    axios.patch(`https://grocryapi.onrender.com/Users/1`,{
      Order:[...arr]
     })
     .then((res)=>{console.log(res)})

     //dispatch(upDateOrder(arr))

   }



  useEffect(() => {
    //make id dynamic with params()
    axios.get("https://grocryapi.onrender.com/Users/1").then((res) => {
      console.log(res.data.Order, "resOrder cartPage");
      const arr = res.data.Order.map((e, i) => {
        if(e.quantity==undefined){
          e.quantity = 1;
          e.total = e.price;
        }
        return e;
      });

      console.log(arr, "arr");
      setCartArr(arr);
    });
  }, []);

  useEffect(() => {
    let sum = 0;
    if (cartArr.length > 0) {
      cartArr.forEach((e) => {
        sum = sum + e.total;
      });
    }
    setTotal(sum);
  });
 

  // console.log("order cart page",orders)

  return (
    // <DIV>
    //   <div className="outerDiv">
    //     <div className="header">
    //       <p>Item</p>
    //       <p>Name</p>
    //       <p>Category</p>
    //       <p>Price</p>
    //       <p>Quantity</p>
    //       <p>Total</p>
    //     </div>
    //     {cartArr &&
    //       cartArr.map((e, i) => {
    //         return (
    //           <div className="container" key={i}>
    //             <img src={e.image} alt="" />
    //             <p>{e.title}</p>
    //             <p>{e.category}</p>
    //             <p>{Math.floor(e.price)}</p>
    //             <button onClick={() => {handleInc(e.id); }}> +</button>
    //             <p>{e.quantity}</p>
    //             <button onClick={() => {handleDec(e.id);}}>-</button>
    //             <p>{Math.floor(e.total)}</p>
    //             <button onClick={()=>{handleDelete(e.id)}}>delete</button>
    //           </div>
    //         );
    //       })}
    //   </div>

    //   <div className="sideDiv">
    //     <h3 className="sideHead">cart</h3>
    //     <p>
    //       items : <span className="span1">{cartArr.length}</span>
    //     </p>
    //     <p>
    //       Total : <span className="span2">{Math.floor(totalPrice)}</span>
    //     </p>
    //     <div className="sideDivBut">
    //       <button className="pay">Pay on Delivery</button>
    //       <button>Pay Now</button>
    //     </div>
    //   </div>
    // </DIV>
    <DIV>
  <div className="outerDiv">
    <table className="headerTable">
      <thead>
        <tr>
          <th>Item</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartArr &&
          cartArr.map((e, i) => {
            return (
              <tr className="container" key={i}>
                <td>
                  <img src={e.image} alt="" />
                </td>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td>{Math.floor(e.price)}</td>
                <td>
                  <button className="plusMin" onClick={() => { handleInc(e.id); }}> +</button>
              
                {e.quantity}
               
                  <button className="plusMin" onClick={() => { handleDec(e.id); }}>-</button>
                </td>
                <td>{Math.floor(e.total)}</td>
                <td>
                  <button className="deleteBtn" onClick={() => { handleDelete(e.id); }}>delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  </div>

  <div className="sideDiv">
    <h3 className="sideHead">cart</h3>
    <p>
      items : <span className="span1">{cartArr.length}</span>
    </p>
    <p>
      Total : <span className="span2">{Math.floor(totalPrice)}</span>
    </p>
    <div className="sideDivBut">
      <button className="pay">Pay on Delivery</button>
      <button>Pay Now</button>
    </div>
  </div>
</DIV>


  );
};
const DIV = styled.div`
  display: flex;
  margin-top: 25px;

  /* .container {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
    align-items: center;
  }
  img {
    width: 10%;
    border-radius: 10px;
  }
  .header {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
    margin-left: 20%;
  }
  .sideDiv {
    border: none;
    border-radius: 30px;
    height: 200px;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin-top: 50px;
  }
  .sideDiv p {
    margin-left: 20px;
  }
  .sideHead {
    text-align: center;
  }

  .outerDiv {
    width: 75%;
  }
  button {
    margin-left: 2px;
    background-color: #dc3545;
  }
  .pay {
    border-radius: 15px;
    color: #dc3545;
    background-color: white;
    border: 1px solid #dc3545;
  }

  .span1 {
    margin-left: 50px;
  }
  .span2 {
    margin-left: 50px;
  } */
  
.outerDiv{
  width: 70%;
}

  display: flex;
  margin-top: 25px;
  img {
    width: 30%;
    border-radius: 10px;
  }

  .headerTable {
  width: 75%;
  border-collapse: collapse;
  margin-left: 20px;
}

.headerTable th, .headerTable td {
  text-align: center;
  padding: 10px;
  border: none; 
}

.item-image {
  width: 50px;
  border-radius: 10px;
}

.sideDiv {
  width: 30%;
  border: none;
  border-radius: 20px;
  height: 200px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin-top: 50px;
  margin-right: 30px;
 
}

.sideDiv p {
  margin-left: 20px;
}

.sideHead {
  text-align: center;
}

.sideDivBut button {
  margin: 5px;
  background-color: #dc3545;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
}

.pay {
  background-color: white;
  color: #dc3545;
  border: 1px solid #dc3545;
}
.plusMin{
  border:none;

  border-radius: 4px;
}

.deleteBtn{
  border:none;
  background-color:#dc3545;
  color: white;
  border-radius: 4px;
}
`;
