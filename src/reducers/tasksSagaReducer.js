import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function tasksSagaReducer (state = initialState, action) {
  const { type } = action;

  switch (type) {
    // CREATE
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { task: newTask } = action;
      const { tasks } = state;

      let stopFunc = null;
      tasks.forEach(task => {
        if (task.body === newTask.body.trim()) {
          stopFunc = true;
        }
      });
      if (stopFunc) {
        return {
          ...state,
          isFetching: false,
        };
      }

      const newTasks = [...tasks, newTask];

      return {
        ...state,
        tasks: newTasks,
        isFetching: false,
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    // DELETE
    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const { deletedTask } = action;
      const { tasks } = state;

      const newTasks = [...tasks];

      newTasks.splice(
        newTasks.findIndex(newTask => newTask.id === deletedTask.id),
        1
      );

      return {
        ...state,
        isFetching: false,
        tasks: newTasks,
      };
    }
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    //UPDATE
    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const { newTasks } = action;

      return {
        ...state,
        isFetching: false,
        tasks: newTasks,
      };
    }
    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default tasksSagaReducer;
