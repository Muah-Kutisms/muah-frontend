<template>
  <div data-app class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <router-view></router-view>
    </div>
    <ToastPopup></ToastPopup>
  </div>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue';
// import AppFooter from './components/common/AppFooter.vue';
import ToastPopup from './components/common/ToastPopup.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    ToastPopup,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@import './css/common.css';
</style>
