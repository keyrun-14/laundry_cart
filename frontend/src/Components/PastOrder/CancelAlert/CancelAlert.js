import React from "react";
import "./CancelAlert.css";

<<<<<<< HEAD
export default function CancelAlert({ popup, closeAlert, deleteOrder }) {
=======
export default function CancelAlert({ popup }) {
  // function deleteOrder(id){
  //   fetch("http://localhost:5000/deleteOrder/"+id,{
  //     method:"DELETE",
  //     mode: 'cors',
  //     headers:{"content-Type":"application/json",'Access-Control-Allow-Origin':'*'}
     
  //   }).then((res)=>console.log(res)).catch(e=>console.log(e))
  // }
>>>>>>> 7420d8df368b72ac7699cbec98b38e24ed002362
  if (popup) {
    return (
      <>
    
        <div className="whole">
          <div className="CancelAlert-div">
            <div className="Alert-head">
              Alert <i onClick={closeAlert} class="fa-solid fa-xmark fa-xl"></i>
            </div>
            {/* <i class="fa-thin fa-xmark"></i> */}
            <div className="remaining-part">
              <div className="traingle">
                <i
                  className="i"
                  class="fa-solid fa-triangle-exclamation fa-2xl"
                ></i>
              </div>
              <div className="alert-proceed">
                <div className="Alert-msg">
                  Are you sure want to cancel Order No:{" "}
                </div>
                <div className="proceed">
<<<<<<< HEAD
                  <button onClick={deleteOrder} className="proceed-button">
                    proceed
                  </button>
=======
                  <button className="proceed-button"
                  //  onClick={deleteOrder(customerorder._id)}
                   >proceed</button>
>>>>>>> 7420d8df368b72ac7699cbec98b38e24ed002362
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
