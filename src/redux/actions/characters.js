import {
  FETCH_CHARACTERS_FULFILLED,
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_REJECTED
} from '../constants/characters';
import Api from '../../services/api';

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

export const getCharacters = (page) => dispatch => {
  dispatch(pending());
  return Api.getCharacters(page).then(response => {
    dispatch(fulfilled(response.data.data.characters))
  }).catch(err => {
    dispatch(rejected(err))
  })
};
