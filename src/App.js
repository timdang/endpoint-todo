import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from './components/Loader';
import { Todo } from './components/Todo';
import { selectors, todoActions } from './features/todo';
import styles from './styles.module.css';

function App() {
  const dispatch = useDispatch();
  const { isLoading, results } = useSelector(selectors.getTodoState);

  useEffect(() => {
    dispatch({ type: todoActions.LOAD_TODOS });
  }, [dispatch]);

  return (
    <div className="App">
      <header className={styles.header}>Todos</header>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className={styles.wrapper}>
          {results?.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
