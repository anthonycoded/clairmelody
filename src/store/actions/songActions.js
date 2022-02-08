import axios from "axios";
const Get_All_Songs = "Get_All_Songs";

export const GetSongs = () => async (dispatch) => {
  try {
    let response = await axios.get(
      "https://jaysworld-cb39f.uc.r.appspot.com/songs/get-songlist"
    );
    const data = response.data;

    if (response.status == 200) {
      dispatch({ type: Get_All_Songs, payload: data });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
