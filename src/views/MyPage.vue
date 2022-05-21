<template>
  <div>
    <div style="display:flex;flex-direction: column;">
      <div
        style="display:flex; justify-content:center; font-size: 32px; font-family: NotoSansBold; margin-bottom: 30px;"
      >
        마이페이지
      </div>
      <div style="display:flex; justify-content:center; margin-bottom: 50px;">
        <div v-for="([type, imgFile], item) in menu" :key="item">
          <v-hover v-slot="{ hover }">
            <div style="margin-left:50px">
              <v-btn
                width="177px"
                height="222px"
                elevation="2"
                :style="{ 'background-color': hover ? '#F1E7D4' : '#FFFFFF' }"
                style="flex-direction: column; border-radius:48px;"
              >
                <div style="display:block;">
                  <div
                    v-if="type == '배송' || type == '내가 쓴 글'"
                    style=" height:213px; display:flex; align-items:flex-start; padding-top: 25px; padding-left: 7px;"
                  >
                    <div>
                      <img :src="require(`@/assets/${imgFile}.png`)" />
                    </div>
                  </div>
                  <div
                    v-else-if="
                      type == '내 반려동물' ||
                        type == '찜 목록' ||
                        type == '내 견적 확인'
                    "
                    style="height:213px; display:flex; align-items:flex-start"
                  >
                    <div>
                      <img :src="require(`@/assets/${imgFile}.png`)" />
                    </div>
                  </div>
                  <div>
                    <div
                      style="margin-top:-50px;font-size:24px;display:flex; justify-content: center; text-align:start"
                    >
                      {{ type }}
                    </div>
                  </div>
                </div>
              </v-btn>
            </div>
          </v-hover>
        </div>
      </div>
      <div
        style="display:flex; justify-content:left; color: #462908;   text-shadow: 1px 1px 1px lightgray;
         margin-left: 210px; font-size: 32px; margin-bottom: 15px;"
      >
        회원정보 관리
      </div>
      <div
        style="display:flex; justify-content:center; margin-left: 50px; margin-bottom: 50px;"
      >
        <div style="margin-right: 70px;">
          <v-card outlined width="215px" height="267px"
            ><v-img v-bind:src="img"></v-img>
          </v-card>
          <div style="margin-top:10px; ">
            <v-btn
              width="212px"
              height="39px"
              depressed
              color="#E3BF96"
              style="font-size:22px; border-radius:9px"
              ><div style="font-size:24px; color:white">파일 업로드</div></v-btn
            >
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr style="min-width:264px; ">
                <th><span>이름</span></th>
                <th class="tableBorder"><span>이메일</span></th>
                <th class="tableBorder"><span>전화번호</span></th>
                <th class="tableBorder"><span>닉네임</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="tableWidth" style="font-family: NotoSansRegular;">
                <td>
                  <v-card
                    outlined
                    style="background-color:rgba(34,34,34,0); width: 473px; margin-left:25px"
                    ><div style="margin-left:25px">
                      {{ userName }}
                    </div></v-card
                  >
                </td>
                <td class="tableBorder">
                  <span>{{ userEmail }}</span>
                </td>
                <td class="tableBorder">
                  <span>{{ userPhoneNumber }}</span>
                </td>
                <td class="tableBorder">
                  <span>{{ userNickname }}</span>
                </td>
              </tr>
              <tr class="tableWidth ">
                <td></td>
                <td class="tableBorder">
                  <v-btn
                    width="350px"
                    height="50px"
                    color="#E3BF96"
                    style=" display:flex; align-items:center; justify-content:center; border-radius: 15px;"
                  >
                    <div
                      style="display:flex; justify-content:center; align-items:center;"
                    >
                      <v-img
                        src="@/assets/google.png"
                        width="53"
                        height="40"
                        contain
                      ></v-img>
                      <p
                        style="font-size:27px; color:white;text-transform:lowercase"
                      >
                        google 로그인
                      </p>
                    </div>
                  </v-btn>
                </td>
                <td class="tableBorder">
                  <v-btn
                    width="154px"
                    height="50px"
                    depressed
                    color="#E3BF96"
                    bark
                    style="border-radius:9px"
                    ><div style="font-size:24px; color:white">
                      변경하기
                    </div></v-btn
                  >
                </td>
                <td class="tableBorder">
                  <v-btn
                    width="154px"
                    depressed
                    bark
                    color="#E3BF96"
                    height="50px"
                    style="border-radius:9px"
                    ><div style="font-size:24px; color:white">
                      변경하기
                    </div></v-btn
                  >
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
      <div
        style="display:flex; justify-content:left; margin-left: 210px; font-size: 32px;
        color: #462908;   text-shadow: 1px 1px 1px lightgray;"
      >
        예약내역
        <v-btn
          width="675px"
          height="80px"
          style="margin-left: 200px; background-color: #FDFCF7; display: flex;justify-content: flex-start;"
          ><span style="font-size:25px;  padding-left: 20px;">
            <span style="color:red">{{ number }}건</span>의 예약 내역이
            있습니다.</span
          ></v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        ['내 반려동물', 'mypage1'],
        ['찜 목록', 'mypage2'],
        ['배송', 'mypage3'],
        ['내가 쓴 글', 'mypage4'],
        ['내 견적 확인', 'mypage5'],
      ],
      userName: String,
      userEmail: String,
      userPhoneNumber: String,
      userNickname: String,
      number: 0,
      headers: [
        { text: 'name', value: 'name' },
        { text: 'content', value: 'content' },
        { text: 'etc', value: 'etc' },
      ],
      desserts: [],
      img: require('@/assets/women.png'),
    };
  },
  methods: {
    init() {
      //axios통신해서 값 받아오기
      //값 바인딩
      this.userName = '이름입니다';
      this.userEmail = '이메일입니다';
      this.userPhoneNumber = '핸드폰 번호입니다';
      this.userNickname = '닉네임 입니다';
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
  background-color: #ffffff;
  color: #676767;

  font-family: NotoSansRegular !important;
  font-weight: lighter !important;
}

.tableWidth {
  min-width: 300px;
}
.tableBorder {
  border-top: 1px solid lightgray;
}
table span {
  margin-left: 50px;
}
</style>
