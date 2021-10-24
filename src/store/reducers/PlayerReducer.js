const initialState = {
  currentTrack: 1,
  nextTrack: "",
  prevTrack: "",
};
const Select_Track = "Select_Track";

export const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Select_Track:
      return { ...state, currentTrack: action.payload };
    default:
      return state;
  }
};
