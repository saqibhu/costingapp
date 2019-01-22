import React, { Component } from "react";

import Search from "./Search/Search";
import SearchResults from "./Search/SearchResults";

import { Provider } from "./Context";

import NavBar from "./Layouts/navBar/NavBar";

class App extends Component {
  //state = {  }
  render() {
    return (
      <Provider>
        <NavBar />
      </Provider>
    );
  }
}

export default App;
