import { Formik, Form } from 'formik';
import React from 'react';
import Input from '../../components/Input';
import { INPUT_SCHEMA } from './../../utils/validatingSchemas';
import { createTaskAction } from './../../actions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

function TasksSagaForm (props) {
  const {
    theme,
    createTask,
    formClasses: { inputData },
  } = props;

  const addTaskHandler = (values, formikBag) => {
    createTask(values);

    formikBag.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ body: '', isDone: false }}
        validationSchema={INPUT_SCHEMA}
        onSubmit={addTaskHandler}
      >
        {formikProps => {
          return (
            <Form className={inputData}>
              <Input name='body' placeholder='Enter Todo...' />
              <Button
                variant={theme ? 'outline-success' : 'outline-light'}
                as='input'
                type='submit'
                value='Add Task'
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

const mapStateToProps = state => state.theme;
const mapDispatchToProps = dispatch => ({
  createTask: task => {
    dispatch(createTaskAction(task));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksSagaForm);
