import { combineReducers } from 'redux';
import { characters } from "./characters";
import { character } from "./character";

const rootReducer = combineReducers({
  characters,
  character
});

export default rootReducer;
