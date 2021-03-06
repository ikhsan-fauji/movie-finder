import axios from 'axios';
import app from '../enums.js';

axios.interceptors.request.use( config => {
  // intercept api key on request as params
  const apiKey = { 'api_key': app.API_KEY }
  config.params = { ...apiKey, ...config.params }
  return config;
}, function (error) {
  return Promise.reject(error);
});

const request = {
  get: async (url, params = {}) => {
    const response = await axios.get(`${app.BASE_URL}${url}`, params);
    if ([200, 201].includes(response.status)) {
      return response.data
    } else {
      throw Error(response.data.status_message)
    }
  }
}

export default request