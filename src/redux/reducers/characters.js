import {
  FETCH_CHARACTERS_FULFILLED,
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_REJECTED
} from '../constants/characters';

const initialState = {
  error: {},
  pending: false,
  characters: []
};

export const characters = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_FULFILLED:
      return {
        ...state,
        pending: false,
        error: {},
        characters: action.data,
      };

    case FETCH_CHARACTERS_PENDING:
      return {
        ...state,
        pending: true,
        error: {}
      };

    case FETCH_CHARACTERS_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.error
      };

    default:
      return state
  }
};


