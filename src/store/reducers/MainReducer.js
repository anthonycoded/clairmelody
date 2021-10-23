const initialState = [];

const New_Merchant = "New_Merchant";
const Edit_Merchant = "Edit_Merchant";
const Delete_Merchant = "Delete_Merchant";

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case New_Merchant:
      return [...state, action.payload];

    case Edit_Merchant:
      let { name, address1, address2, city, addressState, zip, account, id } =
        action.payload;
      return state.map((merchant) => {
        if (merchant.id === id) {
          return {
            ...merchant,
            name: name,
            address1: address1,
            address2: address2,
            city: city,
            addressState: addressState,
            zip: zip,
            account: account,
          };
        }
        //Leave rest of merchants unchanged
        return merchant;
      });

    case Delete_Merchant:
      console.log("Reducer called");
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
