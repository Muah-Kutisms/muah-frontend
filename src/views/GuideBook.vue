<template>
  <div style="width:1920px;">
    <SubHeader
      :filename="require('@/assets/saddog.png')"
      width="100%"
      :title="title"
      :content1="content1"
      :content2="content2"
      :content3="content3"
      :buttonStatus="buttonStatus"
    ></SubHeader>
    <div style="position:relative;  text-align:center;">
      <div
        style="margin-top:110px; position:relative; z-index:1; text-align:center; width:100%"
      >
        <span
          style=" font-size:45px;font-weight:700;text-shadow:1px 1px 1px rgba(187, 100, 0, 0.39);
"
        >
          <div>
            장례 절차 가이드북
          </div>
        </span>
      </div>
      <div
        style="display:flex; justify-content:center;margin-top:260px;margin-left:-80px;"
      >
        <div v-for="([type, imgFile], funeral) in guide" :key="funeral">
          <div
            style="margin:0px 0px 80px 80px;flex-direction: column; border-radius:48px;
"
          >
            <div style="display:block;">
              <v-row>
                <v-col style="height:213px; display:flex; align-items:flex-end">
                  <div style="vertical-align:middle;">
                    <img :src="require(`@/assets/${imgFile}.png`)" />
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div
                    style="font-size:27px; text-align:center; font-weight:500;text-shadow:1px 1px 1px rgba(0, 0, 0, 0.25);"
                  >
                    {{ type }}
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="float:left;margin-top:-50px; margin-left:220px;width:5% font-size:20px;text-align:center;
"
    >
      <div style="display:relative;">
        <div>
          <span>편안하고 경건한 추모시간을 가지실 수 있도록 </span>
        </div>
        <div>
          100% 예약제로 운영됩니다.
        </div>
        <div>
          <span style="color: #FF5C00;">MUAH 맞춤 견적 서비스</span>를 통해
        </div>
        <div>
          <span style="color: #FF5C00;">손쉽게 예약이 가능</span>합니다.
        </div>
      </div>
      <div></div>
    </div>
    <div
      style="float:left; flex-flow:row nowrap;margin-top:-50px; margin-left:130px;width:5% font-size:20px;text-align:center;"
    >
      <div style="display:relative;">
        <div>
          <span>예약한 날짜에 장례식장으로 방문합니다. </span>
        </div>
        <div>
          필요에 따라 운구서비스를 이용할 수 있습니다.
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div
      style="float:left; flex-flow:row nowrap;margin-top:-50px; margin-left:130px;width:5% font-size:20px;text-align:center;"
    >
      <div style="display:relative;">
        <div>
          <span>아이의 몸을 깨끗하게 정리합니다. </span>
        </div>
        <div>
          장례용품 선택에 따라
        </div>
        <div>
          수의를 입히는 등의 입관을 진행합니다.
        </div>
        <div></div>
      </div>
    </div>
    <div style="position:relative;  text-align:center;">
      <div
        style="margin:350px; position:relative; z-index:1; text-align:center; width:100%"
      ></div>
      <div
        style="display:flex; justify-content:center;margin-top:250px;margin-left:-80px
"
      >
        <div v-for="([type, imgFile], funeral1) in guide1" :key="funeral1">
          <div
            style="margin:0px 0px 80px 80px;flex-direction: column; border-radius:48px;
"
          >
            <div style="display:block;">
              <v-row>
                <v-col style="height:213px; display:flex; align-items:flex-end">
                  <div style="vertical-align:middle;">
                    <img :src="require(`@/assets/${imgFile}.png`)" />
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div
                    style="font-size:27px; text-align:center; font-weight:500;text-shadow:1px 1px 1px rgba(0, 0, 0, 0.25);"
                  >
                    {{ type }}
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="float:left;margin-top:-50px; margin-left:130px;width:5% font-size:20px;text-align:center;
"
    >
      <div style="display:relative;padding-left:70px">
        <div>
          <span>별도의 추모실에서 아이의 안녕을 빌고 </span>
        </div>
        <div>
          마지막 인사를 나누는 추모예식 시간을 갖습니다.
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
    <div
      style="float:left; flex-flow:row nowrap;margin-top:-50px; margin-left:140px;width:5% font-size:20px;text-align:center;"
    >
      <div style="display:relative;">
        <div>
          <span>화장 후 남은 유골을 분골하여 </span>
        </div>
        <div>
          유골함에 담아 보호자님께 인도합니다.
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div
      style="float:left; flex-flow:row nowrap;margin-top:-50px; margin-left:150px;margin-bottom:250px;width:5% font-size:20px;text-align:center;"
    >
      <div style="display:relative;">
        <div>
          <span>장례가 끝난 유골은 자택보관, 추모분석 제작, </span>
        </div>
        <div>
          수목장 등 다양한 방법으로 봉안하실 수 있습니다.
        </div>
        <div></div>
        <div></div>
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
      title: '가이드북',
      content1: '알고 있어도 당혹스러운 반려동물의 죽음,',
      content2:
        '전반적인 장례 과정을 미리 이해할 수 있는 가이드북을 제공해 드립니다. ',
      content3: '',
      buttonStatus: [false, false, true, false],
      guide: [
        ['1. 장례 예약', 'funeral1'],
        ['', 'dirction'],
        ['2. 장례식장 방문', 'funeral2'],
        ['', 'dirction'],
        ['3. 엄습', 'funeral3'],
      ],
      guide1: [
        ['4. 추모 예식', 'funeral4'],
        ['', 'dirction'],
        ['5. 화장 및 분골', 'funeral5'],
        ['', 'dirction'],
        ['6. 유골봉안', 'funeral6'],
      ],
    };
  },
};
</script>
<style></style>
