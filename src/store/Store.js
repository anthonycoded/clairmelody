import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { songReducer } from "./reducers/songReducer";
import { PlayerReducer } from "./reducers/PlayerReducer";
import { beatReducer } from "./reducers/beatReducer";

const rootReducer = combineReducers({
  songs: songReducer,
  player: PlayerReducer,
  beats: beatReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
