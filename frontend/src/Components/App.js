import React, { Component } from "react";

import Search from "./Search";
import SearchResults from "./SearchResults";
import Header from "./Header";

import { Provider } from "./Context";

class App extends Component {
  //state = {  }
  render() {
    return (
      <Provider>
        <div>
          <Header />
          <Search />
          <SearchResults />
        </div>
      </Provider>
    );
  }
}

export default App;
