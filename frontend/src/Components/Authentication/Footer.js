import React from "react";
import facebook from "../../Footericons/facebook.svg";
import instagram from "../../Footericons/instagram.svg";
import linkedin from "../../Footericons/linkedin.svg";

export default function () {
  return (
    <div
      className="container-fluid"
      style={{ position: "absolute", top: "763px", background: "#F8F9FF" }}
    >
      <div className="row">
        <div className="col-12">
          <p
            style={{
              color: "#5861AE",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Now Refer & Earn ₹500 for every referral*
          </p>
          <p
            style={{
              color: "#3D3D43",
              fontSize: "10px",
              marginTop: "-15px",
              textAlign: "center",
            }}
          >
            * Terms and conditions will be applied
          </p>
        </div>
      </div>
      <div
        className="row"
        style={{
          position: "absolute",
          top: "68px",
          height: "197px",
        }}
      >
        <img src="./images/Footer.jpg" class="float-start"></img>
        <div className="row" style={{ marginTop: "-160px" }}>
          <div className="col-5">
            <p
              style={{
                left: "-100px",
                position: "relative",
                fontSize: "18px",
                color: "#182838",
              }}
            >
              ABOUT US
            </p>
          </div>
          <div className="col-2">
            <span
              style={{
                position: "relative",
                left: "-60px",
                color: "#182838",
                fontSize: "16px",
              }}
            >
              Home
            </span>
            <span
              style={{ marginLeft: "5px", color: "#182838", fontSize: "16px" }}
            >
              Pricing
            </span>
          </div>
          <div className="col-2">
            <span
              style={{
                position: "relative",
                left: "-40px",
                color: "#182838",
                fontSize: "16px",
              }}
            >
              Career
            </span>
            <span
              style={{
                position: "relative",
                left: "-60px",
                marginLeft: "50px",
                color: "#182838",
                fontSize: "16px",
              }}
            >
              Contact
            </span>
          </div>
          <div className="col-3">
            <p
              style={{
                position: "relative",
                left: "10px",

                color: "#182838",
                fontSize: "18px",
              }}
            >
              SOCIAL MEDIA
            </p>
          </div>
        </div>
        <div className="row" style={{ marginTop: "-120px" }}>
          <div className="col-5">
            <p
              style={{
                left: "0px",
                position: "relative",
                color: "#182838",
                fontSize: "15px",
              }}
            >
              Doorstep Wash & Dryclean Service
            </p>
          </div>
          <div className="col-2">
            <span
              style={{
                left: "-90px",
                position: "relative",
                color: "#182838",
                fontSize: "14px",
              }}
            >
              Sign In
            </span>
          </div>
          <div className="col-2">
            <span
              style={{
                left: "-95px",
                position: "relative",
                color: "#182838",
                fontSize: "16px",
              }}
            >
              Blogs
            </span>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-4" style={{}}>
                <img
                  src={facebook}
                  style={{
                    padding: "5px",
                    left: "35px",
                    position: "relative",
                  }}
                ></img>
                <img
                  src={instagram}
                  style={{
                    padding: "5px",
                    left: "35px",
                    position: "relative",
                  }}
                ></img>
                <img
                  src={linkedin}
                  style={{
                    padding: "5px",
                    left: "35px",
                    position: "relative",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "-85px" }}>
          <div className="col-5"></div>
          <div className="col-2">
            <span
              style={{
                left: "-90px",
                position: "relative",
                color: "#182838",
                fontSize: "14px",
              }}
            >
              Register
            </span>
          </div>
          <div className="col-2">
            <span
              style={{
                left: "-95px",
                position: "relative",
                color: "#182838",
                fontSize: "16px",
              }}
            >
              Create
            </span>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-4" style={{}}></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          height: "50x",
          position: "relative",
          top: "197px",
          border: "19x #707070 solid",
          background: "#182838",
        }}
      >
        <div className="col-12">
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "12px",
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            2021 <span style={{}}>©</span> Laundry
          </p>
        </div>
      </div>
    </div>
  );
}
