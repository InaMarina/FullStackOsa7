import loginService from "../services/login";
import storage from "../utils/storage";


const loggedInJSON = JSON.parse(
  window.localStorage.getItem("loggedBlogAppUser"),
);

const initialState = loggedInJSON ? loggedInJSON : null;

const loginReducer = (state = initialState, action) => {
  console.log("state now: ", state);
  console.log("action", action);

  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "LOGOUT": {
      return null;
    }
    default:
      return state;
  }
};

export const login = (username, password) => {
  return async (dispatch) => {
    const user = await loginService.login({ username, password });
    storage.saveUser(user);
    console.log({ user });
    console.log("called");
    dispatch({
      type: "LOGIN",
      data: user,
    });
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export default loginReducer;