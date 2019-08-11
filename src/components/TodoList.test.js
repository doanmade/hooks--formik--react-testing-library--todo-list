import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from './TodoList';
import initialTodos from '../data';

const handleToggleComplete = jest.fn();

/*  
What to test?
- Does it show a list of todos?
*/

describe('<TodoList />', () => {
  it('renders without crashing', () => {
    render(
      <TodoList
        todos={initialTodos}
        handleToggleComplete={handleToggleComplete}
      />
    );
  });
  it('should show a list of todos', () => {
    const { getAllByTestId } = render(
      <TodoList
        todos={initialTodos}
        handleToggleComplete={handleToggleComplete}
      />
    );
    const todos = getAllByTestId('todo');
    expect(todos.length).toBe(initialTodos.length);
  });
});
