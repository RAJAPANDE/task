import axios from 'axios';

export const createTodoList = (listData) => {
  return axios.post('/api/todos/create', listData);
};

export const addTask = (taskData) => {
  return axios.post('/api/todos/add-task', taskData);
};

export const editTask = (taskId, taskData) => {
  return axios.put(`/api/todos/edit-task/${taskId}`, taskData);
};

export const deleteTask = (taskId) => {
  return axios.delete(`/api/todos/delete-task/${taskId}`);
};
