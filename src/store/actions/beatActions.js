import axios from "axios";
const Get_All_Beats = "Get_All_Beats";
const New_Beat = "New_Beat";

export const PublishBeat = (payload) => async (dispatch) => {
  try {
    const date = Date.now();
    const newBeat = new FormData();
    newBeat.append("title", payload.title);
    newBeat.append("leasePrice", payload.leasePrice);
    newBeat.append("purchasePrice", payload.purchasePrice);
    newBeat.append("credits", payload.credits);
    newBeat.append("image", payload.image);
    newBeat.append("url", payload.audioUrl);
    newBeat.append("created", date);

    let res = await axios.post(
      "https://jaysworld-cb39f.uc.r.appspot.com/beats/upload-beat",
      newBeat,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (res.status == 201) {
      dispatch({ type: New_Beat, payload: payload });
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

export const GetBeats = () => async (dispatch) => {
  try {
    let response = await axios.get(
      "https://jaysworld-cb39f.uc.r.appspot.com/beats/get-all"
    );
    const data = response.data;

    if (response.status == 200) {
      dispatch({ type: Get_All_Beats, payload: data });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

export const DeleteBeat = (id) => async (dispatch) => {
  try {
    let response = await axios.delete(
      "https://jaysworld-cb39f.uc.r.appspot.com/beats/delete-beat",
      id
    );
    const data = response.data;

    if (response.status == 200) {
      dispatch({ type: Get_All_Beats, payload: data });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
