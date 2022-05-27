<template>
  <header>
    <v-row>
      <v-col>
        <div>
          <router-link to="/main" class="logo">
            <v-img src="@/assets/muah.png" width="198"></v-img>
          </router-link>
        </div>
      </v-col>
      <v-col>
        <div
          class="navigations basicFont"
          style="margin-right:5%; font-size: 2rem; white-space:nowrap;"
        >
          <v-menu
            v-for="(text, index) in menu"
            :key="index"
            offset-y
            open-on-hover
            content-class="my-class"
          >
            <template v-slot:activator="{ attrs, on }">
              <button
                color="buttonColor"
                v-bind="attrs"
                v-on="on"
                depressed
                rounded
                @click="link(text)"
                @mouseover="buttonColor[index] = true"
                @mouseleave="buttonColor[index] = false"
                :class="{ on: buttonColor[index] }"
                class="s1"
                style="margin-right:50px; color:#633500;  font-size:27px; width:162px"
              >
                <span> {{ text }} </span>
              </button>
            </template>

            <v-list v-if="text == '장례서비스'" color="#E9DFCC">
              <v-list-item
                v-for="(nav, item) in items"
                :key="item"
                link
                to="/funeral/guideBook"
                replace
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
import {
  deleteCookie,
  getAuthFromCookie,
  getUserFromCookie,
} from '@/utils/cookies';
import { GetUser } from '@/api/index';

export default {
  data() {
    return {
      menu: '',
      loginmenu: ['장례서비스', '무지개상회', '마이페이지', '로그인'],
      logoutmenu: ['장례서비스', '무지개상회', '마이페이지', '로그아웃'],
      items: ['맞춤 견적', '출장 서비스', '가이드북', '장례식장 후기'],
      buttonColor: [false, false, false, false],
    };
  },
  methods: {
    async logoutUser() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      await this.$router.go();
      this.$router.push('/main');
    },
    login() {
      this.$router.push('/login');
    },
    async link(text) {
      if (text == '장례서비스') {
        this.$router.push({ path: `funeral` });
      } else if (text == '무지개상회') {
        this.$router.push('/store');
      } else if (text == '로그아웃') {
        this.logoutUser();
      } else if (text == '로그인') {
        this.login();
      } else if (text == '마이페이지') {
        let id = getUserFromCookie();
        const { data } = await GetUser(id);
        if (data.data.role == 'ROLE_USER') {
          this.$router.push('/mypage');
        }
        if (data.data.role == 'ROLE_COMPANY') {
          this.$router.push('/funeral/estimate/funeralHome');
        }
      }
    },
    async init() {
      if (await getAuthFromCookie()) {
        this.menu = this.logoutmenu;
      } else {
        this.menu = this.loginmenu;
      }
    },
  },
  created() {},
  mounted() {
    this.init();
  },
  watch: {
    menu: {
      handler() {
        console.log('메뉴변동');
      },
      deep: true,
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
  border-radius: 20px 20px 0px 0px;
}

.s1 {
  text-shadow: 2px 2px 2px lightgray;
}

.my-class {
  border-radius: 0px 0px 30px 30px;
  box-shadow: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  z-index: 2;
  background-color: #faf6e8;
  font-family: NotoSansLight;
  min-width: 1000px;
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
</style>
