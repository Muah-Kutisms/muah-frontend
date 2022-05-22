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
        <div style="color: #FF5C00; margin-top:5%">
          화장 후, 희망하는 안치 방법을 선택해 주세요.
        </div>
        <br />
        <div style="display:flex; justify-content:center; margin-top: -1%; ">
          <div v-for="([type, imgFile], item) in option" :key="item">
            <v-hover v-slot="{ hover }">
              <v-btn
                width="272px"
                height="312px"
                elevation="2"
                @click="choice(2, type)"
                :style="{ 'background-color': hover ? '#FFB388' : '#F1E7D4' }"
                style="flex-direction: column; margin-right: 30px; border-radius: 41px;"
              >
                <div style="display:block;">
                  <v-row
                    style="height:70px; display:flex; justify-content: center; align-items:center"
                  >
                    <v-col>
                      <div style="font-size:22px;" v-html="type"></div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      style="height:200px; display:flex; align-items:flex-end"
                    >
                      <div>
                        <img
                          :src="require(`@/assets/${imgFile}.png`)"
                          style="width: 272px; height: 170px;"
                        />
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
    <div
      style="position:relative;  text-align:center;"
      v-else-if="pageNumber == 3"
    >
      <span style=" font-size:30px;">
        <div style="color: #FF5C00; margin-top:5%">
          추가로 원하는 서비스를 선택해주세요.
        </div>
        <br />
        <div style="display:flex; justify-content:center; margin-top: -1%; ">
          <div v-for="([type, imgFile], item) in frontService" :key="item">
            <v-hover v-slot="{ hover }">
              <v-btn
                width="272px"
                height="312px"
                elevation="2"
                @click="choice(3, type)"
                :style="{ 'background-color': hover ? '#FFB388' : '#F1E7D4' }"
                style="flex-direction: column; margin-right: 30px; border-radius: 41px;"
              >
                <div style="display:block;">
                  <v-row
                    style="height:70px; display:flex; justify-content: center; align-items:center"
                  >
                    <v-col>
                      <div style="font-size:22px;" v-html="type"></div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      style="height:200px; display:flex; align-items:flex-end"
                    >
                      <div>
                        <img
                          :src="require(`@/assets/${imgFile}.png`)"
                          style="width: 273px; height: 170px;"
                        />
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
    <div
      style="position:relative;  text-align:center;"
      v-else-if="pageNumber == 4"
    >
      <span style=" font-size:30px;">
        <div style="color: #FF5C00; margin-top:5%">
          준비를 원하는 날짜를 선택해주세요.
        </div>
        <br />
        <div style="display:flex; justify-content:center; margin-top: -1%; ">
          <v-date-picker
            v-model="picker"
            color="#572F00"
            style="background-color:#572F00; width: 450px;"
            show-adjacent-months
          ></v-date-picker>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
// import { log } from 'console';
import SubHeader from '../components/common/SubHeader.vue';

export default {
  components: { SubHeader },
  data() {
    return {
      picker: null,
      title: '맞춤견적',
      content1: '견적을 통해 장례 비용을 비교해 보세요',
      content2:
        '요청하신 견적서에 우리 아이를 맡길 수 있는 전문가분들이 댓글을 달아 드립니다.',
      content3: '견적 결과는 마이페이지에서 확인하실 수 있습니다.',
      pageNumber: 1,
      way: String,
      option: [
        ['납골당/봉안당', 'page2button1'],
        ['수목장<br />(나무 아래 묻음)', 'page2button2'],
        ['산골<br/>(자연에 뿌림)', 'page2button3'],
        ['스톤 제작<br/>(화장한 유골로 제작)', 'page2button4'],
      ],
      frontService: [
        ['픽업 서비스', 'page3button1'],
        ['관', 'page3button2'],
        ['수의', 'page3button3'],
        ['염습', 'page3button4'],
      ],
    };
  },
  methods: {
    choice(pageNumber, type) {
      if (pageNumber == 2) {
        this.way = type;
        this.pageNumber++;
      }
      if (pageNumber == 3) {
        this.service = type;
        this.pageNumber++;
      }
    },
  },
  mounted() {
    if (this.$route.params.pageNumber) {
      this.pageNumber = this.$route.params.pageNumber;
    } else {
      this.pageNumber = 1;
    }
    console.log(this.pageNumber);
  },
};
</script>

<style scoped>
::v-deep .v-picker__body,
element.style {
  background: white !important;
  width: 450px !important;
}

::v-deep .v-btn {
  /* background-color: red !important; */
}
</style>
