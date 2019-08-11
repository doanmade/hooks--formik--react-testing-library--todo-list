import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoForm from './TodoForm';

const addTodo = jest.fn();
const clearTodos = jest.fn();

/*  
What to test? 
- Does the form show up?
- Do the inputs work?
- Do the error messages show up when the user does something wrong?
    - Is the button disabled when there's something wrong?
- Does the submit function work?
*/

describe('<TodoForm />', () => {
  it('renders without crashing', () => {
    render(<TodoForm addTodo={addTodo} clearTodos={clearTodos} />);
  });
  it('renders the form', () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <TodoForm addTodo={addTodo} clearTodos={clearTodos} />
    );
    getByText(/submit/i);
    getByText(/clear/i);
    getByLabelText(/todo/i);
    getByPlaceholderText(/do the dishes/i);
  });
  it('should update the inputs when the user types in them', () => {
    const { getByLabelText, getByDisplayValue } = render(
      <TodoForm addTodo={addTodo} clearTodos={clearTodos} />
    );
    const todoInput = getByLabelText(/todo/i);
    const task = 'Do the dishes';

    fireEvent.change(todoInput, { target: { value: task } });
    getByDisplayValue(task);
  });
  it('should not submit when the form is empty', async () => {
    const { getByText, findByText } = render(
      <TodoForm addTodo={addTodo} clearTodos={clearTodos} />
    );
    const button = getByText(/submit/i);
    fireEvent.click(button);
    expect(button).toBeDisabled();
    await findByText('Todo is required.');
  });
  it('should show an error message for bad inputs and disable the button', async () => {
    const { getByLabelText, getByText, findByText } = render(
      <TodoForm addTodo={addTodo} clearTodos={clearTodos} />
    );
    const todoInput = getByLabelText(/todo/i);
    const task = 'a';
    const button = getByText(/submit/i);
    const bigInput = Array(101)
      .fill('a')
      .join('');

    fireEvent.change(todoInput, { target: { value: task } });
    fireEvent.blur(todoInput);
    await findByText('Must be at least 2 characters');
    expect(button).toBeDisabled();
    fireEvent.change(todoInput, { target: { value: bigInput } });
    fireEvent.blur(todoInput);
    await findByText("Can't be longer than 100 characters.");
    expect(button).toBeDisabled();
  });
  it('should fire the click handler functions when buttons are clicked', async () => {
    const { getByText, getByLabelText } = render(
      <TodoForm addTodo={addTodo} clearTodos={clearTodos} />
    );
    const task = 'Do the dishes';
    const todoInput = getByLabelText(/todo/i);
    const submitButton = getByText(/submit/i);
    const clearButton = getByText(/clear/i);
    await wait(() => {
      fireEvent.change(todoInput, { target: { value: task } });
      fireEvent.click(submitButton);
      fireEvent.click(clearButton);
    });
    expect(addTodo).toHaveBeenCalled();
    expect(clearTodos).toHaveBeenCalled();
  });
});
