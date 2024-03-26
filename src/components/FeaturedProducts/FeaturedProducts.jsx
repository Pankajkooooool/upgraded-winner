import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    // `/products?populate=*&[filters][type][$eq]=${type}`
    // `/products?populate=*&` products?_start=${startIndex}&_limit=10
    `/products?_limit=10`
    
  );
    
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
         Embrace the pulse of culinary innovation with Swingg🛡️'s trending products. Our curated selection reflects the latest in gastronomic trends and consumer preferences, ensuring you stay ahead of the curve. 
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
