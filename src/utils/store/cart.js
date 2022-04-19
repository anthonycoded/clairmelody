import { useSelector } from "react-redux";

export const CartLength = () => {
  const cart = useSelector((state) => state.cart.cart);
  let length = 0;
  for (let i = 0; i < cart?.length; i++) {
    const product = cart[i];

    length = length + product.qty;
  }

  return length;
};
