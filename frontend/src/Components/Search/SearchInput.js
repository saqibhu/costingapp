import React, { Component } from "react";
import SearchResults from "./SearchResults";
import Input from "@material-ui/core/Input";
import axios from "axios";

const PATH_BASE = "http://localhost:8000/api";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "search=";
const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}`;

class SearchInput extends Component {
  state = {
    search: "",
    results: []
  };

  handleChange = event => {
    const val = event.target.value;
    this.setState({ [event.target.name]: val }, function() {
      if (val === "") {
        this.setState({ results: [] });
      } else {
        axios
          .get(`${url}${this.state.search}`)
          .then(res => this.setState({ results: res.data }))
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    return (
      <div>
        <Input
          name="search"
          value={this.state.search}
          placeholder="Search"
          onChange={this.handleChange}
        />

        {/*conditional render*/}
        {this.state.results.length > 0 ? (
          <SearchResults results={this.state.results} />
        ) : null}
      </div>
    );
  }
}

export default SearchInput;
