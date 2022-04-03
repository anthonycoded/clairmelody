import { GetRequest, PostRequest } from "../../utils/ApiCalls";
import HandleError from "../../utils/HandleError";
const Add_To_Cart = "Add_To_Cart";

export const AddToCart = (payload) => async (dispatch) => {
  try {
    //let res = await PostRequest();

    // if (res.status == 201) {
    //   dispatch({ type: New_Beat, payload: payload });
    // }

    dispatch({ type: Add_To_Cart, payload: payload });
  } catch (error) {
    HandleError(error, dispatch);
  }
};
