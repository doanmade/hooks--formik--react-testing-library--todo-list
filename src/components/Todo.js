import React from 'react';

const Todo = ({ todo: { task, completed, id }, handleToggleComplete }) => {
  return (
    <div
      style={completed ? { textDecoration: 'line-through' } : null}
      onClick={() => handleToggleComplete(id)}>
      {task}
    </div>
  );
};

export default Todo;
