import { UPDATE_SELECTEDPRODUCTID } from "../Actions/selectedProductId";

export default function selectedProductIdReducer(
  state = 0, //this is always an id i.e. a number and immutable
  { type, payload }
) {
  switch (type) {
    case UPDATE_SELECTEDPRODUCTID:
      return payload.selectedProductId;
    default:
      return state;
  }
}
