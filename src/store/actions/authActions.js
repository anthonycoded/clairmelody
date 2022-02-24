import axios from "axios";

const USER_LOGIN_ATTEMPT = "USER_LOGIN_ATTEMPT";
const USER_LOGIN_SUCCESS1 = "USER_LOGIN_SUCCESS1";
const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
const CLEAR_LOGIN_STATE = "CLEAR_LOGIN_STATE";
const CHECK_USERNAME_SUCCESS = "CHECK_USERNAME_SUCCESS";
const CHECK_ANSWER_SUCCESS = "CHECK_ANSWER_SUCCESS";
const UPDATE_PASSWORD_FAILED = "UPDATE_PASSWORD_FAILED";

axios.defaults.withCredentials = true;

/////////////////////////////////LOGIN ACTIONs///////////////////////////////////////////////
export const userLoginMain = (user) => async (dispatch) => {
  const { email, password } = user;

  try {
    const requestData = {
      email: "admin@email.com",
      password: "password",
    };

    let response = await axios.post(
      "https://jaysworld-cb39f.uc.r.appspot.com/auth/login",
      requestData,
      {
        headers: { "Content-type": "application/json; charset=utf-8" },
        withCredentials: true,
      }
    );
    //console.log(response.data);

    if (response.status == 200) {
      //Login success = add response msg to state then navigate to homestack
      dispatch({ type: USER_LOGIN_SUCCESS1, payload: response.data });
    }
  } catch (error) {
    //   //Password incorrect
    if (error.response.status == 401) {
      console.log(error.response.data);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error: "Username or Password incorrect. Please try again",
          status: 401,
        },
      });
    }
    if (error.response.status == 500) {
      console.log(error.response.data);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error: "Seems like our servers are down, please try again later",
          status: 401,
        },
      });
    }
    //   //Username incorrect, does not match records
    //   else if (error.response.status == 404) {
    //     dispatch({
    //       type: USER_LOGIN_FAIL,
    //       payload: {
    //         error:
    //           "Username did not match any account. If you do not have an account please create a new one ",
    //         status: 404,
    //       },
    //     });
    //   } else {
    //     console.log(error);
    //     //All other failed codes
    //     dispatch({
    //       type: USER_LOGIN_FAIL,
    //       payload:
    //         error.response && error.response.data.message
    //           ? error.response.data.message
    //           : error.message,
    //     });
    //   }
  }
};

export const newUser = (payload) => async (dispatch) => {
  const { username, password, email } = payload;

  try {
    let data = {
      username,
      password,
      email,
    };
    let response = await axios.post(
      "https://jaysworld-cb39f.uc.r.appspot.com/auth/register",
      data,
      {
        withCredentials: false,
        headers: {},
      }
    );
  } catch (error) {
    console.log("error: ", error);
  }
};
///////////////////////////////////Update PASSWORD ///////////////////////////////////////////////////////////////
export const updatePassword = (payload) => async (dispatch) => {
  const { oldPassword, newPassword, confirmPassword } = payload;

  try {
    const requestData = {
      channel: "mTeller",
      oldPassword: "Demos1234",
      password: "Demos1234",
      newPassword: "",
    };

    let response = await axios.post("", requestData, {
      headers: { "Content-type": "application/json; charset=utf-8" },
      withCredentials: true,
    });

    if (response.status == 200) {
      //Login success = add response msg to state then navigate to homestack
      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: true });
      //await AsyncStorage.setItem("cookie", response.headers["set-cookie"][0]);
    }
  } catch (error) {
    //Password incorrect
    if (error.response.status == 401) {
      dispatch({
        type: UPDATE_PASSWORD_FAILED,
        payload: {
          error: "Password incorrect. Please try again",
          status: 401,
        },
      });
    } else {
      //All other failed codes
      dispatch({
        type: UPDATE_PASSWORD_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
};

///////////////////////////////////FORGOT PASSWORD ///////////////////////////////////////////////////////////////
export const checkUsername = (payload) => async (dispatch) => {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  try {
    //Send request to API
    // let response = await axios.post("backend/api/route", payload, {
    //   headers: { "Content-type": "application/json; charset=utf-8" },
    // });
    dispatch({ type: CHECK_USERNAME_SUCCESS, payload: true });

    // if (response.status == 200) {
    //   dispatch({ type: "Call success Reducer" });
    // } else if (response.status == 401) {
    //   dispatch({ type: "Call failed reducer" });
    // } else {
    //   dispatch({ type: "Call failed reducer" });
    // }
  } catch (error) {
    console.log(error);
  }
};
export const checkAnswer = (payload) => async (dispatch) => {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  try {
    //Send request to API
    // let response = await axios.post("backend/api/route", payload, {
    //   headers: { "Content-type": "application/json; charset=utf-8" },
    // });
    dispatch({ type: CHECK_ANSWER_SUCCESS, payload: true });

    // if (response.status == 200) {
    //   dispatch({ type: "Call success Reducer" });
    // } else if (response.status == 401) {
    //   dispatch({ type: "Call failed reducer" });
    // } else {
    //   dispatch({ type: "Call failed reducer" });
    // }
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword = (payload) => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_LOGIN_STATE });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////
export const clearState = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_LOGIN_STATE });
    localStorage.setItem("cookie", undefined);
    localStorage.setItem("admin", false);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
