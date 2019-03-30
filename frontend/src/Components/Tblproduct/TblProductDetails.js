import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  getTblProductDetail,
  updateTblProductDetail
} from "../../Actions/tblProduct/index";

import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

  render() {
    let details;

    if (this.props.tblProduct.payload) {
      details = (
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="fulltitle"
            label="Fulltitle"
            value={this.props.tblProduct.payload.fulltitle}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </form>
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
