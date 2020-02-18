import {
  CLEAR_CHARACTER,
  FETCH_CHARACTER_FULFILLED,
  FETCH_CHARACTER_PENDING,
  FETCH_CHARACTER_REJECTED
} from '../constants/character';
import Api from '../../services/api';
import { openSnackbar } from "./runtime";

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

export const clearCharacter = () => ({ type: CLEAR_CHARACTER });

export const getCharacter = (id) => dispatch => {
  dispatch(pending());
  return Api.getCharacter(id).then(response => {
    dispatch(fulfilled(response.data.data))
  }).catch(err => {
    dispatch(rejected(err));
    dispatch(openSnackbar('An error occurred. Please try again later'));
  })
};
