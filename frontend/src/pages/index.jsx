import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { Button } from "react-bootstrap";
import DialogBox from "./dialogBox";

const modalValue = "Voulez-vous vraiment supprimer cet element ?";

class Home extends Component {
  state = {
    modalShow: false,
  };

  setModalShow = (val) => {
    this.setState({ modalShow: val });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="jumbotron">
          <h1 className="display-4">Hello !</h1>
          <p className="lead">Mini-ERP: Sales module</p>
          <hr className="my-4" />
          <p>To get the customers list click </p>
          <Link to="/customers">
            <div className="btn btn-primary btn-lg">Click here</div>
          </Link>
        </div>

        <Button
          variant="outline-primary"
          onClick={() => this.setModalShow(true)}
        >
          Launch Centered Modal
        </Button>

        {/** Bootstrap Modal  */}
        <DialogBox
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
          value={modalValue}
        ></DialogBox>
      </React.Fragment>
    );
  }
}

export default Home;
