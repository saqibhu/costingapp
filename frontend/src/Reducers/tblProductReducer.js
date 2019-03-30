import { GET_TBLPRODUCT, ADD_TBLPRODUCT } from "../Actions/tblProduct/types";

export default function tblProductReducer(state = [], { type, payload }) {
  switch (type) {
    case GET_TBLPRODUCT:
      return {
        ...state,
        payload
      };
    case ADD_TBLPRODUCT:
      return {
        ...state,
        //tblProduct: [...state, payload]
        payload
      };
    default:
      return state;
  }
}
