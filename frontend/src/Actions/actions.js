export const UPDATE_SELECTEDPRODUCTID = "updateSelectedProductId";

//action method
export function updateSelectedProductId(productid) {
  return {
    type: UPDATE_SELECTEDPRODUCTID,
    payload: {
      selectedProductId: productid
    }
  };
}
