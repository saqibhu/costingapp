import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getTblProductDetail } from "../../Actions/tblProduct/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class TblProductDetails extends Component {
  /*Put some proptypes in here*/

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
        <Fragment>
          <TextField
            label="Fulltitle"
            value={this.props.tblProduct.payload.fulltitle}
          />
          <br />
          <br />
          <Button variant="contained" color="primary">
            Update
          </Button>
        </Fragment>
      );
    } else {
      details = null;
    }

    return <Fragment>{details}</Fragment>;
  }
}

//Pass in here what you want to pull from redux
const mapStateToProps = state => {
  return {
    tblProduct: state.tblProduct
  };
};

export default connect(
  mapStateToProps,
  { getTblProductDetail }
)(TblProductDetails);
