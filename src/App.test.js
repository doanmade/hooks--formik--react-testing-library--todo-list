import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import initialTodos from './data';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
  it('should show a new todo on the page when one is added', async () => {
    const { getByLabelText, getByText, findByText, findAllByTestId } = render(
      <App />
    );
    const todoInput = getByLabelText(/todo/i);
    const button = getByText(/submit/i);
    const task = 'Do the dishes';
    fireEvent.change(todoInput, { target: { value: task } });
    fireEvent.click(button);
    await findByText(task);
    const todos = await findAllByTestId('todo');
    expect(todos.length).toBe(initialTodos.length + 1);
  });
  it('should clear completed todos', async () => {
    const { getByText, findAllByTestId } = render(<App />);

    const button = getByText(/clear/i);
    fireEvent.click(button);
    const todos = await findAllByTestId('todo');
    expect(todos.length).toBe(initialTodos.length - 1);
  });
});
