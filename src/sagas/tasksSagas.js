import { put } from 'redux-saga/effects';
import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  updateTaskRequest,
  updateTaskSuccess,
  updateTaskError,
} from '../actions';
import * as API from './../api';

export function * createTaskSaga (action) {
  const { task } = action;

  yield put(createTaskRequest());

  try {
    const { data: newTask } = yield API.createTask(task);
    yield put(createTaskSuccess(newTask));
  } catch (e) {
    yield put(createTaskError(e));
  }
}

export function * deleteTaskSaga (action) {
  const { id } = action;

  yield put(deleteTaskRequest());

  try {
    const { data: deletedTask } = yield API.deleteTask(id);
    // console.log(`deletedTask deleteTaskSaga!`, deletedTask);

    yield put(deleteTaskSuccess(deletedTask));
  } catch (e) {
    yield put(deleteTaskError(e));
  }
}

export function * updateTaskSaga (action) {
  const { id } = action;

  yield put(updateTaskRequest());

  try {
    const { data: newTasks } = yield API.updateTask(id);
    yield put(updateTaskSuccess(newTasks));
  } catch (e) {
    yield put(updateTaskError(e));
  }
}
