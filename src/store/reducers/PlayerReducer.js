const initialState = {
  currentTrack: undefined,
  error: undefined,
  playlist: [],
};
const Select_Track = "Select_Track";
const Update_State = "Update_State";
const Set_Play_List = "Set_Play_List";

export const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Select_Track:
      return { ...state, currentTrack: action.payload };
    case Update_State:
      return { ...state, ...action.payload };
    case Set_Play_List:
      return {
        ...state,
        playlist: action.payload,
        currentTrack: action.payload[0],
      };
    default:
      return state;
  }
};
