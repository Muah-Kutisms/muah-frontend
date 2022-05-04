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

export default {
  name: 'App',

  components: {
    AppHeader,
  },

  data: () => ({
    //
  }),
};
</script>
