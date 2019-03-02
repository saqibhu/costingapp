import React, { Component } from "react";
import SearchResults from "./SearchResults";
import Input from "@material-ui/core/Input";
import axios from "axios";

class SearchInput extends Component {
  state = {
    search: "",
    results: []
  };

  handleChange = event => {
    const val = event.target.value;
    this.setState({ [event.target.name]: val }, function() {
      if (val == "") {
        this.setState({ results: [] });
      } else {
        axios
          .get(`http://localhost:8000/api/search?search=${this.state.search}`)
          .then(res => this.setState({ results: res.data }))
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    //console.log(this.state.results);
    return (
      <div>
        <Input
          name="search"
          value={this.state.search}
          placeholder="Search"
          onChange={this.handleChange}
        />

        {/*Key bit here*/}
        {this.state.results.length > 0 ? (
          <SearchResults results={this.state.results} />
        ) : null}
      </div>
    );
  }
}

export default SearchInput;
