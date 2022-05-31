import React from "react";
import { Link } from "react-router-dom";
// import Summary from "../CreateOrders/summary/Summary";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home__container">
        <header className="home__header">
          <div className="home__header__insidediv">
            <div className="home__header__title">
              <h1>LAUNDRY</h1>
            </div>
            <div className="home__header__navigation">
              <p>Pricing</p>
              <p>Career</p>
            </div>
          </div>
          <div className="home__header__userinfo">
            <div className="home__header__userimage">
              <img src="https://lh3.googleusercontent.com/ogw/ADea4I7Jg1mUhjHMgDuy34nUCvmABKEPG3wOr4p2SzlOsg=s32-c-mo"></img>
            </div>
            <h1>Naveen</h1>
          </div>
        </header>
        <nav className="home__navbar">
          <Link className="linkdiv" to={"#"}>
            <i class="fa-solid fa-house"></i>
          </Link>
          <Link className="linkdiv" to={"/createorder"}>
            <img src="images/more.svg"></img>
          </Link>
          <Link className="linkdiv" to={"#"}>
            <i class="fa-solid fa-list"></i>
          </Link>
        </nav>
        <footer className="home__footer">
          <p>2021 &#169; Laundry</p>
        </footer>
      </div>
    </>
  );
}
