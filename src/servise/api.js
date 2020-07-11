import axios from 'axios';

const api = axios.create({
  baseURL: ' https://api.github.com/search/repositories?q=language:js+sort:stars',
});

export const getProjects = async () => {
    const response = await api.get();
    return response.data.items;
  };

export default api;
