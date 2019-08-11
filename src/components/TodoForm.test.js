import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoForm from './TodoForm';

const addTodo = jest.fn();
const clearTodos = jest.fn();

describe('<TodoForm />', () => {
  it('renders without crashing', () => {
    render(<TodoForm addTodo={addTodo} clearTodos={clearTodos} />);
  });
});
