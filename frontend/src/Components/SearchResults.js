import React, { Component } from "react";

import { Consumer } from "./Context";

class SearchResults extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return <h3>{value.searchText}</h3>;
        }}
      </Consumer>
    );
  }
}

export default SearchResults;
