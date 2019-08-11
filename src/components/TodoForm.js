import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function TodoForm({ clearTodos, errors, isSubmitting }) {
  return (
    <div>
      <Form>
        <label>
          Todo
          <Field name='todo' placeholder='Do the dishes' />
        </label>
        <ErrorMessage name='todo'>
          {err => <div className='error'>{err}</div>}
        </ErrorMessage>
        <button
          type='submit'
          disabled={isSubmitting || Object.keys(errors).length}>
          Submit
        </button>
      </Form>
      <button onClick={clearTodos}>Clear</button>
    </div>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      todo: ''
    };
  },
  validationSchema: Yup.object().shape({
    todo: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .max(100, "Can't be longer than 100 characters.")
      .required('Todo is required.')
  }),
  handleSubmit(
    values,
    {
      props: { addTodo },
      resetForm,
      setSubmitting
    }
  ) {
    addTodo(values.todo);
    resetForm();
    setSubmitting(false);
  }
})(TodoForm);
