import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTblProductDetail } from "../../Actions/tblProduct/index";

class TblProductNew extends Component {
  state = {
    productid: "",
    firstimpproductid: "",
    fulltitle: "",
    isbn13: ""
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  handleSubmit = e => {
    e.preventDefault();
    const { productid, firstimpproductid, fulltitle, isbn13 } = this.state;
    const tblproduct = { productid, firstimpproductid, fulltitle, isbn13 };
    this.props.addTblProductDetail(tblproduct);
  };

  render() {
    const { productid, firstimpproductid, fulltitle, isbn13 } = this.state;
    return (
      <Fragment>
        <Typography variant="h4">Create a new tblproduct item</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="productid"
            label="Product id"
            value={productid}
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            name="firstimpproductid"
            label="First imp product id"
            value={firstimpproductid}
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            name="fulltitle"
            label="Fulltitle"
            value={fulltitle}
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            name="isbn13"
            label="ISBN 13"
            value={isbn13}
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </form>
      </Fragment>
    );
  }
}

TblProductNew.propTypes = {
  addTblProductDetail: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTblProductDetail }
)(TblProductNew);
