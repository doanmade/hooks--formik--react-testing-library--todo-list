import React from 'react';

const Todo = ({ todo: { task, completed, id }, handleToggleComplete }) => {
  return (
    <div
      style={completed ? { textDecoration: 'line-through' } : null}
      onClick={() => handleToggleComplete(id)}
      data-testid='todo'>
      {task}
    </div>
  );
};

export default Todo;
