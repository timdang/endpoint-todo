import { todoActions } from '.';

const initialState = {
  results: [],
  isLoading: false,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActions.LOAD_TODOS_SUCCESS: {
      return { ...state, results: action.payload };
    }
    case todoActions.SET_TODOS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
