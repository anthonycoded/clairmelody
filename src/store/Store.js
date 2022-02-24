import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { songReducer } from "./reducers/songReducer";
import { PlayerReducer } from "./reducers/PlayerReducer";
import { beatReducer } from "./reducers/beatReducer";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
  songs: songReducer,
  player: PlayerReducer,
  beats: beatReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
