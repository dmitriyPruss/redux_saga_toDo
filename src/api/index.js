import axios from 'axios';

const axiosSets = {
  baseUrl: 'http://127.0.0.1:5000/api',
};

const apiInstance = axios.create(axiosSets);
const tasks = [];

// export const createTask = task => apiInstance.post('/tasks', task);
export const createTask = task => {
  const newTask = { ...task, id: Date.now() };

  tasks.push(newTask);

  return Promise.resolve({ data: newTask });
};

// 'http://127.0.0.1:5000/api/tasks/id'
// export const deleteTask = id => apiInstance.delete(`/tasks/${id}`)
export const deleteTask = id => {
  const index = tasks.findIndex(task => task.id === id);
  const deletedTask = tasks.splice(index, 1);

  return Promise.resolve({ data: deletedTask });
};

// 'http://127.0.0.1:5000/api/tasks/id'
// export const updateTask = id => apiInstance.update(`/tasks/${id}`)
export const updateTask = id => {
  const newTasks = tasks.map(task => {
    if (task.id === id) {
      task.isDone = !task.isDone;
    }

    return task;
  });

  return Promise.resolve({ data: newTasks });
};
