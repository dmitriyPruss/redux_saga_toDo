import { React } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from 'react-bootstrap';
import * as actionCreators from './../../actions';
import { connect } from 'react-redux';
import styles from './../../pages/TodoSagaPage/TodoSagaPage.module.scss';

function TasksSagaList (props) {
  const {
    theme: { theme },
    tasksLoad: { isFetching, error, tasks }, /// error!!!

    deleteTask,
    updateTask,
  } = props;

  const mapTask = ({ id, body, isDone }, index) => {
    const checkTaskHandler = () => {
      updateTask(id);
    };

    const deleteTaskHandler = () => {
      console.log('id deleteTaskHandler:>> ', id);
      deleteTask(id);
    };

    return (
      <li
        key={id}
        className={theme ? styles.listItemLight : styles.listItemDark}
      >
        <input type='checkbox' onClick={checkTaskHandler} />
        <span>{body}</span>
        <Button
          variant={theme ? 'outline-success' : 'outline-light'}
          onClick={deleteTaskHandler}
        >
          <DeleteOutlineIcon />
        </Button>
      </li>
    );
  };

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR!</div>}
      <ul className={styles.itemsContainer}>{tasks.map(mapTask)}</ul>
    </>
  );
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => {
      dispatch(actionCreators.deleteTaskAction(id));
    },
    updateTask: id => {
      dispatch(actionCreators.updateTaskAction(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksSagaList);
