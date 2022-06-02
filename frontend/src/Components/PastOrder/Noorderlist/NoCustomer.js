import React from "react";
import "./NoCustomer.css";

const NoCustomer = () => {
  return (
    <div className="orders-class">
      <div className="header-order">
        <div className="orders ">
          Orders<span>| 0</span>
        </div>
        <div className="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" />{" "}
        </div>
      </div>
      <div className="middle-of-orders">
        <h3>No order Available</h3>
        <button className="btn-1">Create</button>
      </div>
    </div>
  );
};

export default NoCustomer;
