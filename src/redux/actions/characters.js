import {
  FETCH_CHARACTERS_FULFILLED,
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_REJECTED
} from '../constants/characters';


const fulfilled = data => ({
  type: FETCH_CHARACTERS_FULFILLED,
  data
});

const rejected = error => ({
  type: FETCH_CHARACTERS_REJECTED,
  error
});

const pending = () => ({
  type: FETCH_CHARACTERS_PENDING
});

export const getCharacters = () => dispatch => {
  dispatch(pending());
  //Todo MUST use axios service
  //Todo MUST integrate rick and morty api
  setTimeout(() => {
    dispatch(fulfilled(['a','b','c']))
  }, 1000);
};
