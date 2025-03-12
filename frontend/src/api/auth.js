import axios from 'axios';

export const signup = (userData) => {
  return axios.post('/api/auth/signup', userData);
};

export const login = (userData) => {
  return axios.post('/api/auth/login', userData);
};

export const resetPassword = (email) => {
  return axios.post('/api/auth/reset-password', { email });
};
