const API_REQUEST_SENT = "API_REQUEST_SENT";
const API_REQUEST_COMPLETE = "API_REQUEST_COMPLETE";
const API_REQUEST_ERROR = "API_REQUEST_ERROR";
const GET_ALBUMS = "GET_ALBUMS";
import hoodie from "../../../assets/hoodie.jpg";
import hoodie2 from "../../../assets/hoodie2.jpg";

const initialState = {
  status: false,
  error: false,
  hoodies: [
    {
      _id: 0,
      title: "hoodie",
      price: 29.99,
      smQty: 10,
      mdQt: 15,
      lgQty: 8,
      xlQty: 7,
      xxlQty: 5,
      description: "",
      tags: [],
      category: "Hoodies",
      likes: 0,
      images: hoodie,
    },
    {
      _id: 1,
      title: "hoodie2",
      price: 29.99,
      smQty: 10,
      mdQt: 15,
      lgQty: 8,
      xlQty: 7,
      xxlQty: 5,
      description: "",
      tags: [],
      category: "Hoodies",
      likes: 0,
      images: hoodie2,
    },
    {
      _id: 2,
      title: "hoodie3",
      price: 29.99,
      smQty: 10,
      mdQt: 15,
      lgQty: 8,
      xlQty: 7,
      xxlQty: 5,
      description: "",
      tags: [],
      category: "Hoodies",
      likes: 0,
      images: [],
    },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return [...state, action.payload];

    case API_REQUEST_SENT:
      return { ...state, status: "Loading" };

    case API_REQUEST_COMPLETE:
      return {
        ...state,
        status: false,
        error: false,
      };

    default:
      return state;
  }
};
