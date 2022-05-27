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

function loginUser() {
  let a = instance.get('/auth/google');
  return a;
}

function getPetIdData(id) {
  let a = instance.get(`/api/pet/${id}`);
  return a;
}

function getAllSheet() {
  return instance.get(`/api/company/`);
}

function GetUser(id) {
  return instance.get(`/api/user/${id}`);
}

function GetCompany(id) {
  return instance.get(`/api/company/${id}`);
}

function GetEstimate() {
  return instance.get(`/funeral/estimate`);
}

function GetEstimateId(id) {
  return instance.get(`/funeral/estimate/${id}`);
}

function GetMyEstimate() {
  return instance.get(`/funeral/estimate`);
}

function GetIdEstimate(id) {
  return instance.get(`/funeral/estimate/pet/${id}`);
}

function GetsheetIdEstimate(sheetId) {
  return instance.get(`/funeral/estimate/company/sheet/${sheetId}`);
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

function PostProposal(request) {
  console.log(request);
  return instance.post(`/funeral/estimate/company/proposal`, request);
}

function PostPet(form) {
  let a = instance.post(`/api/pet/`, form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return a;
}

function PostUserImage(id, imgFile) {
  return instance.post(`/api/user/image/${id}`, imgFile, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

function PutUser(id, request) {
  return instance.put(`/api/user/${id}`, request);
}

function PutSheetStatus(id, status) {
  return instance.put(`/status/sheet/${id}`, status);
}

function PutProposalStatus(id, status) {
  return instance.put(`/status/proposal/${id}`, status);
}

export {
  registerUser,
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
  getAllSheet,
  GetEstimateId,
  PostProposal,
  GetIdEstimate,
  GetsheetIdEstimate,
  PutSheetStatus,
  GetCompany,
  PutProposalStatus,
};
