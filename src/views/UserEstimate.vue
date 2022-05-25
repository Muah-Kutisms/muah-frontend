<template>
  <div width="100%">
    <SubHeader
      :filename="require('@/assets/SubHeader1.png')"
      width="100%"
      :title="title"
      :content1="content1"
      :content2="content2"
      :content3="content3"
      :buttonStatus="buttonStatus"
    ></SubHeader>
    <div style="position:relative;  text-align:center;">
      <div
        style="margin-top:100px; position:absolute; z-index:1; text-align:center; width:100%"
      >
        <span style=" font-size:26px;">
          <div>
            MUAH는 처음부터 끝까지 책임집니다.
          </div>
          <br />
          <div>장례 서비스 견적 비교,</div>
          <div>장례 과정 대행 서비스,</div>
          <div>전반적인 장례 절차에 대한 가이드북,</div>
          <div>우리 아이와의 추억까지.</div>
          <br />
          <div>당신 곁에는 MUAH가 있을게요.</div>
        </span>
      </div>

      <img
        src="@/assets/Daco.png"
        width="200px"
        style="margin-top:262px; margin-left:300px"
      />
    </div>
  </div>
</template>

<script>
import SubHeader from '../components/common/SubHeader.vue';

export default {
  components: { SubHeader },
  data() {
    return {
      title: '장례서비스',
      content1: 'MUAH는 처음부터 끝까지 책임집니다.',
      content2:
        '맞춤 견적으로 최적의 장례식장 선택, 장례 절차 대행을 위한 장례지도사,',
      content3: '전반적인 장례 과정을 이해할 수 있는 가이드북까지',
      buttonStatus: [true, false, false, false],
    };
  },
};
</script>

<style></style>
