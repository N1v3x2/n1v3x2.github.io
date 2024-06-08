import React from "react";
import pfp from "../images/pfp_3.jpeg";
import "./Home.css";

const Home = () => (
  <div className="Home">
    <div className="w-100 py-10">
      <img src={pfp} alt="pfp" className="profile-pic" />
      <h1 className="mt-4 display-4">Kevin K. Zhang</h1>
    </div>
  </div>
);

export default Home;
