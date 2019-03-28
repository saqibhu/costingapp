import { UPDATE_SELECTEDPRODUCTID } from "../Actions/selectedProductId";

export default function selectedProductIdReducer(
  state = "",
  { type, payload }
) {
  switch (type) {
    case UPDATE_SELECTEDPRODUCTID:
      return payload.selectedProductId;
    default:
      return state;
  }
}
