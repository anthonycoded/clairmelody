const Add_To_Cart = "Add_To_Cart";

const initialState = {
  cart: [],
  status: false,
  error: undefined,
  total: undefined,
  tax: undefined,
  subtotal: undefined,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
