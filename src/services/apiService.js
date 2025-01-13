import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com/', // Replace with your API base URL
});

export const get = async (endpoint) => {
  const response = await api.get(endpoint);
  return response.data;
};

export const post = async (endpoint, data) => {
  const response = await api.post(endpoint, data);
  return response.data;
};

export default api;
