const initialState = [];

const New_Beat = "New_Beat";
const Get_All_Beats = "Get_All_Beats";

export const beatReducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_All_Beats:
      return action.payload;
    case New_Beat:
      return [...state, action.payload];

    default:
      return state;
  }
};
