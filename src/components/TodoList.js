import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, handleToggleComplete }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          handleToggleComplete={handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
