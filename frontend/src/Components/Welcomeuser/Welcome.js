import React from "react";
import Home from "../Home/Home";
import { tokenstorage } from "../../App";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  const [token, settoken] = useContext(tokenstorage);
  const logout = () => {
    settoken(null);
  };
  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : (
        <>
          <Home />
          <div className="home__welcomeuser">
            <h2>WELCOME</h2>
            <h1>{localStorage.getItem("Name")}</h1>
            <div className="home__welcomeuser__buttons">
              <Link to={"/createorder"}>
                <button>New order</button>
              </Link>
              <Link to={"/pastorders"}>
                <button>View orders</button>
              </Link>

              <button onClick={logout} className="welcome__logoutdiv">
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
