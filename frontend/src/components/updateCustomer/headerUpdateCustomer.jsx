import React from "react";
import { Link } from "react-router-dom";
import back from "../../img/back.svg";
import list from "../../img/list.svg";

const styles = { height: 30, width: 30 };

const HeaderAddCustomer = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="nav">
          <Link to="/customers">
            <img src={back} style={styles} alt="back" />
          </Link>
        </div>
        <div className="nav justify-content-end">
          <Link to="/">
            <img src={list} style={styles} alt="menu" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderAddCustomer;
