<template>
  <div
    style="width:1920px; height: 850px; display:flex; align-items:center; justify-content:center;"
  >
    <v-card
      class="r"
      style="display:flex; align-items:center; justify-content:center; flex-direction: column; "
      flat
    >
      <v-row
        style="align-items:flex-end; margin-bottom: 30px; margin-top: -30px;"
        ><v-col> <img src="@/assets/register.png" /> </v-col
      ></v-row>
      <v-row>
        <v-col>
          <div style="display:flex; justify-content:center; align-items:center">
            <!-- <div
              id="g_id_onload"
              data-client_id="706713428710-7kc55shtp4gi2t3frdekpmcda6btebg4.apps.googleusercontent.com"
              redirect_uri="http://localhost:8080/login/"
              response_type="code"
              scope="email%20profile%20openid"
            ></div>
            <div
              class="g_id_signin"
              data-type="standard"
              data-size="large"
              data-theme="outline"
              data-text="sign_in_with"
              data-shape="rectangular"
              data-logo_alignment="left"
              data-context="signin"
            ></div> -->
            <v-btn
              width="761px"
              height="116px"
              color="#F45A5C"
              style=" display:flex; align-items:center"
              @click="oauthSignIn"
            >
              <span
                style="display:flex; justify-content:center; align-items:center; flex-flow:row nowrap"
              >
                <v-img
                  src="@/assets/google.png"
                  width="67"
                  height="67"
                  contain
                ></v-img>
                <span
                  style="font-size:30px; color:white; text-transform:lowercase"
                  >google 로그인</span
                >
              </span>
            </v-btn>
            <!-- </div> -->
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
// import { getPetIdData, PostPet } from '@/api/index';
import { PostUser } from '@/api/index';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
} from '@/utils/cookies';
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    oauthSignIn() {
      // Google's OAuth 2.0 endpoint for requesting an access token
      var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

      // Create <form> element to submit parameters to OAuth 2.0 endpoint.
      var form = document.createElement('form');
      form.setAttribute('method', 'GET'); // Send as a GET request.
      form.setAttribute('action', oauth2Endpoint);

      // Parameters to pass to OAuth 2.0 endpoint.
      var params = {
        client_id:
          '557669763682-knrktu5nft0q3rgq3juu543phr1n5dpn.apps.googleusercontent.com',
        redirect_uri: 'http://localhost:8080/login',
        response_type: 'code',
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
        include_granted_scopes: 'true',
        token_credential_uri: 'https://oauth2.googleapis.com/token',
        state: 'pass-through value',
      };

      // Add form parameters as hidden input values.
      for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
      }

      // Add form to page and submit it to open the OAuth 2.0 endpoint.
      document.body.appendChild(form);
      form.submit();
    },
    async rout() {
      let code = this.$route.query.code;
      console.log(code);
      if (code) {
        console.log('dmaddddma');
        let a = await PostUser(code);
        console.log('dmadma');
        console.log(a);
        if (a) {
          console.log('dmdld');
          this.$store.commit('setToken', a.data.data.accessToken);
          this.$store.commit('setUsername', a.data.data.id);
          saveUserToCookie(a.data.data.id);
          saveAuthToCookie(a.data.data.accessToken);
          if (a.data.data.isNew) {
            this.$router.push(`/signup/information`);
          } else {
            this.$router.push(`/main`);
          }
        }
        console.log(getAuthFromCookie());
      }
    },
  },
  mounted() {
    console.log('마운트');
    this.rout();
  },
};
</script>

<style scoped></style>
