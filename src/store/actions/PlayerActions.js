const Select_Track = "Select_Track";
const Update_State = "Update_State";
const Set_Play_List = "Set_Play_List";
const Add_To_Recently_Played = "Add_To_Recently_Played";

export const SelectTrack = (payload) => async (dispatch) => {
  try {
    console.log("Action payload", payload);
    dispatch({ type: Select_Track, payload: payload });
  } catch (error) {
    console.log(error);
  }
};
export const GetTracks = (payload) => async (dispatch) => {
  try {
    console.log("Action payload", payload);
    dispatch({ type: Select_Track, payload: payload });
  } catch (error) {
    console.log(error);
  }
};

export const UpdateState = (payload) => async (dispatch) => {
  try {
    console.log("Action payload", payload);
    dispatch({ type: Update_State, payload: payload });
  } catch (error) {
    console.log(error);
  }
};

export const SetPlayList = (payload) => async (dispatch) => {
  try {
    console.log("Action payload", payload);
    dispatch({ type: Set_Play_List, payload: payload });
  } catch (error) {
    console.log(error);
  }
};

export const RecentlyPlayed = (payload) => async (dispatch) => {
  try {
    dispatch({ type: Add_To_Recently_Played, payload: payload });
  } catch (error) {
    console.log(error);
  }
};
