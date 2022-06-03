import React from "react";
import "./CancelAlert.css";

export default function CancelAlert({ popup }) {
  // function deleteOrder(id){
  //   fetch("http://localhost:5000/deleteOrder/"+id,{
  //     method:"DELETE",
  //     mode: 'cors',
  //     headers:{"content-Type":"application/json",'Access-Control-Allow-Origin':'*'}
     
  //   }).then((res)=>console.log(res)).catch(e=>console.log(e))
  // }
  if (popup) {
    return (
      <>
    
        <div className="whole">
          <div className="CancelAlert-div">
            <div className="Alert-head">
              Alert <i  class="fa-solid fa-xmark fa-xl"></i>
            </div>
            {/* <i class="fa-thin fa-xmark"></i> */}
            <div className="remaining-part">
              <div className="traingle">
                <i className="i" class="fa-solid fa-triangle-exclamation fa-2xl"></i>
              </div>
              <div className="alert-proceed">
                <div className="Alert-msg">
                  Are you sure want to cancel Order No:{" "}
                </div>
                <div className="proceed">
                  <button className="proceed-button"
                  //  onClick={deleteOrder(customerorder._id)}
                   >proceed</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
