import {
  _INFINITY,
  FETCH_CHARACTERS_FULFILLED,
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_REJECTED
} from '../constants/characters';
import Api from '../../services/api';
import { openSnackbar } from "./runtime";

const fulfilled = (data, page = 1, asInfinity) => ({
  type: FETCH_CHARACTERS_FULFILLED + (asInfinity ? _INFINITY : ''),
  data,
  page
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
    dispatch(fulfilled(response.data.data.characters, page))
  }).catch(err => {
    dispatch(rejected(err));
    dispatch(openSnackbar('An error occurred. Please try again later'));
  })
};

export const getCharactersInfinity = () => (dispatch, getState) => {
  const { characters: { pagination, page } } = getState();
  let nextPage = page + 1;
  if (pagination.pages < nextPage) return;

  dispatch(pending());

  return Api.getCharacters(nextPage).then(response => {
    dispatch(fulfilled(response.data.data.characters, nextPage, true))
  }).catch(err => {
    dispatch(rejected(err));
    dispatch(openSnackbar('An error occurred. Please try again later'));
  })
};
