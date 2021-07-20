import React, { Component } from "react";
import NavbarDisplayCustomer from "./navbarDisplayCustomer";
import HeaderDisplayCustomer from "./headerDisplayCustomer";

class DisplayCustomer extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavbarDisplayCustomer />
        <HeaderDisplayCustomer />
      </div>
    );
  }
}

export default DisplayCustomer;
