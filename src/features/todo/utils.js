export const formatDate = (val) =>
  (val && new Date(val).toLocaleDateString('en-US')) || '';

export const isOverdue = (val) => val && new Date(val) < new Date();

export const toDoMapper = (todos) => {
  let todosWithMetadata = todos.map((todo) => ({
    ...todo,
    isOverdue: isOverdue(todo.dueDate),
  }));
  const minDate = '1/1/1970';
  return [
    ...todosWithMetadata.filter((todo) => !todo.isComplete && todo.isOverdue),
    ...todosWithMetadata
      .filter((todo) => !todo.isOverdue && !todo.isComplete)
      .sort(
        (a, b) =>
          new Date(b.dueDate || minDate) - new Date(a.dueDate || minDate)
      ),
    ...todosWithMetadata.filter((todo) => todo.isComplete),
  ];
};

export const toDoPatcher = (todos, todo) => {
  const idx = todos.findIndex((el) => el.id == todo.id);
  todos.splice(idx, 1, todo);
  return todos;
};
