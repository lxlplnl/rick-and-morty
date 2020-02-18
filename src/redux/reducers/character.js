import {
  CLEAR_CHARACTER,
  FETCH_CHARACTER_FULFILLED,
  FETCH_CHARACTER_PENDING,
  FETCH_CHARACTER_REJECTED
} from '../constants/character';

const initialState = {
  error: {},
  pending: true,
  character: {},
};

export const character = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_FULFILLED:
      return {
        ...state,
        pending: false,
        error: {},
        character: action.data.character,
      };

    case FETCH_CHARACTER_PENDING:
      return {
        ...state,
        pending: true,
        error: {}
      };

    case FETCH_CHARACTER_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.error
      };

    case CLEAR_CHARACTER:
      return {
        ...initialState
      }

    default:
      return state
  }
};


