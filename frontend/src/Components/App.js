import React, { Component } from "react";

import NavBar from "./Layouts/navBar/NavBar";
import Details from "./tblproduct/Details";
import Dashboard from "./Dashboard";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/*If there's a product id in redux load the details component otherwise dashboard*/}
        {this.props.selectedProductId != "" ? <Details /> : <Dashboard />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedProductId: state.selectedProductId
  };
};

export default connect(mapStateToProps)(App);
