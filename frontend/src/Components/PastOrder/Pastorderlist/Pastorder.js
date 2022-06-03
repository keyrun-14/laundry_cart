import React from "react";
import "./Pastorder.css";
import CancelAlert from "../CancelAlert/CancelAlert";

import { useEffect, useState } from "react";
import PastOrderSummary from "../PastOrderSummary/PastOrderSummary";

import Home from "../../Home/Home";
import NoCustomer from "../Noorderlist/NoCustomer";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Pastorder = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [Visible, setVisible] = React.useState(false);
  const [popup, setPopup] = React.useState(false);
  const [orderId, setorderId] = React.useState("");
  const [counter, setCounter] = React.useState(0);

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
  const deleteOrder = () => {
    setCounter(counter + 1);
    fetch("http://localhost:5000/deleteOrder/" + orderId, {
      method: "DELETE",
      headers: {
        authtoken: localStorage.getItem("token"),
      },
      body: {
        orderId: orderId,
      },
    });
    setPopup(false);
    navigate("/pastorders");
  };

  useEffect(() => {
    gettingData();
  }, [counter]);

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
                  <Link to={"/createorder"}>
                    <button className="create-button">Create</button>
                  </Link>
                </div>
                <div className="search-bar">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input type="text" />{" "}
                </div>
              </div>
            </div>
            <div className="orders-table-header">
              <div>
                <h6>Order id</h6>
              </div>
              <div>
                <h6>Order date & time</h6>
              </div>
              <div>
                <h6>Store Location</h6>
              </div>
              <div>
                <h6>City</h6>
              </div>
              <div>
                <h6>Store Phone</h6>
              </div>
              <div>
                <h6>Total items</h6>
              </div>
              <div>
                <h6>Price</h6>
              </div>
              <div>
                <h6>Status</h6>
              </div>
              <div>
                <h6>View</h6>
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
                    <div className="column">
                      <p>OROOO{index + 1}</p>
                    </div>
                    <div className="column">
                      <p>12-oct-2021,10:15</p>
                    </div>
                    <div className="column">
                      <p>local</p>
                    </div>
                    <div className="column">
                      <p>{ele.location}</p>
                    </div>
                    <div className="column">
                      <p>+919988667755</p>
                    </div>
                    <div className="column">
                      <p>{ele.totalQuantity}</p>
                    </div>
                    <div className="column">
                      <p>{ele.totalPrice}</p>
                    </div>
                    <div className="column">
                      <p>ready to pickup</p>
                    </div>
                    <div className="column">
                      <p>
                        <i
                          onClick={() => changeHandler(ele._id)}
                          class="fa-solid fa-eye"
                        ></i>
                      </p>
                    </div>
                  </>
                </div>
              );
            })}
          </>
          <PastOrderSummary
            id={orderId}
            alert_popup={alert_popup}
            isVisible={Visible}
            setVisible={setVisible}
            changeHandler={changeHandler}
          />
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
