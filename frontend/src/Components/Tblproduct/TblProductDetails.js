import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  getTblProductDetail,
  updateTblProductDetail
} from "../../Actions/tblProduct/index";

import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

class TblProductDetails extends Component {
  componentDidMount() {
    this.props.getTblProductDetail(this.props.match.params.selectedProductId);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.selectedProductId !==
      prevProps.match.params.selectedProductId
    ) {
      this.props.getTblProductDetail(this.props.match.params.selectedProductId);
    }
  }

  onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    const tblProduct = {
      productid: this.props.match.params.selectedProductId,
      [name]: value
    };
    this.props.updateTblProductDetail(
      this.props.match.params.selectedProductId,
      tblProduct
    );
  };

  render() {
    let details;

    //console.log(this.props);

    if (this.props.tblProduct.payload) {
      details = (
        <React.Fragment>
          <TextField
            name="fulltitle"
            label="Fulltitle"
            value={this.props.tblProduct.payload.fulltitle}
            onChange={this.onChange} //consider onBlur
          />
          <br />
          <br />
          <TextField
            name="isbn13"
            label="ISBN 13"
            value={this.props.tblProduct.payload.isbn13}
            onChange={this.onChange}
          />
          <br />
          <br />
          <input
            name="input"
            value={this.props.tblProduct.payload.fulltitle}
            onChange={this.onChange}
          />
        </React.Fragment>
      );
    } else {
      details = null;
    }

    return <Fragment>{details}</Fragment>;
  }
}

TblProductDetails.propTypes = {
  getTblProductDetail: PropTypes.func.isRequired,
  updateTblProductDetail: PropTypes.func.isRequired
};

//Pass in here what you want to pull from redux
const mapStateToProps = state => {
  return {
    tblProduct: state.tblProduct
  };
};

export default connect(
  mapStateToProps,
  { getTblProductDetail, updateTblProductDetail }
)(TblProductDetails);
