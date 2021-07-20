import React from "react";
import { Link } from "react-router-dom";

// import SVG file
import house_white from "../../img/house_white.svg";
import justify_right_white from "../../img/justify_right_white.svg";

// import CSS file
import "../../css/navbar.css";

const NavbarUpdateCustomer = () => {
  return (
    <div>
      <nav className="navbar navbar-light navbarColor">
        <div className="nav">
          <Link to="/">
            <img src={house_white} className="icon" alt="house_white" />
          </Link>
        </div>
        <div className="nav justify-content-center">
          <h1 className="h1Color">Editer un client</h1>
        </div>
        <div className="nav justify-content-end">
          <Link to="/customers/menu">
            <img src={justify_right_white} className="icon" alt="menu" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarUpdateCustomer;
