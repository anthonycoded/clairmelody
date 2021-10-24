const initialState = {
  currentTrack: "",
  nextTrack: "",
  prevTrack: "",
};

export const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetCurrent_Track:
      return { ...state, currentTrack: action.payload };
    default:
      return state;
  }
};
