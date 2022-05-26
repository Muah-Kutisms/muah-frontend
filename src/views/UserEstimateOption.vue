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
    <div style="background-image: url('@/assets/back.png');">
      <v-row>
        <v-col>
          <div style="text-align:center; margin-top:30px">
            반려동물의 무게를 선택해 주세요.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div style="display:flex; justify-content:space-around;">
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
        </v-col>
      </v-row>
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
      menu: [
        ['맞춤 견적', 'grayCat'],
        ['출장 서비스', 'brownDog'],
        ['가이드북', 'grayDog'],
        ['장례식장 후기', 'petGroup'],
      ],
      buttonStatus: [true, false, false, false],
    };
  },
};
</script>

<style>
.btn:hover {
  color: '#FFB388';
}
</style>
