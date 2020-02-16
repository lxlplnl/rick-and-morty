import { combineReducers } from 'redux';
import { characters } from "./characters";
import { character } from "./character";
import { runtime } from "./runtime";

const rootReducer = combineReducers({
  characters,
  character,
  runtime,
});

export default rootReducer;
