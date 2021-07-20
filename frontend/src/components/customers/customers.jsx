import React, { Component } from "react";
import Customer from "./customer";
import NavbarCustomers from "./navbarCustomers";
import { Redirect } from "react-router-dom";

// import SVG file
import list from "../../img/list.svg";

// import CSS file
import "../../css/navbar.css";
import UpdateCustomer from "../updateCustomer/updateCustomer";

// Express API
const api = "http://localhost:5000";

class Customers extends Component {
  state = {
    customers: [
      {
        customer_id: 1,
        customer_name: "Roshan Garison",
        customer_address: "100, Ibn Khaldoum, Tunis, Tunisie",
        customer_tel: "0021676435089",
        customer_email: "r.garison@mail.com",
        customer_creation: "01/12/2019",
        customer_modification: "22/12/12019",
      },
      {
        customer_id: 2,
        customer_name: "John Roland",
        customer_address: "354, Ibn Khaldoum, Tunis, Tunisie",
        customer_tel: "0021656435089",
        customer_email: "j.roland@mail.com",
        customer_creation: "01/12/2019",
        customer_modification: "23/12/12019",
      },
    ],
    showUpdateCustomer: false,
    showAddCustomer: false,
  };

  /**
   * Get customers list from the API
   */
  getCustomers = async () => {
    const response = await fetch(`${api}/api/customers`, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });
    const customers = await response.json();

    if (response.status !== 200) throw Error(response.status);

    return customers;
  };

  /**
   * Delete a customer from the API
   * @param id
   */
  deleteCustomer = async (id) => {
    const response = await fetch(`${api}/api/customers/delete/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });

    console.log(response);
    if (response.status !== 200) throw Error(response.status);
    if (response.status === 200) {
      alert("Customer deleled Successfully...");

      return <Redirect to="./customers" />;
    }
  };

  /**
   * Auto loading method after the page loading
   */
  componentDidMount() {
    this.getCustomers().then((response) => {
      const customers = response;
      this.setState({ customers }, () => {
        console.log("Customers fetched...", customers);
      });
    });
  }

  /**
   * Dispaly a single customer
   * @param customer
   */
  handleDisplay = (customer) => {
    console.log("Displaying customer: ", customer.customer_id);
  };

  /**
   * update a single customer
   * @param customerId
   */
  handleUpdate = (customerId) => {
    console.log("onUpdate : ", customerId);
  };

  /**
   * delete a single customer
   * @param customerId
   */
  handleDelete = (customerId) => {
    this.deleteCustomer(customerId);
    return this.render(<Redirect to="./customers/" />);
  };

  /**
   * Render Method
   */
  render() {
    return (
      <React.Fragment>
        <NavbarCustomers />
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" name="selectAll" />
                </th>
                <th scope="col">
                  <span className="badge badge-pill badge-primary">
                    {this.state.customers.length}
                  </span>
                  #
                </th>
                <th scope="col">NOM</th>
                <th scope="col">ADRESSE</th>
                <th scope="col">TELEPHONE</th>
                <th scope="col">MAIL</th>
                <th scope="col">CREATION</th>
                <th scope="col">MODIFICATION</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">
                  <img src={list} className="icon" alt="clear-all" />
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((customer) => (
                <Customer
                  key={customer.customer_id}
                  customer={customer}
                  onDelete={this.handleDelete}
                  onUpdate={this.handleUpdate}
                  onDisplay={this.handleDisplay}
                />
              ))}
            </tbody>
          </table>
        </div>
        <UpdateCustomer hide={this.state.showUpdateCustomer} />
      </React.Fragment>
    );
  }
}

export default Customers;
