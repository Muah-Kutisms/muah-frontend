<template>
  <div
    style="width:1920px; height: 850px; display:flex; align-items:center; justify-content:center;"
  >
    <v-card
      class="r"
      style="display:flex; align-items:center; justify-content:center;"
      flat
    >
      <v-row>
        <v-col>
          <div style="display:flex; justify-content:center; align-items:center">
            <v-btn
              width="761px"
              height="116px"
              color="#F45A5C"
              style=" display:flex; align-items:center"
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
                <span style="font-size:30px; color:white">goole 로그인</span>
              </span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped></style>
