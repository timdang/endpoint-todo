import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { todoActions, utils } from '../features/todo';
import styles from './styles.module.css';
import classNames from 'classnames';
export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const onCompletedClick = (el, todo) => {
    console.warn(el.target.checked, todo);
    dispatch(todoActions.setTodoComplete(false));
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
        {todo.description}
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
