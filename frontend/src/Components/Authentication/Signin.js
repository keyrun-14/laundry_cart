import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { tokenstorage } from "../../App";
import { Navigate } from "react-router-dom";
import Orders from "./Orders";
import Home from "../Home/Home";

export default function () {
  const [token, settoken] = useContext(tokenstorage);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        settoken(res.data.token);
        // localStorage.setItem("token", res.data.token);
        localStorage.setItem("Name", res.data.Name);
        // alert("Sign in Successfull");
      })
      .catch((e) => {
        alert("Invalid Credentials");
      });
  };
  return (
    <div>
      {token ? (
        <Navigate to="/home"></Navigate>
      ) : (
        <div
          className="container-fluid"
          style={{ position: "absolute", top: "81px" }}
        >
          <div className="row">
            <div className="col-6">
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "160px",
                  top: "150px",
                }}
              >
                <div className="col-6 ">
                  <h1
                    id="main_heading"
                    style={{
                      color: "#4552c1",
                      fontSize: "80px",
                      fontWeight: "bolder",
                    }}
                  >
                    Laundry Service
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "120px",
                  top: "155px",
                }}
              >
                <div className="col-6 ">
                  <h1
                    id="main_heading"
                    style={{ color: "#999999", fontSize: "15px" }}
                  >
                    Doorstep Wash & Dryclean Service
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "75px",
                  top: "250px",
                }}
              >
                <div className="col-6 ">
                  <h1
                    id="main_heading"
                    style={{ color: "#999999", fontSize: "13px" }}
                  >
                    Don’t Have An Account?
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "80px",
                  top: "250px",
                }}
              >
                <div className="col-6 ">
                  <Link to="/register">
                    <button
                      type="button"
                      class="btn"
                      style={{
                        background: "white",
                        border: "2px solid #4552c1",
                        width: "100px",
                      }}
                    >
                      Register
                    </button>
                  </Link>
                </div>
              </div>

              {/* <h4 id="sub_heading">Doorstep Wash & Dryclean Service</h4>
          <h5 id="sub_sub_heading">Don’t Have An Account?</h5>
          <button id="register_button">Register</button> */}
              <div
                style={{
                  width: "3px",
                  background: "#5861AE",
                  height: "195px",
                  position: "relative",
                  left: "670px",
                  top: "-95px",
                }}
              ></div>
            </div>
            <div
              className="col-6"
              style={{ background: "#B9C0FD1A", height: "660px" }}
            >
              {" "}
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "0px",
                  top: "150px",
                }}
              >
                <div className="col-6 ">
                  <h1 className="left_heading" style={{ color: "#4552c1" }}>
                    SIGN IN
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "85px",
                  top: "200px",
                }}
              >
                <div className="col-10 ">
                  <form id="form_container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12">
                      {" "}
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          {...register("Email", { required: true })}
                          class="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          style={{
                            border: "none",
                            borderBottom: "2px #4552c1 solid",
                          }}
                        ></input>
                        <label for="floatingInput">Email/ Phone</label>
                        {errors.Email?.type === "required" && (
                          <p style={{ color: "red" }}>Email is required</p>
                        )}
                      </div>
                    </div>

                    <div className="col-12" style={{ marginTop: "50px" }}>
                      {" "}
                      <div class="form-floating mt-3">
                        <input
                          type="password"
                          {...register("Password", {
                            required: true,
                          })}
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          style={{
                            border: "none",
                            borderBottom: "2px #4552c1 solid",
                          }}
                        ></input>
                        <label for="floatingPassword">Password</label>
                        {errors.Password &&
                          errors.Password.type == "required" && (
                            <p style={{ color: "red" }}>
                              You should enter Password
                            </p>
                          )}
                      </div>
                      <p
                        style={{
                          float: "right",
                          color: "#4552c1",
                        }}
                      >
                        <a href="#">Forgot your Password?</a>
                      </p>
                      <div
                        className="row"
                        style={{
                          position: "relative",
                          left: "150px",
                          top: "70px",
                        }}
                      >
                        <div className="col-6 ">
                          <button
                            type="submit"
                            class="btn"
                            style={{
                              background: "#4552c1",
                              border: "2px solid #4552c1",
                              width: "100px",
                              color: "white",
                            }}
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ color: "#000dff", height: "3px", width: "100%" }}></hr>
        </div>
      )}
    </div>
  );
}
