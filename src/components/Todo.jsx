import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import { todoActions, utils } from '../features/todo';
import styles from './todo.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const onCompletedClick = (el, todo) => {
    dispatch(todoActions.setTodoComplete(el?.target?.checked, todo));
  };
  return (
    <div
      className={classNames(styles.todo, {
        [styles.overdue]: todo.isOverdue,
        [styles.complete]: todo.isComplete,
      })}
    >
      <div className={styles.description}>
        <input
          type="checkbox"
          onChange={(el) => onCompletedClick(el, todo)}
          checked={todo.isComplete}
        ></input>
        <span className={styles.truncate}>{todo.description}</span>
      </div>
      {todo.dueDate && (
        <div className={styles.date}>{utils.formatDate(todo.dueDate)}</div>
      )}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.any.isRequired,
};
