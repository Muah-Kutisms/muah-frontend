import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/auth';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getUserFromCookie,
  deleteCookie,
} from '@/utils/cookies.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    token: '',
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token || getUserFromCookie();
      //정의되지 않은 변수 undefined 값을 가진 내용의 논리 연산 시에도 확실한 true / false를 가지도록 하는게 목적
      //토큰 있나 없나 확인
    },
    userToken(state) {
      return state.token;
    },
  },
  mutations: {
    //setter와 동일한 기능. 동기적 로직
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
      deleteCookie('til_auth');
      deleteCookie('til_user');
    },
  },
  actions: {
    //setter와 동일한 기능. 비동기적 로직
    async LOGIN({ commit }, data) {
      const response = await loginUser(data);
      commit('SET_USER', response.data.user);
      commit('SET_TOKEN', response.data.token);
      saveUserToCookie(response.data.user.username);
      saveAuthToCookie(response.data.token);
      return response;
    },
  },
});
