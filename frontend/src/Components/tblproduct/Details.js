import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  render() {
    return <h3>{this.props.selectedProductId}</h3>;
  }
}

//Pass in here what you want to pull from redux
const mapStateToProps = state => {
  return {
    selectedProductId: state.selectedProductId
  };
};

export default connect(mapStateToProps)(Details);
