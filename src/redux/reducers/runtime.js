import { SET_HEADER, } from '../constants/runtime';

const initialState = {
  header: {
    title: 'Home Page',
    leftIconKey: null,
  },
};

export const runtime = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER:
      return {
        ...state,
        header: { ...state.header, ...action.data }
      };

    default:
      return state
  }
};


