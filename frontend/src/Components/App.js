import React, { Component } from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";

import NavBar from "./Layouts/navBar/NavBar";
import Details from "./tblproduct/Details";

//reducer
const initialState = {
  selectedProductId: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SELECTEDPRODUCTID":
      return {
        selectedProductId: action.productid
      };
    default:
      return state;
  }
};
//end reducer

const store = createStore(reducer);

class App extends Component {
  //state = {  }
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <Details />
      </Provider>
    );
  }
}

export default App;
