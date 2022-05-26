<template>
  <div style="width:1920px;">
    <SubHeader
      :filename="require('@/assets/hugging.png')"
      width="100%"
      :title="title"
    ></SubHeader>
    <div style="margin-top:100px;display:flex;justify-content:center;">
      <v-card style="height:1218px;width:1319px;margin-bottom:100px;">
        <v-app-bar absolute color="#633500" style="height:100px;">
          <div style="margin-top:40px;margin-left:20px;vertical-align: center;">
            <img :src="img" style="width:148px;height:69px;" />
          </div>
        </v-app-bar>
        <v-sheet>
          <v-row style="margin-top:200px;display:flex;justify-content:center;">
            <v-row style="display:flex;">
              <div
                style="font-family: NotoSansBold;font-size:35px;margin-left:155px;"
              >
                <span style="color:#FF5C00;">{{ petName }} </span>님의
                요청서입니다.
              </div>
              <div
                style=" font-family:NotoSansRegular;vertical-align:bottom; line-height: 70px; font-size: 20px; margin-left: 80px; color: #A2A2A2;"
              >
                {{ createDate }}
              </div>
            </v-row>
            <v-row style="margin-bottom:-370px;">
              <div style="margin-left: 155px;margin-top:30px;">
                <table>
                  <thead>
                    <tr style="max-width:1064px; ">
                      <th class="tableBorder">
                        <span style="margin-left:30px;">종</span>
                      </th>
                      <th class="tableBorder">
                        <span style="margin-left:30px;">무게</span>
                      </th>
                      <th class="tableBorder">
                        <span style="margin-left:30px;">안치 방법</span>
                      </th>
                      <th class="tableBorder">
                        <span style="margin-left:30px;">추가 서비스</span>
                      </th>
                      <th class="tableBorder">
                        <span style="margin-left:30px;">날짜</span>
                      </th>
                      <th class="tableBorder">
                        <span style="margin-left:30px;">지역</span>
                      </th>
                      <th
                        class="tableBorder"
                        style="border-bottom: 1px solid lightgray;"
                      >
                        <span style="margin-left:30px;">문의사항</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="tableWidth "
                      style="font-family: NotoSansRegular; width: 930px;"
                    >
                      <td class="tableBorder">
                        <span style="margin-left:220px;">{{ petSpecies }}</span>
                      </td>
                      <td class="tableBorder">
                        <span style="margin-left:220px;">{{ petWeight }}</span>
                      </td>
                      <td class="tableBorder">
                        <span style="margin-left:220px;">{{
                          petLayMethod
                        }}</span>
                      </td>
                      <td class="tableBorder">
                        <span style="margin-left:220px;">{{ addService }}</span>
                      </td>
                      <td class="tableBorder">
                        <span style="margin-left:220px;">{{ date }}</span>
                      </td>
                      <td class="tableBorder">
                        <span style="margin-left:220px;">{{ location }}</span>
                      </td>
                      <td
                        class="tableBorder tableBorderBottom"
                        style="border-bottom: 1px solid lightgray;"
                      >
                        <span style="margin-left:220px;">{{ question }}</span>
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
          </v-row>
          <v-row style="display:flex;justify-content:center;">
            <v-row>
              <div
                style="font-family: NotoSansBold;font-size:35px;margin-left:155px;"
              >
                <span style="color:#FF5C00;">견적 댓글 등록 </span>
              </div>
            </v-row>
            <v-row style="display:flex;">
              <div
                style="font-family: NotoSansMedium;font-size:18px;margin-left:155px;margin-top:30px;"
              >
                <textarea
                  class="form-control"
                  v-model="sheetText"
                  style="width:1061px;height:170px;background-color:#E1E1E1;border-radius:7px;outline-color: #A2A2A2;padding:12px 20px;"
                  placeholder="ex) 견적 안내드립니다. 종 (강아지) 무게 5kg 이상 - 10kg 미만 (기본 15만원) + 요람 세트 (20만원) + 관 (10만원) + 수의 (10만원)"
                ></textarea>
              </div>
            </v-row>
            <v-row style="display:flex;">
              <div
                style="font-family: NotoSansMedium;font-size:20px;margin-left:155px;margin-top:15px;position:relative;"
              >
                <span
                  style="padding:8px 20px;padding:8px 20px;position:absolute;"
                  >[합계]</span
                >
                <textarea
                  class="form-control"
                  v-model="price"
                  style="width:1061px;height:49px;background-color:#E1E1E1;border-radius:7px;padding:8px 80px;outline-color: #A2A2A2;"
                  placeholder="-만원(숫자만 입력)"
                ></textarea>
              </div>
            </v-row>
            <v-row style="display:flex;">
              <v-btn
                @click="addSheet()"
                style="width:671px;height:55px;border-radius:8px;background-color:#FF5C00;font-size:20px;font-family:NotoSansMedium;color:#FFFFFF;margin-left:330px;margin-top:30px;"
              >
                견적 댓글 등록 >
              </v-btn>
            </v-row>
          </v-row>
        </v-sheet>
      </v-card>
    </div>
  </div>
</template>

<script>
import SubHeader from '../components/common/SubHeader.vue';
import { GetEstimateId, getPetIdData, PostProposal } from '@/api/index';
import { getUserFromCookie } from '@/utils/cookies';
export default {
  components: { SubHeader },
  data() {
    return {
      title: '고객 견적 확인하기',
      message: '',
      petSpecies: String,
      petWeight: String,
      petLayMethod: String,
      addService: String,
      date: String,
      location: String,
      question: String,
      count: Number,
      sheetText: '', //견적 댓글
      dialog: false,
      petName: '',
      createDate: '',
      price: '', //금액
      petData: '',
      img: require('@/assets/muahwhite.png'),
    };
  },
  methods: {
    async init() {
      //axios통신해서 값 받아오기
      //값 바인딩

      this.petData = this.$route.query;
      const sheet = await GetEstimateId(this.petData.sheetId);
      const pet = await getPetIdData(this.petData.petId);
      let funeralData = sheet.data.data;
      let petData = pet.data.data;
      this.petSpecies = petData.kind;
      this.petWeight = petData.weight;
      this.petLayMethod = funeralData.way.replace('<br/>', ' ');
      this.addService = funeralData.service;
      this.date =
        funeralData.funeralDate[0] +
        '-' +
        funeralData.funeralDate[1] +
        '-' +
        funeralData.funeralDate[2];
      console.log(funeralData);
      this.location = funeralData.location;
      this.question = funeralData.question;
      this.petName = petData.name;
      this.createDate =
        funeralData.createdDate[0] +
        '-' +
        funeralData.createdDate[1] +
        '-' +
        funeralData.createdDate[2];
    },
    on() {
      this.dialog = true;
    },
    async addSheet() {
      await PostProposal({
        content: this.sheetText,
        price: this.price,
        sheetId: this.petData.sheetId,
        writerId: getUserFromCookie(),
      });
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
  width: 1064px;
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
</style>
