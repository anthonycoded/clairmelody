import { createStore, combineReducers } from "redux";
import { MainReducer } from "./reducers/MainReducer";

const rootReducer = combineReducers({
  main: MainReducer,
});

const store = createStore(rootReducer);

export default store;
