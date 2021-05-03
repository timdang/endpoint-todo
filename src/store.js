/* eslint-disable no-underscore-dangle */
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { todosReducer } from './features/todo';
import { updateSearchEpic } from './features/todo/epics';

const rootEpic = combineEpics(updateSearchEpic);
const epicMiddleware = createEpicMiddleware();
/* Create root reducer, containing all features of the application */
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
