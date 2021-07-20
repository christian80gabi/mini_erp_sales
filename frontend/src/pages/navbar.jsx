import React from "react";
import { Link } from "react-router-dom";

// import SVG file
import house from "../img/house.svg";
import justify_right from "../img/justify_right.svg";

// import CSS file
import "../css/navbar.css";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="nav">
          <Link className="nav-item" to="/">
            <img src={house} className="icon" alt="home" />
          </Link>
        </div>
        <div className="nav justify-content-center">
          <h1 className="nav-item">Welcome</h1>
        </div>
        <div className="nav justify-content-end">
          <Link className="nav-item" to="/customers">
            <img src={justify_right} className="icon" alt="menu" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
