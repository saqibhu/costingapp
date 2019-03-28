export const UPDATE_SELECTEDPRODUCTID = "updateSelectedProductId";

//action creator
export function updateSelectedProductId(productid) {
  return {
    type: UPDATE_SELECTEDPRODUCTID,
    payload: {
      selectedProductId: productid
    }
  };
}
