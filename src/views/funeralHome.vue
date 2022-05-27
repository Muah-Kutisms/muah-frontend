<template>
  <div>
    <div style="display:flex;flex-direction: column;">
      <div
        style="display:flex; justify-content:center; font-size: 32px; font-family: NotoSansBold; margin-bottom: 30px;"
      >
        마이페이지
      </div>
    </div>
    <v-row>
      <v-col>
        <div
          style="display:flex; justify-content:left; color: #462908; text-shadow: 1px 1px 1px lightgray;
         margin-left: 210px; font-size: 32px; margin-bottom: 15px;"
        >
          <span
            style="font-weight:500;text-shadow:3px 3px 1px rgba(0, 0, 0, 0.25);padding-left:10px;"
          >
            장소 정보 관리
          </span>
        </div>
        <div
          style="display:flex; justify-content:center; margin-left: 50px; margin-bottom: 50px;"
        >
          <div style="margin-right: 70px;">
            <v-card
              outlined
              width="215px"
              height="283px"
              color="#DFDFDF
"
              ><v-img :src="imageSrc" width="215px" height="283px"></v-img>
            </v-card>
            <div style="margin-top:10px; margin-right: -300px; ">
              <!-- <v-btn
                width="212px"
                height="39px"
                color="#C2C2C2"
                style="font-size:22px; border-radius:9px"
                ><div style="font-size:20px;">수정하기</div></v-btn
              > -->
              <input
                ref="image"
                @change="uploadImg()"
                type="file"
                accept="image/*"
                id="chooseFile"
                name="chooseFile"
              />
            </div>
          </div>
          <div style="margin-top:70px;">
            <table>
              <thead>
                <tr style="min-width:264px; ">
                  <th class="tableBorder"><span>이름</span></th>
                  <th class="tableBorder"><span>위치</span></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="tableWidth"
                  style="font-family: NotoSansRegular;min-width:1000px;"
                >
                  <td style="border-top:1px solid lightgray;">
                    <div style="margin-left:47px">{{ userName }}</div>
                  </td>
                  <td class="tableBorder">
                    <span>{{ userLocation }}</span>
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
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div
          style="display:flex; justify-content:left; color: #462908; text-shadow: 1px 1px 1px lightgray;
         margin-left: 230px; font-size: 32px; margin-bottom: 15px;margin-top:-20px"
        >
          <span
            style="font-weight:500;text-shadow:3px 3px 1px rgba(0, 0, 0, 0.25);padding-left:10px;"
          >
            예약 관리
          </span>
          <span style="margin-left:1180px">
            <v-btn width="219px" height="37px" color="#572F00" @click="go()"
              ><span style="color:white; font-size:20px">더보기</span></v-btn
            >
          </span>
        </div>
      </v-col>
    </v-row>
    <v-row style="justify-content:center;margin-left:100px;">
      <v-col
        v-for="(item, index) in petData"
        :key="index"
        cols="5"
        style="margin-bottom: 50px; width: 100%; height: 100%;"
      >
        <v-img :src="require(`@/assets/${imgFile}.png`)">
          <div style="width:738px; height:415px">
            <v-row>
              <v-col>
                <div style="margin-top:13px;">
                  <div
                    style=" font-family:NotoSansBold; float: left; font-size: 30px;font-weight:700; margin-left:130px; width: 40%;  height: 100px; overflow:auto; overflow-y:auto"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    style=" font-family:NotoSansRegular; float: left; vertical-align:bottom; line-height: 60px; font-size: 15px; font-weight:700;
margin-left: -135px; color: #A2A2A2;"
                  >
                    {{ item.date }}
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row style="margin-left:40px;margin-top:-35px;">
              <v-col cols="auto"> </v-col>
              <v-col cols="auto" style="margin-left:-15px;">
                <v-btn
                  v-if="item.pstatus == 'RESERVED'"
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #FACE97; font-size: 24px;
                     font-family: NotoSansBold;letter-spacing:-0.3px;"
                >
                  예약 승인 전
                </v-btn>
                <v-btn
                  v-else-if="item.pstatus == 'APPROVED'"
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #FACE97; font-size: 24px;
                     font-family: NotoSansBold;letter-spacing:-0.3px;"
                >
                  결제 전
                </v-btn>
              </v-col>
              <v-col cols="auto" style="margin-left:-15px;">
                <v-btn
                  v-if="item.pstatus == 'RESERVED'"
                  @click="changeStatus(index)"
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;letter-spacing:-0.3px;

                     font-family: NotoSansBold;"
                >
                  예약 승인하기
                </v-btn>
                <v-btn
                  v-else-if="item.pstatus == 'APPROVED'"
                  @click="changeStatus(index)"
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;letter-spacing:-0.3px;

                     font-family: NotoSansBold;"
                >
                  승인 취소하기
                </v-btn>
              </v-col>
              <v-col cols="auto" style="margin-left:-15px;"> </v-col>
            </v-row>
            <v-row
              style="margin-left:60px;margin-top:20px;font-size:26px;width: 100%; height: 100%;
"
            >
              <div style="position:relative;">
                <div>종 : {{ item.kind }}</div>
                <div>무게 : {{ item.weight }}</div>
                <div>일시 : {{ item.createDate }}</div>
                <div style="float:left;">
                  ...
                </div>
                <v-btn
                  style="margin-left:85px;font-size:20px; background-color:#C2C2C2; width:87px; height:28px; border-radius:10px;font-family: NotoSansBold;
"
                >
                  더보기
                </v-btn>
                <div style="margin-top:25px;">
                  <span style="font-family: NotoSansBold;">[합계] </span
                  ><span style="color:#FF3636">{{ item.price }}</span>
                </div>
              </div>
            </v-row>
          </div>
        </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div
          style="display:flex; justify-content:left; color: #462908; text-shadow: 1px 1px 1px lightgray;
         margin-left: 230px; font-size: 32px; margin-bottom: 15px; margin-top:30px;"
        >
          <span
            style="font-weight:500;text-shadow:3px 3px 1px rgba(0, 0, 0, 0.25);padding-left:10px;"
          >
            거래 내역
          </span>
        </div>
      </v-col>
    </v-row>
    <v-row style="justify-content:center;margin-left:100px;">
      <v-col
        v-for="(item, index) in petDatafinish"
        :key="index"
        cols="5"
        style="margin-bottom: 50px; width: 100%; height: 100%;"
      >
        <v-img :src="require(`@/assets/${imgFile}.png`)">
          <div style="width:738px; height:415px">
            <v-row>
              <v-col>
                <div style="margin-top:13px;">
                  <div
                    style=" font-family:NotoSansBold; float: left; font-size: 30px;font-weight:700; margin-left:130px; width: 40%;  height: 100px; overflow:auto; overflow-y:auto"
                  >
                    {{ item.petName }}
                  </div>
                  <div
                    style=" font-family:NotoSansRegular; float: left; vertical-align:bottom; line-height: 60px; font-size: 15px; font-weight:700;
margin-left: -135px; color: #A2A2A2;"
                  >
                    {{ item.createdDate }}
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row style="margin-left:40px;margin-top:-35px;">
              <v-col cols="auto"> </v-col>
              <v-col cols="auto" style="margin-left:-15px;"> </v-col>
              <v-col cols="auto" style="margin-left:-15px;"> </v-col>
              <v-col cols="auto" style="margin-left:-15px;">
                <v-btn
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color:#FACE97; font-size: 24px;
                     font-family: NotoSansBold;letter-spacing:-0.3px;
"
                >
                  결제 완료
                </v-btn>
              </v-col>
            </v-row>
            <v-row
              style="margin-left:60px;margin-top:20px;font-size:26px;width: 100%; height: 100%;
"
            >
              <div style="position:relative;">
                <div>종 : {{ item.kind }}</div>
                <div>무게 : {{ item.weight }}</div>
                <div>일시 : {{ item.date }}</div>
                <div style="float:left;">
                  ...
                </div>
                <v-btn
                  style="margin-left:85px;font-size:20px; background-color:#C2C2C2; width:87px; height:28px; border-radius:10px;font-family: NotoSansBold;
"
                >
                  더보기
                </v-btn>
                <div style="margin-top:25px;">
                  <span style="font-family: NotoSansBold;">[합계] </span
                  ><span style="color:#FF3636">{{ item.price }}</span>
                </div>
              </div>
            </v-row>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  PostUserImage,
  GetUser,
  GetCompany,
  getPetIdData,
  PutProposalStatus,
  PutSheetStatus,
} from '@/api/index';
import { getUserFromCookie } from '@/utils/cookies';
export default {
  data() {
    return {
      imgFile: 'card',
      imageSrc: '',
      userName: String,
      userLocation: String,
      petSpecies: String,
      petWeight: String,
      petLayMethod: String,
      addService: String,
      date: String,
      location: String,
      question: String,
      count: Number,
      dialog: false,
      number: 0,
      headers: [
        { text: 'name', value: 'name' },
        { text: 'content', value: 'content' },
        { text: 'etc', value: 'etc' },
      ],
      desserts: [],
      petData: [],
      petDatafinish: [],

      img: require('@/assets/womandog.png'),
    };
  },
  methods: {
    async init() {
      this.id = getUserFromCookie();
      const { data } = await GetUser(this.id);
      let userData = { data }.data.data;
      // const { data } = await fetchPosts(); // this.menu =
      this.userName = userData.funeralName;
      this.userLocation = userData.address.city;
      this.imageSrc = userData.image.imageUrl;
      let Data = await GetCompany(this.id);
      this.petData = Data.data.data[1];
      for (let i = 0; i < this.petData.length; i++) {
        const pet = await getPetIdData(this.petData[i].petId);

        let petDetail = pet.data.data;
        this.petData[i].date =
          this.petData[i].funeralDate[0] +
          '-' +
          this.petData[i].funeralDate[1] +
          '-' +
          this.petData[i].funeralDate[2];
        this.petData[i].name = petDetail.name;
        this.petData[i].kind = petDetail.kind;
        this.petData[i].weight = petDetail.weight;
      }
      console.log(this.petData);
      this.petDatafinish = Data.data.data[2];
      for (let i = 0; i < this.petDatafinish.length; i++) {
        const pet = await getPetIdData(this.petDatafinish[i].petId);
        let petDetail = pet.data.data;
        this.petDatafinish[i].createdDate =
          this.petDatafinish[i].createdDate[0] +
          '-' +
          this.petDatafinish[i].createdDate[1] +
          '-' +
          this.petDatafinish[i].createdDate[2];
        this.petDatafinish[i].date =
          this.petDatafinish[i].funeralDate[0] +
          '-' +
          this.petDatafinish[i].funeralDate[1] +
          '-' +
          this.petDatafinish[i].funeralDate[2];
        this.petDatafinish[i].kind = petDetail.kind;
        this.petDatafinish[i].weight = petDetail.weight;
      }
    },
    async uploadImg() {
      this.img = this.$refs['image'].files[0];
      const url = URL.createObjectURL(this.img);
      this.imageSrc = url;
      this.imgForm = new FormData();
      this.imgForm.append('imgFile', this.img);
      await PostUserImage(this.id, this.imgForm);
    },
    go() {
      this.$router.push(`/funeral/estimate/funeralHomeDetail`);
    },
    async changeStatus(index) {
      if (this.petData[index].pstatus == 'APPROVED') {
        this.petData[index].pstatus = 'RESERVED';
        await PutSheetStatus(this.petData[index].id, {
          status: 'WATING_APPROVAL',
        });
        await PutProposalStatus(this.petData[index].Pid, {
          status: this.petData[index].pstatus,
        });
      } else if (this.petData[index].pstatus == 'RESERVED') {
        this.petData[index].pstatus = 'APPROVED';
        await PutSheetStatus(this.petData[index].id, {
          status: 'WAITING_PAYMENT',
        });
        await PutProposalStatus(this.petData[index].Pid, {
          status: this.petData[index].pstatus,
        });
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.btn:hover {
  color: '#FFB388';
}
table {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  overflow-x: auto;
  overflow-y: hidden;
  border-collapse: collapse;
  height: 323px;
  width: 1264px;
  font-size: 30px;
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
  background-color: #dfdfdf;
  color: #676767;

  font-family: NotoSansRegular !important;
  font-weight: lighter !important;
}

.tableWidth {
  min-width: 300px;
}
.tableBorder {
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
}
table span {
  margin-left: 50px;
}
</style>
