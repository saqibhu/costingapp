import { UPDATE_SELECTEDPRODUCTID } from "../Actions/actions";

export default function selectedProductIdReducer(
  state = "",
  { type, payload }
) {
  switch (type) {
    case UPDATE_SELECTEDPRODUCTID:
      //return {
      //selectedProductId: action.productid
      //console.log(action.payload);

      //returning the whole payload here was causing
      //selectedProductId to return as an object instead of a string
      return payload.selectedProductId;
    //return Object.assign({}, state, {
    //selectedProductId: payload.selectedProductId
    //});
    default:
      return state;
  }
}
