import { createStore, combineReducers } from "redux";
import { MainReducer } from "./reducers/MainReducer";
import { SongsReducer } from "./reducers/SongsReducer";

const rootReducer = combineReducers({
  main: MainReducer,
  songs: SongsReducer,
});

const store = createStore(rootReducer);

export default store;
