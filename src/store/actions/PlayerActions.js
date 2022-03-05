const Select_Track = "Select_Track";
const Update_State = "Update_State";
const Set_Play_List = "Set_Play_List";

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
