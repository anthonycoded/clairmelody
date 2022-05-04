const CHECK_USERNAME_SUCCESS = "CHECK_USERNAME_SUCCESS";
const CHECK_ANSWER_SUCCESS = "CHECK_ANSWER_SUCCESS";
const USER_LOGIN_SUCCESS1 = "USER_LOGIN_SUCCESS1";
const USER_LOGIN_ATTEMPT = "USER_LOGIN_ATTEMPT";
const USER_LOGIN_FAIL = " USER_LOGIN_FAIL";
const CLEAR_LOGIN_STATE = "CLEAR_LOGIN_STATE";
const Check_Auth = "Check_Auth";

//SET INITIAL STATE
const initialState = {
  loading: false,
  message: null,
  error: null,
  success: false,
  status: false,
  attempts: 0,
  usernameSuccess: false,
  questionsSuccess: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    ///LOGIN ATTEMPT
    case USER_LOGIN_ATTEMPT:
      return {
        ...state,
        message: null,
        loading: true,
        success: false,
      };

    case Check_Auth:
      return {
        ...state,
        success: action.payload.success,
        admin: action.payload.admin,
      };

    case CLEAR_LOGIN_STATE:
      return {
        loading: false,
        message: null,
        error: null,
        success: false,
        status: false,
        attempts: false,
        usernameSuccess: false,
        questionsSuccess: false,
      };
    case USER_LOGIN_SUCCESS1:
      let { admin, success, user, token, id } = action.payload;

      return {
        ...state,
        admin,
        success,
        user,
        token,
        id,
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: false,
        status: action.payload.status,
      };
    case CHECK_USERNAME_SUCCESS:
      return {
        ...state,
        usernameSuccess: true,
      };

    case CHECK_ANSWER_SUCCESS:
      return {
        ...state,
        questionsSuccess: true,
      };

    default:
      return state;
  }
};
