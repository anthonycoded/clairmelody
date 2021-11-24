import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SongsReducer } from "./reducers/SongsReducer";
import { PlayerReducer } from "./reducers/PlayerReducer";
import { BeatsReducers } from "./reducers/BeatsReducer";

const rootReducer = combineReducers({
  songs: SongsReducer,
  player: PlayerReducer,
  beats: BeatsReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
