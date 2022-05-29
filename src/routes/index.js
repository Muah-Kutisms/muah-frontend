import Vue from 'vue';
import vueRouter from 'vue-router';
import store from '@/store/index';
import LoginView from '../views/LoginView';
import MainView from '../views/MainPage';
import funeralEstimate from '../views/UserEstimate';
import estimateCustomer from '../views/UserEstimateOption';
import information from '../views/SignUp';
import funeral from '../views/Funeral';
import MyPage from '../views/MyPage';
import muahstore from '../views/Store';
import instructor from '../views/Instructor';
import myEstimate from '../views/MyEstimate';
import myPet from '../views/MyPageMyPet';
import selectMyPet from '../views/SelectMyPet';
import guidebook from '../views/GuideBook';
import funeralHome from '../views/funeralHome';
import funeralHomedetail from '../views/funeralHomeDetail';
import funeralcheck from '../views/funeralcheck';
//import { getUserFromCookie } from '../utils/cookies.js';
//import store from '../store';

Vue.use(vueRouter);

const router = new vueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/main/:id',
      name: 'main',
      component: MainView,
    },
    {
      path: '/main/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/signup/information',
      name: 'information',
      component: information,
    },
    {
      path: '/funeral',
      name: 'funeral',
      component: funeral,
      meta: { auth: true },
    },
    {
      path: '/funeral/estimate',
      name: 'funeralEstimate',
      component: funeralEstimate,
      meta: { auth: false },
    },
    {
      path: '/funeral/estimate/customer',
      name: 'estimateCustomer',
      component: estimateCustomer,
      meta: { auth: true },
    },
    {
      path: '/funeral/instructor',
      name: 'instructor',
      component: instructor,
      meta: { auth: true },
    },
    {
      path: '/funeral/guideBook',
      name: 'guideBook',
      component: guidebook,
    },
    // {
    // 	path: '/funeral/review', 장례식장 후기
    // 	name: 'review',
    // 	component: ,
    // 	beforeEnter,
    // },
    // 	path: '/funeral/review/:id', 장례식장 후기 세부 페이지
    // 	name: 'reviewDetail',
    // 	component: ,
    // 	beforeEnter,
    // },
    {
      path: '/funeral/estimate/funeralHome',
      name: 'funeralHome',
      component: funeralHome,
      meta: { auth: true },
    },

    {
      path: '/funeral/estimate/funeralHomeDetail',
      name: 'funeralHomeDetail',
      component: funeralHomedetail,
      meta: { auth: true },
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: MyPage,
      meta: { auth: true },
    },
    {
      path: '/myPage/myEstimate',
      name: 'myEstimate',
      component: myEstimate,
      meta: { auth: true },
    },
    {
      path: '/myPage/selectMyPet',
      name: 'selectMyPet',
      component: selectMyPet,
      meta: { auth: true },
    },
    {
      path: '/myPage/myPet',
      name: 'myPet',
      component: myPet,
      meta: { auth: true },
    },
    {
      path: '/funeral/check/',
      name: 'funeralcheck',
      component: funeralcheck,
      meta: { auth: true },
    },
    // {
    // 	path: '/myPage/reservationHistory/:id', 마이페이지 일반 예약관리 세부내용 (권한별로 다른 v-if)
    // 	name: 'reservationHistoryDetail',
    // 	component: ,
    // 	beforeEnter,
    // },
    {
      path: '/store',
      name: 'muahstore',
      component: muahstore,
    },
    // {
    // 	path: '/store/:id, 무지개상회 상세내용
    // 	name: 'storeDetail',
    // 	component: ,

    // },
    // {
    // 	path: '/store/payment/:id', 무지개상회 결제
    // 	name: 'storePayment',
    // 	component: ,
    // 	beforeEnter,
    // },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    alert('로그인이 필요합니다.');
    next('/login');
    return;
  }
  next();
});

export default router;
