<template>
  <div
    style="width:1920px; height: 1000px; display:flex; align-items:start; justify-content:center; margin-top:2%"
  >
    <v-card
      class="r"
      style="display:flex; justify-content:center;"
      width="1028px"
      height="70%"
    >
      <div style="width:100%; height:100%">
        <v-row style="width:100%; height:20%">
          <v-col>
            <div
              style="display:flex;justify-content:center; align-items:flex-start; margin-top:5%; width:100%; height:100%"
            >
              <span
                v-for="[item, userType] in list"
                :key="userType"
                style="margin-left:2%; margin-right:2%"
              >
                <v-btn
                  @click="[(user = item), (item = true)]"
                  class="btn btnradius"
                  depressed
                  :style="{ background: user == item ? '#FF8B4A' : '#E3BF96' }"
                  ><span style="font-size:28px">{{ userType }}</span></v-btn
                >
              </span>
            </div>
          </v-col>
        </v-row>
        <v-row style="width:100%; height:80%">
          <v-col>
            <div
              style="display:flex; justify-content:center; align-items:center; width:100%; height:100%"
            >
              <div v-if="user == 'basic'" style="width:70%; height:80%">
                <SignUpForm :type="user" @validate="false"> </SignUpForm>
              </div>
              <div v-if="user == 'store'" style="width:70%; height:80%">
                <SignUpForm :type="user"> </SignUpForm>
              </div>
              <div v-if="user == 'maker'" style="width:70%; height:80%">
                <SignUpForm :type="user"> </SignUpForm>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import SignUpForm from '../components/posts/SignUpForm.vue';

export default {
  components: { SignUpForm },
  data() {
    return {
      list: [
        ['basic', '일반회원'],
        ['store', '장례식장'],
        ['maker', '작가'],
      ],
      user: 'basic',
      count: true,
      validate: false,
    };
  },
  methods: {
    async init() {},
  },
  mounted() {
    this.init();
  },
};
</script>

<style scope>
.btn {
  width: 215px;
  height: 50px !important;
  border-radius: 15px !important;
}
</style>
