import React from 'react';
import './App.css';
import initialTodos from './data';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = React.useState(initialTodos);
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoList todos={todos} handleToggleComplete={() => {}} />
    </div>
  );
}

export default App;
