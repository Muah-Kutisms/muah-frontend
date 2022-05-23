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
          style="display:flex; justify-content:left; color: #462908;   text-shadow: 1px 1px 1px lightgray;
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
          style="display:flex; justify-content:left; color: #462908;   text-shadow: 1px 1px 1px lightgray;
         margin-left: 210px; font-size: 32px; margin-bottom: 15px;"
        >
          예약 관리
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
          <div style="width:738px; height:415px"></div>
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
      number: 0,
      headers: [
        { text: 'name', value: 'name' },
        { text: 'content', value: 'content' },
        { text: 'etc', value: 'etc' },
      ],
      desserts: [],
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
