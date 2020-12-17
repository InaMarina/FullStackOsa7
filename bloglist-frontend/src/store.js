import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import notificationReducer from "./reducers/notificationReducer";
import blogReducer from "./reducers/blogReducer";
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer";


const reducer = combineReducers({
  blogs: blogReducer,
  notification: notificationReducer,
  users: userReducer,
  login: loginReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => console.log(store.getState()));

export default store;
