import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 * img svg
 */
import eye from "../../img/eye.svg";
import trash from "../../img/trash.svg";
import pencil from "../../img/pencil.svg";

/**
 * styles css
 */
const styleList = { height: 20, width: 20 };

class Customer extends Component {
  render() {
    const {
      customer_id,
      customer_name,
      customer_address,
      customer_tel,
      customer_email,
      customer_creation,
      customer_modification,
    } = this.props.customer;
    const customer = this.props.customer;
    const { onDisplay, onUpdate, onDelete } = this.props;

    return (
      <React.Fragment>
        <tr>
          <th scope="row">
            <input type="checkbox" name="eltSelected" />
          </th>
          <th scope="row">{customer_id}</th>
          <td>{customer_name}</td>
          <td>{customer_address}</td>
          <td>{customer_tel}</td>
          <td>{customer_email}</td>
          <td>{customer_creation}</td>
          <td>{customer_modification}</td>
          <td>
            <Link
              to={{
                pathname: `./customers/display/${customer.customer_id}`,
              }}
            >
              <button
                onClick={() => onDisplay(customer)}
                className="btn btn-outline-secondary"
              >
                <img src={eye} style={styleList} alt="view" />
              </button>
            </Link>
          </td>
          <td>
            <Link
              to={{
                pathname: `./customers/update/${customer.customer_id}`,
              }}
            >
              <button
                onClick={() => onUpdate(customer.customer_id)}
                className="btn btn-outline-secondary"
              >
                <img src={pencil} style={styleList} alt="edit" />
              </button>
            </Link>
          </td>
          <td>
            <button
              onClick={() => {
                if (
                  window.confirm("Voulez-vous vraiment supprimer ce client ?")
                ) {
                  onDelete(customer.customer_id);
                }
              }}
              className="btn btn-outline-warning"
            >
              <img src={trash} style={styleList} alt="delete" />
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Customer;
