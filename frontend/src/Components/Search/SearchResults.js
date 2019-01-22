import React, { Component } from "react";
import axios from "axios";

import { Consumer } from "../Context";

import SearchResultsItem from "./SearchResultItem";

class SearchResults extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/tblproduct/").then(res => {
      this.setState({
        results: res.data
      });
      //console.log(res.data);
    });
  }

  render() {
    const resultItems = this.state.results.map(result => (
      <SearchResultsItem key={result.productid} value={result} />
    ));

    return <ul>{resultItems}</ul>;
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

export default SearchResults;
