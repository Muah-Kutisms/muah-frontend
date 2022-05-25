import Vue from 'vue';
import Router from 'vue-router';
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
//import { getUserFromCookie } from '../utils/cookies.js';
//import store from '../store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter(to, from, next) {
        store.getters['isLoggedIn'] ? next('/main') : next();
      },
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
      //beforeEnter,
    },
    {
      path: '/signup/information',
      name: 'information',
      component: information,
      // beforeEnter,
    },
    {
      path: '/funeral',
      name: 'funeral',
      component: funeral,
      //beforeEnter,
    },
    {
      path: '/funeral/estimate',
      name: 'funeralEstimate',
      component: funeralEstimate,
      //beforeEnter,
    },
    {
      path: '/funeral/estimate/customer',
      name: 'estimateCustomer',
      component: estimateCustomer,
      //beforeEnter,
    },
    {
      path: '/funeral/instructor',
      name: 'instructor',
      component: instructor,
      // 	beforeEnter,
    },
    {
      path: '/funeral/guideBook',
      name: 'guideBook',
      component: guidebook,
      // 	beforeEnter,
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
      //이거 로그인한 사람 아이디 쿼리로 보내기
      name: 'funeralHome',
      component: funeralHome,
      // beforeEnter,
      //  대충 장례식장 권한 맞는지 확인하는 함수,
    },
    //<router-link :to="{name: 'funeralHome', query: {userId: 'cat'}}"></router-link>
    //참고링크 https://velog.io/@skyepodium/vue-router%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0-eskrsmr3
    // },
    {
      path: '/funeral/estimate/funeralHome/:id',
      name: 'funeralHomeDetail',
      component: funeralHomedetail,
      // 	beforeEnter,
      //대충 장례식장 권한 맞는지 확인하는 함수,
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: MyPage,
      // beforeEnter,
    },
    {
      path: '/myPage/myEstimate',
      name: 'myEstimate',
      component: myEstimate,
      // beforeEnter,
    },
    {
      path: '/myPage/selectMyPet',
      name: 'selectMyPet',
      component: selectMyPet,
      // beforeEnter,
    },
    {
      path: '/myPage/myPet',
      name: 'myPet',
      component: myPet,
      // beforeEnter,
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
      // 	beforeEnter,
    },
    // {
    // 	path: '/store/:id, 무지개상회 상세내용
    // 	name: 'storeDetail',
    // 	component: ,
    // 	beforeEnter,
    // },
    // {
    // 	path: '/store/payment/:id', 무지개상회 결제
    // 	name: 'storePayment',
    // 	component: ,
    // 	beforeEnter,
    // },
  ],
});

// function beforeEnter(to, from, next) { 로그인 검증 로직. 로그인 구현하면 활성화 할게요
//   if (store.getters['isLoggedIn'] || getUserFromCookie()) {
//     next();
//   } else {
//     alert('sign in please');
//     next('/login');
//   }
// }
