import { todoActions } from '.';

const initialState = {
  results: [],
  isLoading: true,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActions.LOAD_TODOS_SUCCESS: {
      return { ...state, results: action.payload };
    }
    case todoActions.SET_TODOS_LOADING:
      return { ...state, isLoading: action.payload };
    case todoActions.SET_TODO_COMPLETE:
    default:
      return state;
  }
};
