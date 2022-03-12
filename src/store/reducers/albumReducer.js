const API_REQUEST_SENT = "API_REQUEST_SENT";
const API_REQUEST_COMPLETE = "API_REQUEST_COMPLETE";
const API_REQUEST_ERROR = "API_REQUEST_ERROR";
const GET_ALBUMS = "GET_ALBUMS";

const initialState = {
  status: false,
  error: false,
  albums: [],
};

export const albumReducer = (state = initialState, action) => {
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
