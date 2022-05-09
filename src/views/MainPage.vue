<template>
  <v-container fluid>
    <v-row style="justify-content: center;">
      <div class="background">
        <v-col>
          <div>
            <div
              class="mainFont span"
              style="font-size: 80px; overflow: hidden;"
            >
              <span>For Your<br /></span>
              <span> Pet’s<br /> </span>
              <span> Afterlife</span>
            </div>
            <div
              style="font-size: 20px; "
              class="span"
              min-width="500"
              max-width="500"
            >
              <span>
                ‘
              </span>
              <span style="color:#FF3D00">무</span>
              <span>지개 다리</span><span style="color:#FF3D00"> 아</span
              ><span>래에서’의 줄임말로, 사랑하는 반려동물과의<br /> </span>
              <span> 마지막 기억을 만들어 드리는 장례 상조 서비스입니다.</span>
            </div>
          </div>
        </v-col>
        <v-col>
          <div>
            <v-img
              src="@/assets/pet.png"
              min-width="500"
              max-width="500"
              height="auto"
              style="margin-left:100px; overflow: hidden;"
            ></v-img>
          </div>
        </v-col>
      </div>
    </v-row>
    <v-row style="margin-top:30px">
      <v-col>
        <div class="background" style="justify-content: center;">
          <v-btn
            x-large
            color="#633500"
            dark
            width="510"
            style="border-radius:25px;"
            ><span style="font-size:32px">장례서비스</span></v-btn
          >
          <v-btn
            x-large
            color="#633500"
            dark
            width="510"
            style="border-radius:25px; margin-left:100px"
            ><span style="font-size:32px">무지개상회</span></v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.span {
  white-space: nowrap;
}

.background {
  overflow: hidden;
  background-color: #faf6e8;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
</style>
