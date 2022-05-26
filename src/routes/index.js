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
import muahstore from '../views/store';
import instructor from '../views/Instructor';
import myEstimate from '../views/MyEstimate';
import myPet from '../views/MyPageMyPet';
import selectMyPet from '../views/SelectMyPet';
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
      path: '/main',
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
    // {
    // 	path: '/funeral/guideBook', 가이드북
    // 	name: 'guideBook',
    // 	component: ,
    // 	beforeEnter,
    // },
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
    // {
    // 	path: '/funeral/estimate/funeralHome', 맞춤 견적 - 고객견적 확인하기
    //이거 로그인한 사람 아이디 쿼리로 보내기
    // 	name: 'funeralHome',
    // 	component: ,
    // 	beforeEnter,
    //  대충 장례식장 권한 맞는지 확인하는 함수,

    //<router-link :to="{name: 'funeralHome', query: {userId: 'cat'}}"></router-link>
    //참고링크 https://velog.io/@skyepodium/vue-router%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0-eskrsmr3
    // },
    // {
    // 	path: '/funeral/estimate/funeralHome/:id', 로그인한 사람이 받은 예약 내역의 세부페이지
    // 	name: 'funeralHomeDetail', 맞춤 견적 - 고객견적 확인하기의 세부페이지
    // 	component: ,
    // 	beforeEnter,
    //대충 장례식장 권한 맞는지 확인하는 함수,
    // },
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
