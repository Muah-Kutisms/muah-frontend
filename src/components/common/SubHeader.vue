<template>
  <div>
    <v-row>
      <v-col
        v-if="
          title != '맞춤견적' || title == '무지개상회' || title != '가이드북'
        "
      >
        <v-img
          v-bind:src="filename"
          style="width: 100%; height:300px ; object-fit:cover; "
        >
          <div
            v-if="title == '내 견적 확인하기' || title == '고객 견적 확인하기'"
            style="width: 100%; height:100%; display:flex;flex-direction: column; align-items:end; padding-right:200px; color:white; justify-content: start; margin-top: 50px;"
          >
            <div style="font-size:48px;white-space:nowrap;">{{ title }}</div>
          </div>
          <div
            v-else-if="
              title != '내 견적 확인하기' || title == '고객 견적 확인하기'
            "
            style="width: 100%; height:100%; display:flex;flex-direction: column; align-items:end; padding-right:50px; color:white; justify-content: center;"
          >
            <div style="font-size:48px;white-space:nowrap;">{{ title }}</div>
            <div style="font-size:28px;white-space:nowrap;">
              {{ content1 }}
            </div>
            <div style=" font-size:28px;white-space:nowrap;">
              {{ content2 }}
            </div>
            <div style="font-size:28px;white-space:nowrap;">
              {{ content3 }}
            </div>
          </div>
        </v-img>
      </v-col>
      <v-col v-else-if="title == '맞춤견적' || title == '가이드북'">
        <v-img
          v-bind:src="filename"
          style="width: 100%; height:280px ; object-fit:cover; "
        >
          <div
            style="width: 100%; height:100%; display:flex;flex-direction: column; align-items:end; padding-right:50px; color:white; justify-content: center;"
          >
            <div style="font-size:48px;white-space:nowrap;">
              {{ title }}
            </div>
            <div style="font-size:28px;white-space:nowrap;">
              {{ content1 }}
            </div>
            <div style=" font-size:28px;white-space:nowrap;">
              {{ content2 }}
            </div>
            <div style="font-size:28px;white-space:nowrap;">
              {{ content3 }}
            </div>
          </div>
        </v-img>
      </v-col>
    </v-row>
    <v-row
      style="margin-top:-30px"
      v-if="
        title != '내 견적 확인하기' &&
          title != '무지개상회' &&
          title != '고객 견적 확인하기'
      "
    >
      <div
        style="width:100%; height: 13px; background-color:#e77636;margin-top: 18px; z-index: 1;"
      ></div>
      <v-col style="margin-top: -18px">
        <span v-for="(item, index) in menu" :key="index">
          <v-btn
            width="25%"
            height="100px"
            elevation="0"
            tile
            color="#faf6e8"
            dark
            outlined
            @click="change(item)"
            :class="{ on: buttonStatus[index], off: !buttonStatus[index] }"
            ><span style="font-size:30px"> {{ item }}</span>
          </v-btn>
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SubHeader',
  props: {
    filename: String,
    title: String,
    content1: String,
    content2: String,
    content3: String,
    buttonStatus: Array,
  },
  data() {
    return {
      menu: ['맞춤 견적', '출장 서비스', '가이드북', '장례식장 후기'],
    };
  },
  mounted() {
    console.log(this.imgSrc);
  },
  methods: {
    change(item) {
      if (item == '맞춤 견적') {
        this.$router.push('/funeral');
      } else if (item == '출장 서비스') {
        this.$router.push('/funeral/instructor');
      } else if (item == '가이드북') {
        this.$router.push('/funeral/guideBook');
      }
    },
  },
};
</script>

<style scoped>
.user-text {
  float: right;
}
div {
  text-shadow: 2px 2px 2px gray;
}

.on {
  border-radius: 0px 0px 50px 50px;
  background: #e77636;
}

.off {
  background: #572f00;
}
</style>
