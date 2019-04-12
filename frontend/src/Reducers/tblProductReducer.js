import {
  GET_TBLPRODUCT,
  ADD_TBLPRODUCT,
  UPDATE_TBLPRODUCT,
  UPDATE_TBLPRODUCTFORM
} from "../Actions/tblProduct/types";

export default function tblProductReducer(state = [], { type, payload }) {
  switch (type) {
    case GET_TBLPRODUCT:
      return { ...state, payload };
    case ADD_TBLPRODUCT:
      return {
        ...state,
        payload
      };
    case UPDATE_TBLPRODUCT:
      return {
        ...state,
        payload
      };
    case UPDATE_TBLPRODUCTFORM:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
}
