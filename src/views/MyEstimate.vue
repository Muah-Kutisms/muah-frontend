<template>
  <div style="margin-bottom: 1000px;">
    <SubHeader
      :filename="require('@/assets/myEstimate.png')"
      width="100%"
      :title="title"
    ></SubHeader>
    <v-row>
      <v-col>
        <v-select
          v-model="estimateId"
          label="내 견적서"
          :items="options"
          item-text="name"
          item-value="id"
          solo
          flat
          style="max-width:263px !important; height:74px !important; margin-left: 130px; margin-top: 50px;"
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div
          style="margin-left: 150px; margin-top: 30px; font-size: 32px; margin-bottom: 20px; color: #462908;   text-shadow: 1px 1px 1px lightgray;"
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
                      v-if="item.status == '예약전'"
                      v-bind="attrs"
                      v-on="on"
                      @click="statusChange(index)"
                      style="border-radius:20px; width: 150px; height: 43px; 
                    color: #552D00; background-color: #FFECD6; font-size: 24px;
                     font-family: NotoSansBold; float:right; margin-right:7%;"
                    >
                      예약하기
                    </v-btn>
                    <v-btn
                      v-if="item.status == '예약 승인'"
                      @click="statusChange(index)"
                      style="border-radius:20px; width: 150px; height: 43px; 
                    color: #552D00; background-color: #FF4646; font-size: 24px;
                     font-family: NotoSansBold; float:right; margin-right:7%;"
                    >
                      결제하기
                    </v-btn>
                    <v-btn
                      v-if="item.status == '예약 대기'"
                      @click="statusChange(index)"
                      style="border-radius:20px; width: 150px; height: 43px; 
                    color: #552D00; background-color: #FFECD6; font-size: 24px;
                     font-family: NotoSansBold; float:right; margin-right:7%;"
                    >
                      예약 취소
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
                v-if="item.status == '결제 완료'"
                style="width:93%;  height: 13%; overflow:auto; overflow-y: auto; margin-bottom:10px;"
              >
                <v-btn
                  readonly
                  style="border-radius:20px; width: 150px; height: 43px; 
                    color: #552D00; background-color: #FACE97; font-size: 24px;
                     font-family: NotoSansBold; float:left; margin-right:7%;  "
                >
                  {{ item.status }}
                </v-btn>
              </div>
              <div
                v-else-if="item.status == '예약 대기'"
                style="width:93%;  height: 13%; overflow:auto; overflow-y: auto; margin-bottom:10px;"
              >
                <v-btn
                  readonly
                  style="border-radius:20px; width: 150px; height: 43px; 
                    color: #552D00; background-color: #FACE97; font-size: 24px;
                     font-family: NotoSansBold; float:left; margin-right:7%;  "
                >
                  {{ item.status }}
                </v-btn>
              </div>
              <div
                style="font-size:23px; width:93%;  height: 10%; overflow:auto; overflow-y: auto;"
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
import Vue from 'vue';
import { GetMyEstimate } from '@/api/index';

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
      estimateId: null,
      dialog: false,
      imgFile: 'card',
      options: [],
      petData: [],
    };
  },
  methods: {
    async init() {
      //axios통신해서 값 받아오기
      //내 반려동물
      const estimateData = await GetMyEstimate();
      console.log(estimateData.data.data);
      if (estimateData.data.data.length == 0) {
        this.options = [
          { id: '견적서가 없습니다.', name: '견적서가 없습니다.' },
        ];
      } else {
        //내 견적 정보
        this.options = estimateData.data.data;
      }

      //값 바인딩
      this.petSpecies = '종 입니다';
      this.petWeight = '무게 입니다';
      this.petLayMethod = '안치 방법입니다';
      this.addService = '추가 서비스입니다';
      this.date = '날짜 입니다';
      this.location = '장소 입니다';
      this.question = '문의사항 입니다';
    },
    async getMyE(id) {
      //여기는 받아온 반려동물 id의 견적서를 조회합니다.
      console.log(id);
    },
    statusChange(index, status) {
      console.log(status);
      if (this.petData[index].status == '예약전') {
        this.dialog = true;
        //axios통신으로 상태 바꾸기
        this.petData[index].status = '예약 대기';
      } else if (this.petData[index].status == '예약 승인') {
        this.Payment(index);
      } else if (this.petData[index].status == '예약 대기') {
        this.petData[index].status = '예약전';
      }
    },
    Payment(index) {
      Vue.IMP().request_pay(
        {
          pg: 'html5_inicis',
          pay_method: 'card',
          merchant_uid: 'merchant_' + new Date().getTime(),
          name: '주문명:결제테스트',
          amount: this.petData[index].price,
          buyer_email: 'iamport@siot.do',
          buyer_name: '구매자이름',
          buyer_tel: '010-1234-5678',
          buyer_addr: '서울특별시 강남구 삼성동',
          buyer_postcode: '123-456',
        },
        result_success => {
          //성공할 때 실행 될 콜백 함수
          var msg = '결제가 완료되었습니다.';
          msg += '고유ID : ' + result_success.imp_uid;
          msg += '상점 거래ID : ' + result_success.merchant_uid;
          msg += '결제 금액 : ' + result_success.paid_amount;
          msg += '카드 승인번호 : ' + result_success.apply_num;
          alert(msg);
          this.petData[index].status = '결제 완료';
          console.log(this.petData[index]);
        },
        result_failure => {
          //실패시 실행 될 콜백 함수
          var msg = '결제에 실패하였습니다.';
          msg += '에러내용 : ' + result_failure.error_msg;
          alert(msg);
        },
      );
    },
  },
  watch: {
    estimateId: function(newVal) {
      this.getMyE(newVal);
    },
  },
  mounted() {
    this.init();
    this.getMyE();
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

::v-deep .v-input__slot {
  min-height: 74px;

  background-color: #fe843c !important;
}

::v-deep .v-text-field .v-input__slot {
  border-radius: 20px 20px 0px 0px;
}
</style>
