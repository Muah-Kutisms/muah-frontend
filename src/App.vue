<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <router-view></router-view>
    </div>
    <AppFooter></AppFooter>
    <ToastPopup></ToastPopup>
  </div>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue';
import AppFooter from './components/common/AppFooter.vue';
import ToastPopup from './components/common/ToastPopup.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    ToastPopup,
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>
