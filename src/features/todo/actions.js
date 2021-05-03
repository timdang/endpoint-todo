export const LOAD_TODOS = 'LOAD_TODOS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const SET_TODOS_LOADING = 'SET_TODOS_LOADING';

export const setTodosLoading = (loading) => ({
  type: SET_TODOS_LOADING,
  payload: loading,
});
