import React from "react";
import "./Pastorder.css";
import CancelAlert from "../CancelAlert/CancelAlert";

import { useEffect, useState } from "react";
import PastOrderSummary from "../PastOrderSummary/PastOrderSummary";

import Home from "../../Home/Home";
import NoCustomer from "../Noorderlist/NoCustomer";
import { Navigate, useNavigate } from "react-router-dom";

const Pastorder = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [Visible, setVisible] = React.useState(false);
  const [popup, setPopup] = React.useState(false);
  const [orderId, setorderId] = React.useState("");

  const alert_popup = (id) => {
    setPopup(true);
    setVisible(false);
    // console.log(id);
  };
  const closeAlert = () => {
    setPopup(false);
  };

  const gettingData = async () => {
    await fetch("http://localhost:5000/getOrder", {
      headers: { authtoken: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((datas) => setData(datas));
  };

  useEffect(() => {
    gettingData();
  }, []);

  var totalquantity = 0;

  Object.keys(data).map((item) => {
    if (data[item].quantity > 0) {
      totalquantity += data[item].quantity;
    }
  });
  // var orderid = "";
  const changeHandler = (id) => {
    setVisible(!Visible);
    setorderId(id);
  };
  const deleteOrder = () => {
    fetch("http://localhost:5000/deleteOrder", {
      method: "POST",
      headers: {
        authtoken: localStorage.getItem("token"),
      },
      body: {
        orderId: orderId,
      },
    });
    Navigate("/pastorder");
  };
  return (
    <>
      <Home />
      {data.length === 0 ? (
        <NoCustomer />
      ) : (
        <div className="pastorder-full-container">
          <>
            <div className="table-order-main-header">
              <div className="table-main-header-data">
                <h4>
                  Orders | <span>{data.length}</span>
                </h4>
              </div>
              <div className="table-create-search">
                <div>
                  <button className="create-button">Create</button>
                </div>
                <div className="search-bar">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input type="text" />{" "}
                </div>
              </div>
            </div>
            <div className="orders-table-header">
              <div>
                <h5>Order id</h5>
              </div>
              <div>
                <h5>Order date & time</h5>
              </div>
              <div>
                <h5>Store Location</h5>
              </div>
              <div>
                <h5>City</h5>
              </div>
              <div>
                <h5>Store Phone</h5>
              </div>
              <div>
                <h5>Total items</h5>
              </div>
              <div>
                <h5>Price</h5>
              </div>
              <div>
                <h5>Status</h5>
              </div>
              <div>
                <h5>View</h5>
              </div>
            </div>
          </>
          <>
            {data.map((ele, index) => {
              return (
                <div
                  className={
                    index % 2 === 0
                      ? "details-container1"
                      : "details-container2"
                  }
                >
                  <>
                    <div className="column1">
                      <p>OROOO{index + 1}</p>
                    </div>
                    <div className="column2">
                      <p>12-oct-2021,10:15</p>
                    </div>
                    <div className="column3">
                      <p>local</p>
                    </div>
                    <div className="column4">
                      <p>{ele.location}</p>
                    </div>
                    <div className="column5">
                      <p>+919988667755</p>
                    </div>
                    <div className="column6">
                      <p>{ele.totalQuantity}</p>
                    </div>
                    <div className="column7">
                      <p>{ele.totalPrice}</p>
                    </div>
                    <div className="column8">
                      <p>ready to pickup</p>
                    </div>
                    <div className="column8">
                      <p>
                        <i
                          onClick={() => changeHandler(ele._id)}
                          class="fa-solid fa-eye"
                        ></i>
                      </p>
                    </div>
                  </>
                  <PastOrderSummary
                    id={ele._id}
                    alert_popup={alert_popup}
                    isVisible={Visible}
                    setVisible={setVisible}
                    customerorder={ele}
                    changeHandler={changeHandler}
                  />
                </div>
              );
            })}
          </>
        </div>
      )}{" "}
      <CancelAlert
        deleteOrder={deleteOrder}
        closeAlert={closeAlert}
        popup={popup}
      />
    </>
  );
};

export default Pastorder;
