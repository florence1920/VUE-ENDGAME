import axios from 'axios';
import { setInterceptors } from './common/interceptors';

//axios 초기화 함수
function createInstance() {
  const instance = axios.create({
    // baseURL: 'http://localhost:3000/',
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

//회원 가입 API
function registerUser(userData) {
  //const url = 'http://localhost:3000/signup';
  //return axios.post(url, userData);
  return instance.post('signup', userData);
}

//로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

//노트 조회 API
function fetchPosts() {
  return instance.get('posts');
}

//학습 노트 생성
function createPost(post) {
  return instance.post('posts', post);
}

export { registerUser, loginUser, fetchPosts, createPost };
