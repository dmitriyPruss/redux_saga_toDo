import ACTION_TYPES from './actionTypes';

export const addTask = data => ({ type: ACTION_TYPES.ADD_TASK, data });

export const deleteTask = id => ({
  type: ACTION_TYPES.DELETE_TASK,
  id,
});

export const checkTask = changedInfo => ({
  type: ACTION_TYPES.CHECK_TASK,
  changedInfo,
});

//SAGA
// Create:
export const createTaskAction = task => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
  task: task,
});

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
});

export const createTaskSuccess = task => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  task: task,
});

export const createTaskError = e => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error: e,
});

//Delete:
export const deleteTaskAction = id => ({
  type: ACTION_TYPES.DELETE_TASK_ACTION,
  id: id,
});

export const deleteTaskRequest = () => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
});

export const deleteTaskSuccess = deletedTask => {
  console.log(`deletedTask deleteTaskSuccess`, deletedTask);

  return {
    type: ACTION_TYPES.DELETE_TASK_SUCCESS,
    deletedTask,
  };
};

export const deleteTaskError = e => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  error: e,
});

//Update:
export const updateTaskAction = id => {
  return {
    type: ACTION_TYPES.UPDATE_TASK_ACTION,
    id: id,
  };
};

export const updateTaskRequest = () => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
});

export const updateTaskSuccess = newTasks => {
  return {
    type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
    newTasks,
  };
};

export const updateTaskError = e => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  error: e,
});
