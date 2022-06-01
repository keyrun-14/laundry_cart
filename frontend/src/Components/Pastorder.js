import React from "react";
import "./Pastorder.css";

import { useEffect, useState } from "react";
import PastOrderSummary from "./PastOrderSummary/PastOrderSummary"

import Home from "./Home/Home.js";
import NoCustomer from "./NoCustomer";

const Pastorder = () => {
  const [data, setData] = useState([]);
  const [Visible,setVisible]=useState(true)
  const gettingData = async () => {
    await fetch("http://localhost:8080/getOrder").then((res)=>res.json()).then((datas)=>setData(datas))

 
  };
  console.log(data)

  useEffect(() => {
    gettingData();
  }, []);
var totalquantity=0
  Object.keys(data).map((item)=>{
      if (data[item].quantity>0){
          totalquantity+=data[item].quantity
      }

  })
  const changeHandler=()=>{
      setVisible(!Visible)

  }

  return (
      <>
      { (data.length===0)?<NoCustomer/>:
    <div className="pastorder-full-container">     
  
      <>
        <div className="table-order-main-header">
          <div className="table-main-header-data">
            <h3>
              Orders | <span>{data.length}</span>
            </h3>
          </div>
          <div className="table-create-search">
            <div><button className="create-button">Create</button></div>
            <div className='search-bar'><input type="text" /> </div>
          </div>
        </div>
        <div className="orders-table-header">
          <div>
            <h4>Order id</h4>
          </div>
          <div>
            <h4>Order date & time</h4>
          </div>
          <div>
            <h4>Store Location</h4>
          </div>
          <div>
            <h4>City</h4>
          </div>
          <div>
            <h4>Store Phone</h4>
          </div>
          <div>
            <h4>Total items</h4>
          </div>
          <div>
            <h4>Price</h4>
          </div>
          <div>
            <h4>Status</h4>
          </div>
          <div>
            <h4>View</h4>
          </div>
        </div>
      </>
      <>
      
          {data.map((ele, index) => {
          return (
            <div className={(index%2===0) ? "details-container1":"details-container2"}>
            <>
              <div className="column1">
                <p>OROOO{ index+1}</p>
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
              <div className="column8" >
                  <p><i onClick={changeHandler} class="fa-solid fa-eye" ></i></p>
              </div>
             </>
             <PastOrderSummary isVisible={Visible} customerorder={ele} changeHandler={changeHandler}/>
             </div>
          );
        })}

     
        
      </>
    </div>
}
      </>

   
  );
};

export default Pastorder;
