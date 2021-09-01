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

      console.log(`deletedTask id`, deletedTask);

      const newTasks = [...tasks];
      console.table(newTasks);

      newTasks.splice(
        newTasks.findIndex(newTask => newTask.id === deletedTask[0].id),
        1
      );

      // const deletedElement = newTasks.findIndex(
      //   newTask => newTask.id === deletedTask[0].id
      // );

      // console.log(
      //   `deletedElement ACTION_TYPES.DELETE_TASK_SUCCESS`,
      //   deletedElement
      // );

      console.dir(newTasks);

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
