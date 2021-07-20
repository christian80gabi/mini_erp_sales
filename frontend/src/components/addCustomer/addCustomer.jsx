import React, { Component } from "react";
import NavbarAddCustomer from "./navbarAddCustomer";
import HeaderAddCustomer from "./headerAddCustomer";

// css
import "../../css/customer.css";

// Express API
const api = "http://localhost:5000";

class AddCustomer extends Component {
  state = {
    customer_name: "",
    customer_address: "",
    customer_tel: 0,
    customer_email: "",
    street: "",
    postal: 0,
    city: "",
    country: "",
  };

  handleInputChange = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      street,
      postal,
      city,
      country,
      customer_name,
      customer_tel,
      customer_email,
    } = this.state;

    const name = `${customer_name}`;
    const tel = `${customer_tel}`;
    const email = `${customer_email}`;
    const address = `${street}, ${postal} ${city}, ${country}`;

    const data = {
      customer_name: name,
      customer_address: address,
      customer_tel: tel,
      customer_email: email,
    };

    console.log("Customer : ", data);

    // post data to the API
    this.postCustomerData(data);
  };

  postCustomerData = async (data) => {
    const response = await fetch(`${api}/api/customers/add`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);
    if (response.status !== 200) throw Error(response.status);
    if (response.status === 200) alert("Customer created Successfully...");
  };

  render() {
    const {
      customer_name,
      customer_tel,
      street,
      postal,
      city,
      country,
      customer_email,
    } = this.state;

    return (
      <React.Fragment>
        <NavbarAddCustomer />
        <HeaderAddCustomer />
        <div>
          <form onSubmit={this.handleSubmit} className="formMargin">
            <div className="form-row">
              <div id="input" className="form-group col-md-6">
                <label htmlFor="name">Nom : {customer_name}</label>
                <input
                  id="name"
                  name="customer_name"
                  className="form-control"
                  type="text"
                  value={customer_name}
                  onChange={this.handleInputChange}
                  placeholder="nom"
                />
              </div>
            </div>
            <div className="form-row">
              <div id="input" className="form-group col-6 mr-5">
                <label htmlFor="tel">Telephone : {customer_tel}</label>
                <input
                  id="tel"
                  name="customer_tel"
                  className="form-control"
                  type="number"
                  value={customer_tel}
                  onChange={this.handleInputChange}
                  placeholder="numero de telephone"
                />
              </div>
              <div id="input" className="form-group col-2 col">
                <label htmlFor="postal">Code postal : {postal}</label>
                <input
                  id="postal"
                  name="postal"
                  className="form-control"
                  type="number"
                  value={postal}
                  onChange={this.handleInputChange}
                  placeholder="code"
                />
              </div>
              <div id="input" className="form-group col">
                <label htmlFor="street">Rue : {street}</label>
                <input
                  id="street"
                  name="street"
                  className="form-control"
                  type="text"
                  value={street}
                  onChange={this.handleInputChange}
                  placeholder="rue"
                />
              </div>
            </div>
            <div className="form-row">
              <div id="input" className="form-group col-6 mr-5">
                <label htmlFor="email">Email : {customer_email}</label>
                <input
                  id="email"
                  name="customer_email"
                  className="form-control"
                  type="email"
                  value={customer_email}
                  onChange={this.handleInputChange}
                  placeholder="adresse email"
                />
              </div>
              <div id="input" className="form-group col">
                <label htmlFor="country">Pays : {country}</label>
                <select
                  name="country"
                  id="country"
                  className="form-control"
                  value={country}
                  onChange={this.handleInputChange}
                >
                  <option defaultValue>choisir un pays</option>
                  <option>Cameroun</option>
                  <option>France</option>
                  <option>Guinee</option>
                  <option>Tunisie</option>
                </select>
              </div>
              <div id="input" className="form-group col">
                <label htmlFor="city">Ville : {city}</label>
                <select
                  id="city"
                  name="city"
                  className="form-control"
                  value={city}
                  onChange={this.handleInputChange}
                >
                  <option defaultValue>choisir une ville</option>
                  <option>Tunis</option>
                  <option>Sfax</option>
                  <option>Sousse</option>
                </select>
              </div>
            </div>
            <br />
            <div>
              <input
                id="button"
                className="btn btn-secondary"
                type="reset"
                value="Annuler"
              />
              <input
                id="button"
                className="btn btn-primary"
                type="submit"
                value="Valider"
              />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddCustomer;
