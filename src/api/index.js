import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

function registerUser(userData) {
  return instance.post('/auth/login', userData);
}

function fetchPosts() {
  return instance.get('posts');
}

function loginUser() {
  let a = instance.get('/auth/google');
  console.log(a);
  return a;
}

function getPetIdData(id) {
  let a = instance.get(`/api/pet/${id}`);
  console.log(a);
  return a;
}

function PostPet(form) {
  let a = instance.post(`/api/pet/`, form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return a;
}

function PostUserImage(id, imgFile) {
  let a = instance.post(`/api/user/image/${id}`, imgFile, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return a;
}

function GetUser(id) {
  return instance.get(`/api/user/${id}`);
}

function GetEstimate() {
  return instance.get(`/funeral/estimate`);
}

function GetMyEstimate() {
  return instance.get(`/funeral/estimate`);
}

function getMyPetEstimate(id) {
  return instance.get(`/funeral/pet/${id}`);
}

function getAllMyPetEstimate() {
  return instance.get(`/funeral/pet`);
}

function PostUser(code) {
  return instance.post(`/auth/login`, { code });
}

function PostPetEstimate(request) {
  return instance.post(`/funeral/estimate/customer`, request);
}

function PutUser(id, request) {
  return instance.put(`/api/user/${id}`, request);
}

export {
  registerUser,
  fetchPosts,
  loginUser,
  getPetIdData,
  PostPet,
  PostUser,
  PutUser,
  GetUser,
  PostUserImage,
  GetEstimate,
  GetMyEstimate,
  getMyPetEstimate,
  getAllMyPetEstimate,
  PostPetEstimate,
};
