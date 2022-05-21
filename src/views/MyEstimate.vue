<template>
  <div style="margin-bottom: 1000px;">
    <SubHeader
      :filename="require('@/assets/myEstimate.png')"
      width="100%"
      :title="title"
      :content1="content1"
      :content2="content2"
      :content3="content3"
    ></SubHeader>
    <v-row>
      <v-col>
        <div
          style="margin-left: 150px; margin-top: 100px; font-size: 32px; margin-bottom: 20px; color: #462908;   text-shadow: 1px 1px 1px lightgray;"
        >
          견적 입력정보
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div style="margin-left: 150px; margin-bottom: 50px;">
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
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div
          style="margin-left: 150px; margin-top: 20px; font-size: 32px; margin-bottom: 20px; color: #462908;   text-shadow: 1px 1px 1px lightgray;"
        >
          견적서 확인하기
        </div>
      </v-col>
    </v-row>
    <v-row style="justify-content:center;">
      <v-col
        v-for="(item, index) in petData"
        :key="index"
        cols="5"
        style="margin-bottom: 50px; width: 100%; height: 100%;"
      >
        <v-img :src="require(`@/assets/${imgFile}.png`)">
          <div style="width:738px; height:415px">
            <div style="margin-top:10px;">
              <div
                style=" font-family:NotoSansBold; float: left; font-size: 30px; margin-left: 90px; width: 40%;  height: 100px; overflow:auto; overflow-y:auto"
              >
                {{ item.petdata }}
              </div>
              <div
                style=" font-family:NotoSansRegular; float: left; vertical-align:bottom; line-height: 60px; font-size: 15px; margin-left: 10px; color: #A2A2A2;"
              >
                {{ item.createDate }}
              </div>
              <v-dialog
                v-model="dialog"
                width="730"
                persistent
                light
                overlay-color="#FFFFFF"
                overlay-opacity="100px"
                :eager="true"
                :retain-focus="false"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div style="padding-top:10px">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="on()"
                      style="border-radius:20px; width: 150px; height: 43px; 
                    color: #552D00; background-color: #FFECD6; font-size: 24px;
                     font-family: NotoSansBold; float:right; margin-right:7%;"
                    >
                      예약하기
                    </v-btn>
                  </div>
                </template>

                <v-card
                  width="730px"
                  height="416px"
                  class="noneShadow"
                  style="    display: flex;flex-direction: column
    
    justify-content: center;"
                >
                  <v-card-title style="align-items: flex-start;">
                    <v-spacer></v-spacer>
                    <v-btn
                      icon
                      @click="dialog = false"
                      style="font-size: 30px; "
                    >
                      X
                    </v-btn>
                  </v-card-title>

                  <v-card-text
                    style="display:flex; justify-content: center; align-items: center; font-size: 32px; margin-top: 10%; color: black;"
                  >
                    예약이 완료되었습니다.
                  </v-card-text>

                  <v-card-actions
                    style="display:flex; justify-content: center; align-items: center; margin-top: 3%;"
                  >
                    <v-btn
                      color="#FF8139"
                      width="285px"
                      height="75px"
                      style="border-radius:6px"
                    >
                      <span style="font-size: 30px; color:white"
                        >예약 내역 바로가기</span
                      >
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <div style="margin-left: 15px; width: 100%; height: 100%;">
              <div
                style="margin-top:100px; font-size:23px; width:93%;  height: 10%; overflow:auto; overflow-y: auto;"
              >
                견적 안내드립니다.
              </div>
              <div
                style="margin-top:10px; font-size:23px; width:93%; height: 40%; overflow:auto; overflow-y: auto"
              >
                {{ item.context }}
              </div>
              <div style="font-size:26px">
                <span style="font-family: NotoSansBold;">[합계]</span
                ><span style="color:#FF3636">{{ item.price }}</span>
              </div>
            </div>
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
      title: '내 견적 확인하기',
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
          petdata: '송 장례식장',
          context: '견적 세부내역',
          price: '56만원',
          createDate: '2022-03-12',
        },
        {
          petdata: '순 장례식장',
          context: '견적 세부내용',
          price: '56만원',
          createDate: '2022-03-12',
        },
        {
          petdata: '솔 장례식장',
          context: '견적 세부내용',
          price: '56만원',
          createDate: '2022-03-12',
        },
        {
          petdata: '수 장례식장',
          context: '견적 세부내용',
          price: '56만원',
          createDate: '2022-03-12',
        },
        {
          petdata: '솔 장례식장',
          context: '견적 세부내용',
          price: '56만원',
          createDate: '2022-03-12',
        },
        {
          petdata: '수 장례식장',
          context: '견적 세부내용',
          price: '56만원',
          createDate: '2022-03-12',
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
  display: -webkit-box;
  display: -ms-flexbox;
  overflow-x: auto;
  overflow-y: hidden;
  border-collapse: collapse;
  height: 560px;
  font-size: 30px;
  margin-bottom: 50px;
}

tbody,
thead {
  display: flex;
}

th,
td {
  display: block;
  padding: 10px;
  text-align: start;
  height: 80px;
  line-height: 60px;
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
