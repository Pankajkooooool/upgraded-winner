import React, { useEffect } from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [targetValue, setTargetValue] = useState(0);
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState('https://as2.ftcdn.net/v2/jpg/02/40/46/77/1000_F_240467763_6um8TvwyKziMejGP9BvMykz1wjbY5Aq2.jpg');
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  
  
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  data?.attributes?.imglink
                }
                alt=""
                onClick={(e) => setSelectedImg(data?.attributes?.imglink)}
              />
              <img
                src={
                  
                  data?.attributes?.imglink2
                }
                alt=""
                onClick={(e) => setSelectedImg(data?.attributes?.imglink2)}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  selectedImg
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.product_name}</h1>
            <span className="price">₹{data?.attributes?.price}</span>
            <p>{data?.attributes?.description}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    product_id: data.id,
                    product_name: data.attributes.product_name,
                    description: data.attributes.description,
                    price: data.attributes.price,
                    img: data.attributes.imglink,
                    quantity,
                    ord_id: `${data.id * quantity * 12 }`,
                    belongs_to: 'Rahul',
                    Address: '#64, Street 12 , Bommanahalli, Bangalore'
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item counting-animation">
                Safety Score: {data?.attributes?.Safety_Score}
                <FavoriteBorderIcon /> 
              </div>
              {/* <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div> */}
            </div>
            
            <hr />
          
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
