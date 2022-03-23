const initialState = {
  currentTrack: undefined,
  error: undefined,
  playlist: [],
  recentlyPlayed: [],
};
const Select_Track = "Select_Track";
const Update_State = "Update_State";
const Set_Play_List = "Set_Play_List";
const Add_To_Recently_Played = "Add_To_Recently_Played";

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
    case Add_To_Recently_Played:
      return {
        ...state,
        recentlyPlayed: [...state.recentlyPlayed, action.payload],
      };
    default:
      return state;
  }
};
