import React, { Component } from "react";
import axios from "axios";

import { Consumer } from "../Context";
import PropTypes from "prop-types";
import SearchResultsItem from "./SearchResultItem";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class SearchResults extends Component {
  /*state = {
    results: []
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/tblproduct/").then(res => {
      this.setState({
        results: res.data
      });

      if (this.props.search !== undefined) {
        console.log(this.props.value);
      }
    });
  }*/

  render() {
    //console.log(this.props);
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
              <TableRow key={result.productid}>
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

    //const resultItems = this.props.results.map(result => (
    //<SearchResultsItem key={result.productid} value={result} />
    //));

    return <div>{resultContent}</div>;
  }

  /*using context api*/
  /*render() {
    return (
      <Consumer>
        {value => {
          return <h3>{value.searchText}</h3>;
        }}
      </Consumer>
    );
  }*/
}

//SearchResults.propTypes = {
//results: PropTypes.array.isRequired
//};

export default SearchResults;
