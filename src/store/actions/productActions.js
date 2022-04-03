import HandleError from "../../utils/HandleError";
import { GetRequest, PostRequest } from "../../utils/ApiCalls";

const Global = require("../../utils/Global");
const Select_Product = "Select_Product";
const Added_To_Cart = "Added_To_Cart";
const API_REQUEST_SENT = "API_REQUEST_SENT";
const API_REQUEST_COMPLETE = "API_REQUEST_COMPLETE";
const API_REQUEST_ERROR = "API_REQUEST_ERROR";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const SelectProduct = (payload) => async (dispatch) => {
  try {
    //let res = await PostRequest();

    // if (res.status == 201) {
    //   dispatch({ type: New_Beat, payload: payload });
    // }
    wait(50).then(() => dispatch({ type: Select_Product, payload: payload }));
  } catch (error) {
    HandleError(error, dispatch);
  }
};
export const AddedToCart = (payload) => async (dispatch) => {
  try {
    //let res = await PostRequest();

    // if (res.status == 201) {
    //   dispatch({ type: New_Beat, payload: payload });
    // }
    console.log("Product added to cart, removed 1qty");
    wait(50).then(() => dispatch({ type: Added_To_Cart, payload: payload }));
  } catch (error) {
    HandleError(error, dispatch);
  }
};
