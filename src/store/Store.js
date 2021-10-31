import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MainReducer } from "./reducers/MainReducer";
import { SongsReducer } from "./reducers/SongsReducer";
import { PlayerReducer } from "./reducers/PlayerReducer";
import { BeatsReducers } from "./reducers/BeatsReducer";

const rootReducer = combineReducers({
  main: MainReducer,
  songs: SongsReducer,
  player: PlayerReducer,
  beats: BeatsReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
