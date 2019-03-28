import { GET_TBLPRODUCT } from "../Actions/tblProduct/types";

export default function tblProductReducer(state = [], { type, payload }) {
  switch (type) {
    case GET_TBLPRODUCT:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
}
