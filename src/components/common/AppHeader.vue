<template>
  <header>
    <v-row>
      <v-col>
        <div>
          <router-link :to="logoLink" class="logo">
            <v-img src="@/assets/muah.png" width="198"></v-img>
          </router-link>
        </div>
      </v-col>
      <v-col>
        <div class="navigations" style="margin-right:5%">
          <v-menu
            v-for="([text, rounded], index) in menu"
            :key="index"
            offset-y
            open-on-hover
            rounded="0"
          >
            <template v-slot:activator="{ attrs, on }">
              <button
                color="buttonColor"
                v-bind="attrs"
                v-on="on"
                depressed
                @mouseover="buttonColor[index] = true"
                @mouseleave="buttonColor[index] = false"
                :class="{ on: buttonColor[index] }"
                style="margin-right:10px; color:#633500"
              >
                <span style="font-size: 27px; font-family:NotoSansMedium">
                  {{ text }}
                </span>
              </button>
            </template>

            <v-list v-if="text == '장례서비스'" color="#E9DFCC" outlined>
              <v-list-item
                v-for="([type, nav], item) in items"
                :key="item"
                link
                style="box-shadow: none;"
              >
                <v-list-item-title
                  ><div style="text-align:center">
                    <span>{{ nav }}</span>
                  </div></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col>
        <div>
          <router-link :to="logoLink" class="logo">
            <v-img src="@/assets/muah.png" width="198"></v-img>
          </router-link>
        </div>
      </v-col>
      <v-col style="margin-right:4%">
        <div class="navigations">

          <template v-if="isUserLogin">
            <router-link to="/">장례서비스</router-link>
            <router-link to="/">무지개상회</router-link>
            <router-link to="/">마이페이지</router-link>
            <a href="javascript:;" @click="logoutUser" class="logout-button">
              Logout
            </a>
          </template>
         
          <template v-else>
            <router-link to="/">장례서비스</router-link>
            <router-link to="/">무지개상회</router-link>
            <router-link to="/">마이페이지</router-link>
            <router-link to="/">로그인</router-link>
          </template>
        </div>
      </v-col>
    </v-row> -->
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  data() {
    return {
      menu: [
        ['장례서비스', 'b-xl'],
        ['무지개상회', 'b-xl'],
        ['마이페이지', 'b-xl'],
        ['로그아웃', 'b-xl'],
      ],
      items: [
        ['장례서비스', '맞춤 견적'],
        ['장례서비스', '출장 서비스'],
        ['장례서비스', '가이드북'],
        ['장례서비스', '장례식장 후기'],
      ],
      buttonColor: [false, false, false, false],
    };
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.username {
  color: white;
}

.on {
  background-color: #e0b67c;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4% 20px;
  z-index: 2;
  background-color: #faf6e8;
  font-family: NotoSansMedium;
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations {
  float: right;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.logout-button {
  font-size: 14px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}

.v {
  border-radius: 100px !important;
}
</style>
