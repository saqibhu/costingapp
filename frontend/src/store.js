import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import selectedProductIdReducer from "./Reducers/selectProductIdReducer";
import tblProductReducer from "./Reducers/tblProductReducer";
import tblPOrderReducer from "./Reducers/tblPOReducer";

/* const initialState = {
  selectedProductId: "",
  tblProduct: [],
  tblPOrder: []
}; */

const initialState = {};

const allReducers = combineReducers({
  selectedProductId: selectedProductIdReducer,
  tblProduct: tblProductReducer,
  tblPOrder: tblPOrderReducer
});
const middleware = [thunk];

const store = createStore(
  allReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
