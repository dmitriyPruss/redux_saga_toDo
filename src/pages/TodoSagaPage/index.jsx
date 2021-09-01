import React from 'react';
import TasksSagaForm from '../../components/TasksSagaForm';
import TasksSagaList from '../../components/TasksSagaList';
import { connect } from 'react-redux';
import styles from './TodoSagaPage.module.scss';

function TodoSagaPage (props) {
  const {
    theme: { theme },
    tasksLoad: { tasks },
  } = props;

  // console.log('props :>> ', props);

  // console.log('tasks TodoSagaPage :>> ', tasks);

  return (
    <div className={theme ? styles.containerLight : styles.containerDark}>
      <h1 className={theme ? styles.headerLight : styles.headerDark}>
        ToDos... ({tasks.length})
      </h1>
      <TasksSagaForm />
      <TasksSagaList />
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TodoSagaPage);
