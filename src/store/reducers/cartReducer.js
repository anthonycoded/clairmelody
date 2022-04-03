const Add_To_Cart = "Add_To_Cart";
const Remove_From_Cart = "Remove_From_Cart";

const initialState = {
  cart: [], //objects
  status: false,
  error: undefined,
  total: undefined,
  tax: undefined,
  subtotal: undefined,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      let cart = state.cart;
      for (let i = 0; i < cart?.length; i++) {
        const product = cart[i];
        if (product._id == action.payload?._id) {
          cart = state.cart?.map((product) => {
            if (product._id == action.payload._id) {
              return {
                ...product,
                qty: product.qty + 1, //increment Quantity
              };
            }
            return product;
          });
          return {
            ...state,
            status: true,
            cart: cart,
          };
        }
      }
      return {
        ...state,
        status: true,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case Remove_From_Cart:
      let array = state.cart.filter((item) => item != action.payload);
      return {
        ...state,
        status: true,
        cart: array,
      };
    default:
      return state;
  }
};
