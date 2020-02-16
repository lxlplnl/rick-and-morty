import {
  FETCH_CHARACTER_FULFILLED,
  FETCH_CHARACTER_PENDING,
  FETCH_CHARACTER_REJECTED
} from '../constants/character';
import Api from '../../services/api';

const fulfilled = data => ({
  type: FETCH_CHARACTER_FULFILLED,
  data
});

const rejected = error => ({
  type: FETCH_CHARACTER_REJECTED,
  error
});

const pending = () => ({
  type: FETCH_CHARACTER_PENDING
});

export const getCharacter = (id) => dispatch => {
  dispatch(pending());
  return Api.getCharacter(id).then(response => {
    dispatch(fulfilled(response.data.data))
  }).catch(err => {
    dispatch(rejected(err))
  })
};
