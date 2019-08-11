import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from './Todo';
import initialTodos from '../data';

const [todo] = initialTodos;
const handleToggleComplete = jest.fn();
const completedTodo = { ...todo, completed: true };

/*
What to test here? 
- Does a todo show up?
- Does it have the strikethrough style when it is completed?
- Does the onClick function fire?  
*/

describe('<Todo />', () => {
  it('renders without crashing', () => {
    render(<Todo todo={todo} handleToggleComplete={handleToggleComplete} />);
  });
  it('shows a todo', () => {
    const { getByText } = render(
      <Todo todo={todo} handleToggleComplete={handleToggleComplete} />
    );
    getByText(new RegExp(todo.task, 'i'));
  });
  it('should have a strikethrough style when completed', () => {
    const { getByText } = render(
      <Todo todo={completedTodo} handleToggleComplete={handleToggleComplete} />
    );
    const todoElement = getByText(new RegExp(todo.task, 'i'));
    expect(todoElement).toHaveStyle(`text-decoration: line-through;`);
  });
  it('onClick should fire when the todo is clicked', () => {
    const { getByText } = render(
      <Todo todo={todo} handleToggleComplete={handleToggleComplete} />
    );
    const todoElement = getByText(new RegExp(todo.task, 'i'));
    fireEvent.click(todoElement);
    expect(handleToggleComplete).toHaveBeenCalled();
  });
});
