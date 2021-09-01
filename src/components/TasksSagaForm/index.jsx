import { Formik, Form } from 'formik';
import React from 'react';
import Input from '../../components/Input';
import { Button } from 'react-bootstrap';
import { INPUT_SCHEMA } from './../../utils/validatingSchemas';
import ACTION_TYPES from '../../actions/actionTypes';
import { createTaskAction } from './../../actions';
import { connect } from 'react-redux';
import styles from './../../pages/TodoSagaPage/TodoSagaPage.module.scss';

function TasksSagaForm (props) {
  const { theme, changeTheme, createTask } = props;

  const addTaskHandler = (values, formikBag) => {
    createTask(values);

    formikBag.resetForm();
  };

  return (
    <>
      <Button
        className={styles.themeButton}
        variant={theme ? 'outline-info' : 'outline-danger'}
        onClick={changeTheme}
      >
        Change Theme
      </Button>
      <Formik
        initialValues={{ body: '', isDone: false }}
        validationSchema={INPUT_SCHEMA}
        onSubmit={addTaskHandler}
      >
        {formikProps => {
          return (
            <Form className={styles.inputData}>
              <Input name='body' theme={theme} placeholder='Enter Todo...' />
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
  changeTheme: () => dispatch({ type: ACTION_TYPES.CHANGE_THEME }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksSagaForm);
