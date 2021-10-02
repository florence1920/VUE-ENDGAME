import axios from 'axios';
import store from '@/store/index';
const instance = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: store.state.token,
  },
});

function registerUser(userData) {
  //const url = 'http://localhost:3000/signup';
  //return axios.post(url, userData);
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
