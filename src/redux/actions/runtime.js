import { CLOSE_SNACKBAR, OPEN_SNACKBAR, SET_HEADER } from '../constants/runtime';

export const setHeader = data => ({
  type: SET_HEADER,
  data
});

export const openSnackbar = message => ({
  type: OPEN_SNACKBAR,
  message
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});
