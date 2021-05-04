import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { todosReducer } from './features/todo';
import { loadTodosEpic, updateTodosEpic } from './features/todo/epics';

const rootEpic = combineEpics(loadTodosEpic, updateTodosEpic);
const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  todo: todosReducer,
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
