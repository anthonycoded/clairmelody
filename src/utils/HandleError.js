const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function HandleError(error, dispatch) {
  if (error?.response) {
    if (error?.response.status == 400) {
      dispatch({
        type: API_Request_Error,
        payload: "Bad Request, Contact your financial institution",
      });
      wait(50).then(() => dispatch({ type: API_Request_Completed }));
      return;
    }
    if (error?.response.status == 500) {
      dispatch({
        type: API_Request_Error,
        payload:
          "Sorry, looks like our systems may be down.Please try again later.",
      });
      wait(50).then(() => dispatch({ type: API_Request_Completed }));
    }
  }
}
export default HandleError;
