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
          item-text="sheetNumberId"
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
                {{ item.name }}
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
                      v-if="item.status == 'PROPOSED'"
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
                      v-if="item.status == 'APPROVED'"
                      @click="statusChange(index)"
                      style="border-radius:20px; width: 150px; height: 43px; 
                    color: #552D00; background-color: #FF4646; font-size: 24px;
                     font-family: NotoSansBold; float:right; margin-right:7%;"
                    >
                      결제하기
                    </v-btn>
                    <v-btn
                      v-if="item.status == 'RESERVED'"
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
                </v-card>
              </v-dialog>
            </div>
            <div style="margin-left: 15px; width: 100%; height: 100%;">
              <div
                v-if="item.status == 'COMPLETE'"
                style="width:93%;  height: 13%; overflow:auto; overflow-y: auto; margin-bottom:10px;"
              >
                <v-btn
                  readonly
                  style="border-radius:20px; width: 150px; height: 43px; 
                    color: #552D00; background-color: #FACE97; font-size: 24px;
                     font-family: NotoSansBold; float:left; margin-right:7%;  "
                >
                  결제완료
                </v-btn>
              </div>
              <div
                v-else-if="item.status == 'RESERVED'"
                style="width:93%;  height: 13%; overflow:auto; overflow-y: auto; margin-bottom:10px;"
              >
                <v-btn
                  readonly
                  style="border-radius:20px; width: 150px; height: 43px; 
                    color: #552D00; background-color: #FACE97; font-size: 24px;
                     font-family: NotoSansBold; float:left; margin-right:7%;  "
                >
                  예약 대기
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
                {{ item.content }}
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
import {
  GetMyEstimate,
  GetIdEstimate,
  getPetIdData,
  GetsheetIdEstimate,
  PutSheetStatus,
  PutProposalStatus,
} from '@/api/index';

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
      console.log(estimateData);
      if (estimateData.data.data.length == 0) {
        this.options = [
          { id: '견적서가 없습니다.', sheetNumberId: '견적서가 없습니다.' },
        ];
      } else {
        //내 견적 정보
        this.options = estimateData.data.data;
      }

      //값 바인딩
      this.petSpecies = '내 견적을 선택해주세요';
      this.petWeight = '';
      this.petLayMethod = '';
      this.addService = '';
      this.date = '';
      this.location = '';
      this.question = '';
    },
    async getMyE(id) {
      const Edata = await GetIdEstimate(id);
      console.log(Edata.data.data);
      const pet = await getPetIdData(Edata.data.data.petId);
      const sheet = await GetsheetIdEstimate(id);
      let Estimate = Edata.data.data;
      let petData = pet.data.data;
      let sheetData = sheet.data.data;

      this.petSpecies = petData.kind;
      this.petWeight = petData.weight;
      this.petLayMethod = Estimate.way.replace('<br />', ' ');
      this.addService = Estimate.service;
      this.date =
        Estimate.funeralDate[0] +
        '-' +
        Estimate.funeralDate[1] +
        '-' +
        Estimate.funeralDate[2];
      this.location = Estimate.location;
      this.question = Estimate.question;

      this.petData = sheetData;
      console.log(sheet); //sheet는 댓글이네 id는 댓글 아이디 sheetId가 별개
    },
    async statusChange(index) {
      //일단 this status는 댓글에 대한 상태여야 함.
      //sheet의 status를 변경은 하되 사용하면 안될듯.
      if (this.petData[index].status == 'PROPOSED') {
        //예약하기
        this.dialog = true;
        this.petData[index].status = 'RESERVED';
        await PutSheetStatus(this.petData[index].sheetId, {
          status: 'WAITING_APPROVAL',
        }); //시트 상태를 업체 승인 기다림으로 변경
        await PutProposalStatus(this.petData[index].id, {
          status: this.petData[index].status,
        }); //댓글 상태를 댓글 채택으로 바꿈
      } else if (this.petData[index].status == 'APPROVED') {
        //결제 하기
        this.Payment(index);

        await PutSheetStatus(this.petData[index].sheetId, {
          status: 'RESERVATION_CONFIRMED',
        });
        let a = await PutProposalStatus(this.petData[index].id, {
          status: 'COMPLETE',
        });

        console.log(a);
      } else if (this.petData[index].status == 'RESERVED') {
        //예약 취소
        this.petData[index].status = 'PROPOSED';
        await PutSheetStatus(this.petData[index].sheetId, {
          status: 'WAITING_RESERVATION',
        });
        await PutProposalStatus(this.petData[index].id, {
          status: this.petData[index].status,
        });
      }
      console.log(this.petData[index].status);
    },
    async Payment(index) {
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
          this.petData[index].status = 'COMPLETE';

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
