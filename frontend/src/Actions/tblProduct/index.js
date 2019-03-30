import { GET_TBLPRODUCT, UPDATE_TBLPRODUCT, ADD_TBLPRODUCT } from "./types";
import axios from "axios";

const PATH_BASE = "http://localhost:8000/api";
const PATH_TBLPRODUCT = "/tblproduct/";

const APIURL = `${PATH_BASE}${PATH_TBLPRODUCT}`;

//action creator
export const getTblProductDetail = productid => dispatch => {
  axios
    .get(`${APIURL}${productid}`)
    .then(response => {
      dispatch({
        type: GET_TBLPRODUCT,
        payload: response.data
      });
    })
    .catch(error => {
      throw error;
    });
};

export const updateTblProductDetail = productid => dispatch => {
  axios
    .put(`${APIURL}${productid}`)
    .then(response => {
      dispatch({
        type: UPDATE_TBLPRODUCT,
        payload: response.data
      });
    })
    .catch(error => {
      throw error;
    });
};

export const addTblProductDetail = tblproduct => dispatch => {
  axios
    .post(`${APIURL}`, tblproduct)
    .then(response => {
      dispatch({
        type: ADD_TBLPRODUCT,
        payload: response.data
      });
    })
    .catch(error => {
      throw error;
    });
};