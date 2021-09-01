const ACTION_TYPES = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  CHECK_TASK: 'CHECK_TASK',
  CHANGE_THEME: 'CHANGE_THEME',

  // CREATE SAGA
  CREATE_TASK_ACTION: 'CREATE_TASK_ACTION',
  CREATE_TASK_REQUEST: 'CREATE_TASK_REQUEST',
  CREATE_TASK_SUCCESS: 'CREATE_TASK_SUCCESS',
  CREATE_TASK_ERROR: 'CREATE_TASK_ERROR',

  // DELETE SAGA
  DELETE_TASK_ACTION: 'DELETE_TASK_ACTION',
  DELETE_TASK_REQUEST: 'DELETE_TASK_REQUEST',
  DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS',
  DELETE_TASK_ERROR: 'DELETE_TASK_ERROR',

  // UPDATE SAGA
  UPDATE_TASK_ACTION: 'UPDATE_TASK_ACTION',
  UPDATE_TASK_REQUEST: 'UPDATE_TASK_REQUEST',
  UPDATE_TASK_SUCCESS: 'UPDATE_TASK_SUCCESS',
  UPDATE_TASK_ERROR: 'UPDATE_TASK_ERROR',
};

export default ACTION_TYPES;