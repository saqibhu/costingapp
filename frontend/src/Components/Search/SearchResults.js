import React, { Component } from "react";

//Material UI Imports
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//Redux Imports
import { connect } from "react-redux";
import { updateSelectedProductId } from "../../Actions/actions";

class SearchResults extends Component {
  handleClick = (event, id) => {
    this.props.dispatch(updateSelectedProductId(id));
  };

  render() {
    //console.log(this.state.selectedProduct);
    let resultContent;

    //destructure
    const { results } = this.props;

    if (results) {
      resultContent = (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ISBN</TableCell>
              <TableCell align="right">Full Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map(result => (
              <TableRow
                onClick={event => this.handleClick(event, result.productid)}
                key={result.productid}
              >
                <TableCell component="th" scope="row">
                  {result.isbn13}
                </TableCell>
                <TableCell align="right">{result.fulltitle}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    } else {
      resultContent = null;
    }

    return <div>{resultContent}</div>;
  }
}

//SearchResults.propTypes = {
// results: PropTypes.array.isRequired
//};
const mapStateToProps = state => ({
  selectedProductId: state.selectedProductId
});

export default connect(mapStateToProps)(SearchResults);
