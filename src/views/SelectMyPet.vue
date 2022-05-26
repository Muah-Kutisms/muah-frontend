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

        <div
          style="display:flex; justify-content:center; align-items: center; margin-top: -1%; "
        >
          <v-date-picker
            v-model="picker"
            color="#572F00"
            style="background-color:#572F00; width: 450px;"
            show-adjacent-months
            :min="s_date"
          ></v-date-picker>
          <span>
            <v-card
              style="width:370px; height:378px; margin-left: 10%; margin-right: 10%; box-shadow: none !important;"
            >
              <div style="color: #FF5C00; padding-top:30px">
                기타
              </div>
              <div>
                <v-radio-group
                  v-model="wayOption"
                  column
                  style="margin-left:10%"
                >
                  <v-radio
                    color="#FF5C00"
                    label="최대한 빠르게 부탁드립니다."
                    value="빠르게"
                    style="margin-bottom:5%"
                  ></v-radio>
                  <v-radio
                    color="#FF5C00"
                    label="신경써서 부탁드립니다."
                    value="정성"
                    style="margin-bottom:5%"
                  ></v-radio>
                  <v-radio
                    color="#FF5C00"
                    label="문자로 견적서 보내주세요."
                    value="문자 견적서 요청"
                    style="margin-bottom:5%"
                  ></v-radio>
                  <v-radio
                    color="#FF5C00"
                    label="자유입력"
                    value="text"
                  ></v-radio> </v-radio-group
                ><v-text-field
                  v-if="wayOption == 'text'"
                  v-model="text"
                  outlined
                  style="width:100%; padding-left: 10%; padding-right: 10%;"
                ></v-text-field>
              </div>
            </v-card>
          </span>
          <span>
            <v-img
              src="@/assets/next.png"
              contain
              style="width:74px; height:56px; margin-left: 600%; margin-top: -90px;"
              @click="choice(4)"
            ></v-img>
          </span>
        </div>
      </span>
    </div>
    <div
      style="position:relative;  text-align:center;"
      v-else-if="pageNumber == 5"
    >
      <span style=" font-size:30px;">
        <div
          style="display:flex; justify-content:center; align-items: center; margin-top: 5%; "
        >
          <span style="margin-right:10%">
            <div>
              <div style="margin-bottom:7%; color: #FF5C00;">
                고객님이 계신 지역을 선택해주세요.
              </div>
              <div style="margin-bottom:7%">
                <v-btn @click="apiOpen()" style="font-size:29px"
                  >주소 검색</v-btn
                >
              </div>
              <div>
                <v-text-field
                  solo
                  disabled
                  v-model="addr"
                  placeholder="주소(필수)"
                >
                </v-text-field>
              </div>
              <div>
                <v-text-field
                  solo
                  v-model="subAddr"
                  placeholder="세부주소(필수)"
                ></v-text-field>
              </div>
            </div>
          </span>
          <span
            style="display:flex; align-items: center; flex-direction: column; justify-content: flex-start; height: 385px;"
          >
            <div style="color: #FF5C00; margin-bottom:7%;">
              장례 관련 문의사항을 알려주세요!
            </div>
            <v-textarea
              solo
              width="498px"
              height="211px"
              counter="255"
              v-model="question"
              :rules="rules"
              placeholder="문의사항을 입력하세요"
            ></v-textarea>
          </span>
          <span>
            <v-img
              src="@/assets/next.png"
              contain
              style="width:74px; height:56px; margin-left: 400%;"
              @click="choice(5)"
            ></v-img>
          </span>
        </div>
      </span>
    </div>
    <div
      style="position:relative;  text-align:center;"
      v-else-if="pageNumber == 6"
    >
      <div style="margin-top:150px; text-align:center; width:100%">
        <div style="color: #FF5C00;font-size:64px;">
          맞춤 견적이 완료되었습니다!
        </div>
        <br />
        <div
          style="margin-top: 3%; font-size: 32px; font-family: NotoSansLight;"
        >
          <span>마이페이지에서 내 견적 확인하기를 확인해주세요.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '../components/common/SubHeader.vue';
import { PostPetEstimate } from '@/api/index';

export default {
  components: { SubHeader },
  data() {
    return {
      picker: null,
      petId: '',
      text: null,
      addr: null,
      subAddr: null,
      question: null,
      s_date: new Date().toISOString().substr(0, 10),
      title: '맞춤견적',
      content1: '견적을 통해 장례 비용을 비교해 보세요',
      content2:
        '요청하신 견적서에 우리 아이를 맡길 수 있는 전문가분들이 댓글을 달아 드립니다.',
      content3: '견적 결과는 마이페이지에서 확인하실 수 있습니다.',
      pageNumber: 1,
      way: null,
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
      rules: [v => v.length <= 255 || 'Max 255 characters'],
      buttonStatus: [true, false, false, false],
      wayOption: null,
    };
  },
  methods: {
    choice(pageNumber, type) {
      if (pageNumber == 2) {
        this.way = type;
        this.pageNumber++;
      } else if (pageNumber == 3) {
        this.service = type;
        this.pageNumber++;
      } else if (pageNumber == 4) {
        console.log(this.picker);
        if (this.picker != null) {
          this.pageNumber++;
        }
      } else if (pageNumber == 5) {
        if (this.addr != null && this.subAddr != null) {
          this.pageNumber++;
          this.submit();
        }
      }
    },
    async submit() {
      const request = {
        funeralDate: this.picker,
        location: this.addr + ' ' + this.subAddr,
        option: this.wayOption,
        petId: this.petId,
        question: this.question,
        service: this.service,
        way: this.way,
      };
      console.log(request);
      const sub = await PostPetEstimate(request);
      console.log(sub);
    },
    apiOpen() {
      new window.daum.Postcode({
        oncomplete: data => {
          this.addr = data.address;
        },
      }).open();
    },
  },
  mounted() {
    if (this.$route.params.pageNumber) {
      this.pageNumber = this.$route.params.pageNumber;
      this.petId = this.$route.params.petId;
    } else {
      this.pageNumber = 1;
    }
  },
};
</script>

<style scoped>
::v-deep .v-picker__body,
element.style {
  background: white !important;
  width: 450px !important;
}
::v-deep .v-responsive__sizer {
  width: 0px;
}
::v-deep .theme--light.v-text-field--solo > .v-input__control > .v-input__slot,
.theme--light.v-btn.v-btn--has-bg {
  background: #f6eedd;
  border-radius: 22px;
  width: 463px;
  height: 72px;
}
/* 
::v-deep .v-input--selection-controls__ripple {
  color: red;
}

.v-radio .v-icon {
  color: blue;
} */
</style>
