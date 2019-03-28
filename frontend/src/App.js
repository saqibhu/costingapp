import React, { Component } from "react";
import BaseRouter from "./Routes";
import { Provider } from "react-redux";

import store from "./store";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Layouts/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <BaseRouter />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
