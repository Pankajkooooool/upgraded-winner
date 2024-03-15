import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";


import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };
  // const stripePromise = loadStripe(
  //   "pk_test_51MDu0zSHp6YEubUzUcwOW0Lt2QABBYHwyv2xr4IxjZ1RXOwp3MYIpJyfkkVjILdUj8aMKjma5aHvWq4YqkAaWvNu00A7qebDK1"
  // );
  // const makePayment = async() =>{
  //   const stripe = await loadStripe("pk_test_51MDu0zSHp6YEubUzUcwOW0Lt2QABBYHwyv2xr4IxjZ1RXOwp3MYIpJyfkkVjILdUj8aMKjma5aHvWq4YqkAaWvNu00A7qebDK1");

  //   const body = {
  //     products: products
  //   }
  //   const headers = {
  //     "Content-Type": "application/json" 
  //   }
  //   const response = await fetch(`${apiURL}/create-checkout-session`, {
  //     method:"POST",
  //     headers: headers,
  //     body: JSON.stringify(body)
  //   })
   
  //   const session = await response.json();
  //   const result = stripe.redirectToCheckout({
  //   sessionId: session.id
  //   })
  //   if(!result){
  //     console.log(result)
  //   }
  

  const handlePayment = async () => {
    try {
      console.log(products);
      
      const res = await makeRequest.post("/orders", {
        "data":products[0],
        
      });
      
      alert(`Your Order for ${totalPrice()} is  succesfully placed !`)
      dispatch(resetCart())

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.product_name}</h1>
            <p>{item.description?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ₹{item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹{totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
