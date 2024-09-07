import React from "react";
import "./styles.css";
import IseoCylinder from "../../Images/iseoCylinder.webp";
import IseoPadlock from "../../Images/iseoPadlock.webp";
import IseoLock from "../../Images/iseoLock.webp";
import IseoDoorPusher from "../../Images/iseoDoorPusher.webp";

const Products = () => {
  return (
    <>
      <div id="iseo">
        <div id="product-category-container">
          <div className="product-category">
            <img src={IseoCylinder} alt="cylinder" />
            <h3>Cylinders</h3>
          </div>
          <div className="product-category">
            <img src={IseoPadlock} alt="padlock" />
            <h3>Padlocks</h3>
          </div>
          <div className="product-category category-selected">
            <img src={IseoLock} alt="lock" />
            <h3>Locks</h3>
          </div>
          <div className="product-category category-selected">
            <img src={IseoDoorPusher} alt="doorPusher" />
            <h3>Door closers</h3>
          </div>
        </div>
        <div id="products-container">test</div>
      </div>
    </>
  );
};

export default Products;
