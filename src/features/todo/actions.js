export const LOAD_TODOS = 'LOAD_TODOS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const SET_TODOS_LOADING = 'SET_TODOS_LOADING';
export const SET_TODO_COMPLETE = 'SET_TODO_COMPLETE';

export const setTodosLoading = (loading) => ({
  type: SET_TODOS_LOADING,
  payload: loading,
});

export const setTodoComplete = (isComplete, todo) => ({
  type: SET_TODO_COMPLETE,
  payload: { ...todo, isComplete: isComplete },
});
