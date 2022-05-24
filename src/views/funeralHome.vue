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
              ><v-img v-bind:src="img"></v-img>
            </v-card>
            <div style="margin-top:10px; ">
              <v-btn
                width="212px"
                height="39px"
                color="#C2C2C2"
                style="font-size:22px; border-radius:9px"
                ><div style="font-size:20px;">수정하기</div></v-btn
              >
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
                    {{ item.petdata }}
                  </div>
                  <div
                    style=" font-family:NotoSansRegular; float: left; vertical-align:bottom; line-height: 60px; font-size: 15px; font-weight:700;
margin-left: -135px; color: #A2A2A2;"
                  >
                    {{ item.createDate }}
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row style="margin-left:40px;margin-top:-35px;">
              <v-col cols="auto">
                <v-btn
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;
                     font-family: NotoSansBold;letter-spacing:-0.3px;
"
                >
                  예약 대기
                </v-btn>
              </v-col>
              <v-col cols="auto" style="margin-left:-15px;">
                <v-btn
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #FACE97; font-size: 24px;
                     font-family: NotoSansBold;letter-spacing:-0.3px;"
                >
                  예약 승인 전
                </v-btn>
              </v-col>
              <v-col cols="auto" style="margin-left:-15px;">
                <v-btn
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;letter-spacing:-0.3px;

                     font-family: NotoSansBold;"
                >
                  예약 승인하기
                </v-btn>
              </v-col>
              <v-col cols="auto" style="margin-left:-15px;">
                <v-btn
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;
                     font-family: NotoSansBold;letter-spacing:-0.3px;
"
                >
                  예약 승인 후
                </v-btn>
              </v-col>
            </v-row>
            <v-row
              style="margin-left:60px;margin-top:20px;font-size:26px;width: 100%; height: 100%;
"
            >
              <div style="position:relative;">
                <div>종 : {{ petSpecies }}</div>
                <div>무게 : {{ petWeight }}</div>
                <div>일시 : {{ date }}</div>
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
                    {{ item.petdata }}
                  </div>
                  <div
                    style=" font-family:NotoSansRegular; float: left; vertical-align:bottom; line-height: 60px; font-size: 15px; font-weight:700;
margin-left: -135px; color: #A2A2A2;"
                  >
                    {{ item.createDate }}
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row style="margin-left:40px;margin-top:-35px;">
              <v-col cols="auto">
                <v-btn
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;
                     font-family: NotoSansBold;letter-spacing:-0.3px;
"
                >
                  예약 대기
                </v-btn>
              </v-col>
              <v-col cols="auto" style="margin-left:-15px;">
                <v-btn
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;
                     font-family: NotoSansBold;letter-spacing:-0.3px;"
                >
                  예약 승인 전
                </v-btn>
              </v-col>
              <v-col cols="auto" style="margin-left:-15px;">
                <v-btn
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color: #CECECE; font-size: 24px;letter-spacing:-0.3px;

                     font-family: NotoSansBold;"
                >
                  예약 승인하기
                </v-btn>
              </v-col>
              <v-col cols="auto" style="margin-left:-15px;">
                <v-btn
                  style="border-radius:20px; width: 150x; height: 42px; 
                    color: #552D00; background-color:#FACE97; font-size: 24px;
                     font-family: NotoSansBold;letter-spacing:-0.3px;
"
                >
                  예약 승인 후
                </v-btn>
              </v-col>
            </v-row>
            <v-row
              style="margin-left:60px;margin-top:20px;font-size:26px;width: 100%; height: 100%;
"
            >
              <div style="position:relative;">
                <div>종 : {{ petSpecies }}</div>
                <div>무게 : {{ petWeight }}</div>
                <div>일시 : {{ date }}</div>
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
export default {
  data() {
    return {
      imgFile: 'card',
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
      petDatafinish: [
        {
          petdata: '모카',
          context: '견적 세부내역',
          price: '55만원',
          createDate: '2022-05-07',
        },
        {
          petdata: '나비',
          context: '견적 세부내용',
          price: '55만원',
          createDate: '2022-05-07',
        },
      ],

      img: require('@/assets/womandog.png'),
    };
  },
  methods: {
    async init() {
      // const { data } = await fetchPosts(); // this.menu =
      'data';
      this.userName = '이름입니다';
      this.userLoction = '이메일입니다';
      //axios통신해서 값 받아오기 //값 바인딩
      this.petSpecies = '종 입니다';
      this.petWeight = '무게 입니다';
      this.petLayMethod = '안치 방법입니다';
      this.addService = '추가 서비스입니다';
      this.date = '날짜입니다';
      this.location = '장소 입니다';
      this.question = '문의사항 입니다';
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
