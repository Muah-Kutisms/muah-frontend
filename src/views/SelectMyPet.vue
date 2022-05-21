<template>
  <div width="100%">
    <SubHeader
      :filename="require('@/assets/SubHeader1.png')"
      width="100%"
      :title="title"
      :content1="content1"
      :content2="content2"
      :content3="content3"
    ></SubHeader>
    <div style="position:relative;  text-align:center;" v-if="pageNumber == 1">
      <div style="margin-top:100px; text-align:center; width:100%">
        <span style=" font-size:30px;">
          <div style="color: #FF5C00;">
            견적 받을 반려동물을 선택하세요.
          </div>
          <br />
          <div style="margin-top: 1.5%;">
            <v-btn
              style="background-color:#F1E7D4; border-radius:41px;"
              width="887px"
              height="107px"
              @click="$router.push({ path: `myPet` })"
              ><div style="font-size: 32px;">
                마이페이지에서 ‘내 반려동물’ 정보 불러오기
              </div></v-btn
            >
          </div>
        </span>
      </div>
    </div>
    <div
      style="position:relative;  text-align:center;"
      v-else-if="pageNumber == 2"
    >
      <span style=" font-size:30px;">
        <div style="color: #FF5C00;">
          견적 받을 반려동물을 선택하세요.
        </div>
        <br />
        <div
          style="display:flex; justify-content:space-around; margin-top: 1.5%"
        >
          <div v-for="([type, imgFile], item) in menu" :key="item">
            <v-hover v-slot="{ hover }">
              <v-btn
                width="272px"
                height="312px"
                elevation="2"
                :style="{ 'background-color': hover ? '#FFB388' : '#F1E7D4' }"
                style="flex-direction: column;"
              >
                <div style="display:block;">
                  <v-row>
                    <v-col>
                      <div style="font-size:30px; text-align:">
                        {{ type }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      style="height:213px; display:flex; align-items:flex-end"
                    >
                      <div>
                        <img :src="require(`@/assets/${imgFile}.png`)" />
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-btn>
            </v-hover>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import SubHeader from '../components/common/SubHeader.vue';

export default {
  components: { SubHeader },
  data() {
    return {
      title: '맞춤견적',
      content1: '견적을 통해 장례 비용을 비교해 보세요',
      content2:
        '요청하신 견적서에 우리 아이를 맡길 수 있는 전문가분들이 댓글을 달아 드립니다.',
      content3: '견적 결과는 마이페이지에서 확인하실 수 있습니다.',
      pageNumber: 1,
      menu: [
        ['맞춤 견적', 'grayCat'],
        ['출장 서비스', 'brownDog'],
        ['가이드북', 'grayDog'],
        ['장례식장 후기', 'petGroup'],
      ],
    };
  },
  methods: {},
  mounted() {
    this.pageNumber = this.$route.params.pageNumber;
    console.log(this.pageNumber);
  },
};
</script>

<style></style>
