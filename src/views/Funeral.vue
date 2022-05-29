<template>
  <div style="width:1920px; height:100%;">
    <v-img
      src="@/assets/funeralBack.png"
      style="width:100%; height:100%; object-fit:cover;"
    >
      <div
        style="width:100%; height:65%; display:flex;flex-direction: column; align-items:end; padding-top:7%; padding-right:20%; color:white; justify-content: start;"
      >
        <div style="font-size:48px;white-space:nowrap;">
          맞춤 견적
        </div>
        <div style="font-size:28px;white-space:nowrap;">
          '일반 회원'은 맞춤형 장례 견적을 확인하실 수 있습니다.
        </div>
        <div style=" font-size:28px;white-space:nowrap;">
          '장례 업체'는 일반 회원이 보낸 정보를 바탕으로 견적서를 보낼 수
          있습니다.
        </div>
      </div>
      <div style="clear: both;">
        <div
          style="width:50%; height:30%; display:flex;flex-direction: row; align-items:end; padding-top:7%; padding-right:20%; color:white; justify-content: center;"
        >
          <v-btn
            color="white"
            width="510"
            height="79"
            style="border-radius:25px;"
            @click="$router.push({ path: `myPage/selectMyPet` })"
            ><span style="font-size:32px; font-family: NotoSansBold;"
              >일반회원 전용</span
            ></v-btn
          >
          <v-btn
            color="white"
            width="510"
            height="79"
            style="border-radius:25px; margin-left:100px"
            @click="roleCheck()"
            ><span style="font-size:32px; font-family: NotoSansBold;"
              >장례업체 전용</span
            ></v-btn
          >
        </div>
      </div>
    </v-img>
  </div>
</template>

<script>
import { getUserFromCookie } from '@/utils/cookies';
import { GetUser } from '@/api/index';
export default {
  methods: {
    async roleCheck() {
      let id = getUserFromCookie();
      let user = await GetUser(id);
      const userData = user.data.data;
      if (userData.role == 'ROLE_COMPANY') {
        this.$router.push({ path: `funeral/estimate/funeralHomeDetail` });
      } else {
        alert('장례업체 전용 페이지입니다.');
      }
    },
  },
};
</script>

<style scoped>
div {
  text-shadow: 2px 3px 10px #282828;
}
</style>
