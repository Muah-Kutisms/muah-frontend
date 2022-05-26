<template>
  <div style="margin-bottom: 1000px;">
    <SubHeader
      :filename="require('@/assets/hugging.png')"
      width="100%"
      :title="title"
    ></SubHeader>

    <v-row>
      <v-col>
        <div
          style="margin-left: 150px; margin-top: 80px; font-size: 32px; margin-bottom: 50px; color: #462908;   text-shadow:3px 3px 1px rgba(0, 0, 0, 0.25)
;"
        >
          고객 견적 확인하기
        </div>
      </v-col>
    </v-row>
    <v-row style="justify-content:center;">
      <v-col
        v-for="(item, index) in petData"
        :key="index"
        cols="8"
        style="margin-bottom: 50px; width: 100%; height: 100%;"
      >
        <v-img :src="require(`@/assets/${imgFile}.png`)">
          <div style="width:1237px;height:695px;">
            <v-row>
              <v-col>
                <div style="margin-top:30px;">
                  <div
                    style=" font-family:NotoSansBold; float: left; font-size: 30px; margin-left: -300px; width: 40%;  height: 100px; overflow:auto; overflow-y:auto"
                  >
                    {{ item.petdata }}
                  </div>
                  <div
                    style=" font-family:NotoSansRegular; float: left; vertical-align:bottom; line-height: 60px; font-size: 15px; margin-left: -360px; color: #A2A2A2;"
                  >
                    {{ item.createDate }}
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row style="margin-left:-470px;margin-top:40px;">
              <v-col cols="auto">
                <v-btn
                  style="border-radius:20px; width: 180x; height: 51px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;
                     font-family: NotoSansBold;"
                >
                  예약 대기
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  style="border-radius:20px; width: 180x; height: 51px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;
                     font-family: NotoSansBold;"
                >
                  예약 승인 전
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  style="border-radius:20px; width: 180x; height: 51px; 
                    color: #552D00; background-color: #FACE97
; font-size: 24px;
                     font-family: NotoSansBold;"
                >
                  예약 승인하기
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  style="border-radius:20px; width: 180x; height: 51px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;
                     font-family: NotoSansBold;"
                >
                  예약 승인 후
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <div style="margin-left: -440px;margin-top:30px;">
                <table>
                  <thead>
                    <tr style="min-width:300px; ">
                      <th class="tableBorder"><span>종</span></th>
                      <th class="tableBorder"><span>무게</span></th>
                      <th class="tableBorder"><span>안치 방법</span></th>
                      <th class="tableBorder"><span>추가 서비스</span></th>
                      <th class="tableBorder"><span>날짜</span></th>
                      <th class="tableBorder"><span>지역</span></th>
                      <th
                        class="tableBorder"
                        style="border-bottom: 1px solid lightgray;"
                      >
                        <span>문의사항</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="tableWidth "
                      style="font-family: NotoSansRegular; width: 964px;"
                    >
                      <td class="tableBorder">
                        {{ petSpecies }}
                      </td>
                      <td class="tableBorder">
                        <span>{{ petWeight }}</span>
                      </td>
                      <td class="tableBorder">
                        <span>{{ petLayMethod }}</span>
                      </td>
                      <td class="tableBorder">
                        <span>{{ addService }}</span>
                      </td>
                      <td class="tableBorder">
                        <span>{{ date }}</span>
                      </td>
                      <td class="tableBorder">
                        <span>{{ location }}</span>
                      </td>
                      <td
                        class="tableBorder tableBorderBottom"
                        style="border-bottom: 1px solid lightgray;"
                      >
                        <span>{{ question }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- <v-data-table
            :headers="headers"
            hide-default-header
            hide-default-footer
            :items="desserts"
            class="elevation-1"
          ></v-data-table> -->
              </div>
            </v-row>
          </div>
          <div
            style="font-size:26px;margin-top:-100px;margin-left:-450px;display:flex;
"
          >
            <span style="font-family: NotoSansBold;">[합계] </span
            ><span style="color:#FF3636">{{ item.price }}</span>
          </div>
          <div style="margin-left:445px;">
            <v-btn
              width="180px"
              height="51.4px"
              style="border-radius:7px; color: #552D00
;background-color: #FF6868; font-size: 24px; font-family: NotoSansBold;"
            >
              <span style="margin-top:-3px;">견적내기</span>
            </v-btn>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SubHeader from '../components/common/SubHeader.vue';

export default {
  components: { SubHeader },
  data() {
    return {
      title: '고객 견적 확인하기',
      petSpecies: String,
      petWeight: String,
      petLayMethod: String,
      addService: String,
      date: String,
      location: String,
      question: String,
      count: Number,
      dialog: false,
      imgFile: 'card',
      petData: [
        {
          petdata: '초코',
          context: '견적 세부내역',
          price: '55만원',
          createDate: '2022-05-07',
        },
        {
          petdata: '시루',
          context: '견적 세부내용',
          price: '55만원',
          createDate: '2022-05-07',
        },
      ],
    };
  },
  methods: {
    async init() {
      //axios통신해서 값 받아오기
      //값 바인딩
      this.petSpecies = '종 입니다';
      this.petWeight = '무게 입니다';
      this.petLayMethod = '안치 방법입니다';
      this.addService = '추가 서비스입니다';
      this.date = '날짜 입니다';
      this.location = '장소 입니다';
      this.question = '문의사항 입니다';
    },
    on() {
      this.dialog = true;
    },
  },
  watch: {
    dialog: function(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
table {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  border-collapse: collapse;
  height: 560px;
  font-size: 16px;
  margin-bottom: 200px;
  width: 1080px;
}

tbody,
thead {
  display: flex;
}

th,
td {
  display: block;
  padding: 5px;
  text-align: start;
  height: 38px;
  line-height: -100px;
}
th {
  color: #676767;

  font-family: NotoSansRegular !important;
  font-weight: lighter !important;
}
.tableBorder {
  border-top: 1px solid lightgray;
}
.tableBorderBottom {
  border-bottom: 1px solid lightgray !important;
}
.noneShadow {
  border-radius: 18px !important;
}
::v-deep .v-dialog {
  box-shadow: none !important;
  border-radius: 25px !important;
}
</style>
