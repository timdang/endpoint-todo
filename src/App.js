import './App.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { todoActions, selectors } from './features/todo';

function App() {
  const dispatch = useDispatch();
  const todoState = useSelector(selectors.getTodoState);
  return (
    <div className="App">
      <header className="App-header">Todo App</header>
      {todoState?.isLoading && <>isLoading</>}
      {!todoState?.isLoading && (
        <>
          <button
            type="button"
            onClick={() => dispatch({ type: todoActions.LOAD_TODOS })}
          >
            Click
          </button>
          {todoState?.results.map((el) => (
            <>{el.description}</>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
