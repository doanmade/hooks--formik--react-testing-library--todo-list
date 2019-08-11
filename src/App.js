import React from 'react';
import uuid from 'uuid/v4';
import './App.css';
import initialTodos from './data';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = React.useState(initialTodos);
  const addTodo = task => {
    const newTodo = {
      task,
      id: uuid(),
      completed: false
    };
    setTodos([...todos, newTodo]);
  };
  const clearCompletedTodos = () =>
    setTodos(todos.filter(todo => !todo.completed));
  const toggleComplete = id =>
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      })
    );

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoList todos={todos} handleToggleComplete={toggleComplete} />
      <TodoForm addTodo={addTodo} clearTodos={clearCompletedTodos} />
    </div>
  );
}

export default App;
