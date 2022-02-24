const initialState = [];

const New_Song = "New_Song";
const Get_All_Songs = "Get_All_Songs";

export const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_All_Songs:
      return [...state, ...action.payload];
    case New_Song:
      return [...state, action.payload];

    default:
      return state;
  }
};
