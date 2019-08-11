import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from './Todo';
import initialTodos from '../data';

const [todo] = initialTodos;
const handleToggleComplete = jest.fn();

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
});
