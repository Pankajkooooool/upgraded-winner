import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          
          <span>New Arrivals</span>
          <span>Fitness</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
        
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          . Whether it's scrutinizing allergens or assessing product quality, our Safety Score serves as your reliable guide, helping you make informed decisions for yourself and your loved ones. Experience the confidence of shopping with Swingg🛡️, where your safety always comes first.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          We are committed to providing you with exceptional service and ensuring that your experience with Swingg exceeds your expectations. Your satisfaction is our priority, and we look forward to hearing from you soon
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Swingg🛡️ </span>
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
