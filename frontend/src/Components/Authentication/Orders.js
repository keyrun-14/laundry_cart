import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { tokenstorage } from "../../App";
import SignInFullpage from "./SignInFullpage";
import { Navigate } from "react-router-dom";
import axios from "axios";
export default function Orders() {
  const [token, settoken] = useContext(tokenstorage);
  const [data, setdata] = useState("");
  async function fetchorderlist() {
    await axios
      .get("http://localhost:5000/orders", {
        headers: {
          authtoken: token,
        },
      })
      .then((res) => {
        setdata(JSON.stringify(res.data));
        //alert("fetched posts successfully");
      })
      .catch((e) => {
        alert("fetching posts failed");
      });
  }

  const logouthandler = () => {
    settoken(null);
    alert("logout Success");
  };
  useEffect(() => {
    fetchorderlist();
  }, []);

  return (
    <div>
      {!token ? (
        <Navigate to="/"></Navigate>
      ) : (
        <div>
          <h1>Welcome to orders page</h1>
          <h6>{token}</h6>
          <h4>{data}</h4>
          <button style={{ padding: "5px" }} onClick={logouthandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
