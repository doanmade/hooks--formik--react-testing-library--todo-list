import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from './TodoList';
import initialTodos from '../data';

const handleToggleComplete = jest.fn();

describe('<TodoList />', () => {
  it('renders without crashing', () => {
    render(
      <TodoList
        todos={initialTodos}
        handleToggleComplete={handleToggleComplete}
      />
    );
  });
});
