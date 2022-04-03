import hoodie from "../../../assets/hoodie.jpg";
import hoodie2 from "../../../assets/hoodie2.jpg";

const Select_Product = "Select_Product";
const Added_To_Cart = "Added_To_Cart";
const Returned_From_Cart = "Returned_From_Cart";

const API_REQUEST_SENT = "API_REQUEST_SENT";
const API_REQUEST_COMPLETE = "API_REQUEST_COMPLETE";
const API_REQUEST_ERROR = "API_REQUEST_ERROR";
const GET_ALBUMS = "GET_ALBUMS";

const initialState = {
  status: false,
  error: false,
  selectedProduct: undefined,
  products: [
    {
      _id: 0,
      title: "hoodie",
      price: 29.99,
      smQty: 10,
      mdQt: 15,
      lgQty: 8,
      xlQty: 7,
      xxlQty: 5,
      description: [
        "Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.",
        'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"',
      ],
      tags: [],
      category: "Hoodies",
      likes: 0,
      images: [
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445",
      ],
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
      description: [
        "Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.",
        'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"',
      ],
      tags: [],
      category: "Hoodies",
      likes: 0,
      images: [
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445",
      ],
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
      description: [
        "Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.",
        'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"',
      ],
      tags: [],
      category: "Hoodies",
      likes: 0,
      images: [
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445",
      ],
    },
    {
      _id: 4,
      title: "SOFT MINI CROSSBODY BAG WITH KISS LOCK",
      description: [
        "Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.",
        'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"',
      ],
      price: 29.99,
      smQty: 10,
      mdQt: 15,
      lgQty: 8,
      xlQty: 7,
      xxlQty: 5,
      tags: [],
      category: "Bags",
      likes: 0,
      images: [
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369",
        "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445",
      ],
    },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Select_Product:
      return { ...state, selectedProduct: action.payload };

    case Added_To_Cart:
      let { type, id } = action.payload; //type = size
      let newState = state.products?.map((product) => {
        if (product._id == id) {
          return {
            ...product,
            [type]: product[type] - 1,
          };
        }
        //Leave rest of products unchanged
        return product;
      });
      return {
        ...state,
        products: newState,
      };

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
