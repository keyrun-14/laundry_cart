import React, { useState } from "react";
import "./PastOrderSummary.css";

export default function PastOrderSummary({
  isVisible,
  customerorder,
  changeHandler,
  alert_popup,
  id,
}) {
  // console.log(id);
  // console.log(customerorder._id);
  // id = { orderId: customerorder._id };
  if (isVisible) {
    return (
      <>
        <div className="summary__conatiner">
          <div className="summary__leftdiv">
            <header className="summary__header">
              <div className="summary__header__innnerdiv">
                <h1>Summary</h1>
                <i onClick={changeHandler} class="fa-solid fa-xmark fa-2xl"></i>
              </div>
            </header>
            <nav className="summary__storeselector">
              <div>
                <h4>Store location</h4>
                <p>{customerorder.location}</p>
              </div>
              <div>
                <h4>Store Address</h4>
                <p>local</p>
              </div>
              <div>
                <h4>phone No:</h4>
                <p>+91-9999999999</p>
              </div>
            </nav>
            <div className="multi_stepper">
              <div className="multi-stepper-tags"></div>
              <span className="track-span">pickedup</span>
              <div className="multi-stepper-tags"></div>
              <span className="track-span">washed</span>
              <div className="multi-stepper-tags"></div>
              <span className="track-span">ironed</span>
              <div className="multi-stepper-tags"></div>
              <span className="track-span">delivered</span>
            </div>

            <div className="summary__orderdetails__container">
              <div className="summary__heading">
                <h2>Order details</h2>
              </div>
              {Object.keys(customerorder).map((item) => {
                if (customerorder[item].quantity > 0) {
                  return (
                    <div className="summary__orderdetails">
                      <h1>{customerorder[item].name}</h1>
                      <p>{customerorder[item].washtype}</p>

                      <div className="summary__pricediv">
                        <h3 className="summary__priceparticulars">
                          {customerorder[item].quantity} x{" "}
                          {customerorder[item].totalPrice} ={" "}
                        </h3>
                        <h3 className="summary__mainPrice">
                          {customerorder[item].totalPrice *
                            customerorder[item].quantity}
                        </h3>
                      </div>
                    </div>
                  );
                }
              })}
              <div className="summary__subtotal">
                <div className="summary__pricediv">
                  <p className="summary__priceparticulars">Subtotal:</p>
                  <h3 className="summary__mainPrice">
                    {" "}
                    {customerorder.totalPrice}{" "}
                  </h3>
                </div>
              </div>
              <div className="summary__pickupcharges">
                <div className="summary__pricediv">
                  <p className="summary__priceparticulars">pickup charges:</p>
                  <h3 className="summary__mainPrice"> 90 </h3>
                </div>
              </div>
              <div className="summary__totalprice">
                <div className="summary__pricediv">
                  <h2 className="summary__priceparticulars__mainprice">
                    Total:
                  </h2>
                  <h2 className="summary__mainPrice__mainprice">
                    RS{customerorder.totalPrice + 90}{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="summary__address__container">
              <h4>Address</h4>
              <div
                // onClick={selectAddress}
                className="summary__address summary__address--active"
              >
                <img src="images/tick.svg"></img>
              </div>
            </div>

            <footer className="summary__footer">
              <button onClick={() => alert_popup(id)} className="cancel">
                Cancel Order
              </button>
            </footer>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}