import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import themeReducer from './themeReducer';
import tasksSagaReducer from './tasksSagaReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  theme: themeReducer,
  tasksLoad: tasksSagaReducer,
});

export default rootReducer;
