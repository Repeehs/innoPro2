import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your Express backend URL
  withCredentials: true, // For cookies/sessions (if needed)
});

// Add a request interceptor (e.g., for auth tokens)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Retrieve token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;