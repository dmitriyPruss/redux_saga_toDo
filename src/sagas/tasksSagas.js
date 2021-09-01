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
  } catch (error) {
    yield put(createTaskError(error));
  }
}

export function * deleteTaskSaga (action) {
  const { id } = action;

  yield put(deleteTaskRequest());

  try {
    const { data: deletedTask } = yield API.deleteTask(id);
    yield put(deleteTaskSuccess(deletedTask));
  } catch (error) {
    yield put(deleteTaskError(error));
  }
}

export function * updateTaskSaga (action) {
  const { id } = action;

  yield put(updateTaskRequest());

  try {
    const { data: newTasks } = yield API.updateTask(id);
    yield put(updateTaskSuccess(newTasks));
  } catch (error) {
    yield put(updateTaskError(error));
  }
}
