const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION": {
      return action.notification;
    }
    case "UNSET_NOTIFICATION": {
      return action.notification;
    }
    default:
      return state;
  }
};
var timeoutID;

export const setNotification = (notification) => {
  return (dispatch) => {
    dispatch({
      type: "SET_NOTIFICATION",
      notification,
    });
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      dispatch({
        type: "UNSET_NOTIFICATION",
        notification: null,
      });
    }, 5000);
  };
};

export default notificationReducer;
