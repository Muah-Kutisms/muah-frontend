<template>
  <!--테스트 이렇게 하면 된다는 참고를 위해 로그인 폼으로 남겨두었습니다.
spec 파일이랑 같이 봐주시면 됩니다. 저희 구글소셜로그인으로 할거니까 이 로그인 로직은
필요 없어요-->
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <PageHeader>Login</PageHeader>
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">ID</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">PW</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button class="btn">login</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import bus from '@/utils/bus.js';
import PageHeader from './common/PageHeader.vue';

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      if (!this.username || !this.password) {
        alert('Fill in the account information');
        return;
      }
      try {
        const response = await this.$store.dispatch('LOGIN', {
          username: this.username,
          password: this.password,
        });
        console.log(response);
        bus.$emit('show:toast', response.data.message);
        this.$router.push('/main');
        this.initForm();
      } catch (error) {
        console.log(error);
        this.logMessage = error.response.data;
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
.btn {
  color: white;
}
</style>
