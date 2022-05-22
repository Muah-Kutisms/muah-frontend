<template>
  <div>
    <v-row>
      <v-col v-if="title != '맞춤견적'">
        <v-img
          v-bind:src="filename"
          style="width: 100%; height:300px ; object-fit:cover; "
        >
          <div
            v-if="title == '내 견적 확인하기' || title == '무지개상회'"
            style="width: 100%; height:100%; display:flex;flex-direction: column; align-items:end; padding-right:200px; color:white; justify-content: start; margin-top: 50px;"
          >
            <div style="font-size:48px;white-space:nowrap;">
              {{ title }}
            </div>
          </div>
          <div
            v-else-if="title != '내 견적 확인하기'"
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
      <v-col v-else-if="title == '맞춤견적'">
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
      v-if="title != '내 견적 확인하기' && title != '무지개상회'"
    >
      <v-col>
        <span v-for="item in menu" :key="item">
          <v-btn
            width="25%"
            height="100px"
            elevation="0"
            tile
            color="#faf6e8"
            dark
            outlined
            style="background: #572F00;"
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
  },
  data() {
    return {
      menu: ['맞춤 견적', '출장 서비스', '가이드북', '장례식장 후기'],
    };
  },
  mounted() {
    console.log(this.imgSrc);
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
</style>
