const Select_Track = "Select_Track";

export const SelectTrack = (payload) => async (dispatch) => {
  try {
    console.log("Action payload", payload);
    dispatch({ type: Select_Track, payload: payload });
  } catch (error) {
    console.log(error);
  }
};
