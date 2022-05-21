<template>
  <div style="width:1920px;">
    <SubHeader
      :filename="require('@/assets/hugdog.png')"
      width="100%"
      :title="title"
      :content1="content1"
      :content2="content2"
      :content3="content3"
    ></SubHeader>
    <div style="position:relative; text-align:left; padding-left:408px;">
      <div style="margin-top:150px; position:absolute; z-index:1; width:100%;">
        <span
          style="font-size:30px; font-weight:700;text-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);"
        >
          <div>
            <span style="color: #FF5C00;">한국반려동물자격협회</span>와 함께하는
          </div>
          <div style="padding-top:8px;">MUAH의 장례 전문가를 만나보세요.</div>
        </span>
        <br />
        <div style="padding-top:20px;">
          <span style=" font-size:45px;"
            >장례지도사 출장 서비스가 왜 필요할까요?</span
          >
        </div>
        <div style="padding-top:30px;font-size:30px;">
          사랑하는 우리 아이를 잃고 마음을 추스리기도 벅찬 당신,
        </div>
        <div style="padding-top:8px;font-size:30px;">
          반려동물의 전반적인 장례 절차를 대행해 줄 사람을 필요로 하시는
          보호자분들을 위해 준비했습니다.
        </div>
        <br />
        <v-card
          style="width: 1271px; height: 346px; display:flex; justify-content:center; align-items:center; filter: dropshadow(4px 4px 3px #000);margin-top:50px;"
          class="radius"
          color="#F1FAF9"
        >
          <div style="padding-left:180px display:flex; flex-flow:row nowrap">
            <v-img
              src="@/assets/woman1.png"
              style="width:218px; height:232px; filter: dropshadow(10px 10px 10px #000); margin-left:25px;"
            >
            </v-img>
            <div style="padding-top:10px;">
              <span
                style="font-size:30px;font-weight:500;text-shadow:3px 3px 1px rgba(0, 0, 0, 0.25);padding-left:50px;"
                >김건영 지도사</span
              >
            </div>
          </div>
          <div style="padding-left:300px;margin-left:-230px;font-size:28px">
            <div>
              <span style="color: #7D7D7D;"
                >반려동물 장례지도사 I Pet Funeral Director</span
              >
            </div>
            <div style="padding-top:17px;">
              반려동물의 장례를 어떤 방법으로 진행할지 모르는 경우,
            </div>
            <div>
              애도 방법을 모르는 경우 등을 위해 더 자세하게 알려드리겠습니다.
            </div>
            <div style="padding-top:17px;">
              <span style="font-weight:bold">E. </span>gun0@gmail.com
            </div>
            <div><span style="font-weight:bold">T. </span>010-1001-2002</div>
          </div>
        </v-card>
        <v-card
          style="width: 1271px; height: 346px; display:flex; justify-content:center; align-items:center; filter: dropshadow(4px 4px 3px #000);margin-top:50px;"
          class="radius"
          color="#EFF4CF"
        >
          <div style="font-size:28px;padding-left:40px">
            <div>
              <span style="color: #7D7D7D;"
                >반려동물 장례지도사 I Pet Funeral Director</span
              >
            </div>
            <div style="padding-top:17px;">
              무지개 다리를 건너는 우리 아이들의 가는 길도 행복하도록,
            </div>
            <div>
              가까이서 도와드리겠습니다.
            </div>
            <div style="padding-top:17px;">
              <span style="font-weight:bold">E. </span>nogo@gmail.com
            </div>
            <div><span style="font-weight:bold">T. </span>010-1001-2022</div>
          </div>
          <div style="padding-left:180px display:flex; flex-flow:row nowrap">
            <v-img
              src="@/assets/woman2.png"
              style="width:218px; height:232px; filter: dropshadow(10px 10px 10px #000); margin-left:120px;"
            >
            </v-img>
            <div style="padding-top:10px;">
              <span
                style="font-size:30px; font-weight:500;text-shadow:3px 3px 1px rgba(0, 0, 0, 0.25);padding-left:140px;"
                >김고은 지도사</span
              >
            </div>
          </div>
        </v-card>
        <v-card
          style="width: 1271px; height: 346px; display:flex; justify-content:center; align-items:center; filter: dropshadow(4px 4px 3px #000);margin-top:50px;"
          class="radius"
          color="#EDE3F5"
        >
          <div style="padding-left:180px display:flex; flex-flow:row nowrap">
            <v-img
              src="@/assets/woman3.png"
              style="width:218px; height:232px; filter: dropshadow(10px 10px 10px #000); margin-left:25px;"
            >
            </v-img>
            <div style="padding-top:10px;">
              <span
                style="font-size:30px;font-weight:500;text-shadow:3px 3px 1px rgba(0, 0, 0, 0.25);padding-left:50px;"
                >이영선 지도사</span
              >
            </div>
          </div>
          <div style="padding-left:300px;margin-left:-230px;font-size:28px">
            <div>
              <span style="color: #7D7D7D;"
                >반려동물 장례지도사 I Pet Funeral Director</span
              >
            </div>
            <div style="padding-top:17px;">
              오지 않을 것만 같았던 이별도 함께 이겨냅시다.
            </div>
            <div>
              전반적인 장례 절차에 걸쳐 옆에서 친절하게 도와드리겠습니다.
            </div>
            <div style="padding-top:17px;">
              <span style="font-weight:bold">E. </span>20sun@gmail.com
            </div>
            <div><span style="font-weight:bold">T. </span>010-1001-2222</div>
          </div>
        </v-card>
        <div style="margin-top:200px"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '../components/common/SubHeader.vue';

export default {
  components: { SubHeader },
  data() {
    return {
      title: '출장서비스',
      content1:
        '당혹스러운 당신을 위해 한국반려동물자격협회를 통해 검증된 전문가들이 함께합니다.',
      content2: '이동부터 화장까지, 장례지도사 출장 서비스가 대행해 드립니다.',
      content3: '',
      menu: [
        ['맞춤 견적', 'grayCat'],
        ['출장 서비스', 'brownDog'],
        ['가이드북', 'grayDog'],
        ['장례식장 후기', 'petGroup'],
      ],
    };
  },
};
</script>
<style scoped>
.radius {
  border-radius: 160px !important;
}
</style>
