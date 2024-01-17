import React from "react";
import "./App.css";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages";
import NotFoundPage from "./pages/404";

import Customers from "./components/customers/customers";
import DisplayCustomer from "./components/displayCustomer/displayCustomer";
import AddCustomer from "./components/addCustomer/addCustomer";
import UpdateCustomer from "./components/updateCustomer/updateCustomer";

function App() {
  return (
    <div>
      <BrowserRouter basename="/app">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/customers/display/:id" component={DisplayCustomer} />
          <Route exact path="/customers/add" component={AddCustomer} />
          <Route exact path="/customers/update/:id" component={UpdateCustomer} />
          <Route exact path="/404" component={NotFoundPage} />
          <Navigate to="/404" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
