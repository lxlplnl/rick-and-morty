import { CLOSE_SNACKBAR, OPEN_SNACKBAR, SET_HEADER, } from '../constants/runtime';

const initialState = {
  header: {
    title: 'Home Page',
    leftIconKey: null,
  },
  snackbar: {
    message: undefined,
    open: false
  }
};

export const runtime = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER:
      return {
        ...state,
        header: { ...state.header, ...action.data }
      };

    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbar: {
          message: action.message,
          open: true
        }
      };

    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbar: {
          message: undefined,
          open: false
        }
      };

    default:
      return state
  }
};


