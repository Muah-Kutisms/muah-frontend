<template>
  <div>
    <div style="display:flex;flex-direction: column;">
      <div
        style="display:flex; justify-content:center; font-size: 32px; font-family: NotoSansBold; margin-bottom: 30px;"
      >
        마이페이지
      </div>

      <div style="display:flex; justify-content:center; margin-bottom: 50px;">
        <v-card width="575px" height="74px" style="margin-right:1%;"
          ><div
            style="display:flex; justify-content:center; align-items:center; width: 100%; height: 100%;"
          >
            <v-img
              src="@/assets/cute.png"
              max-width="42px"
              height="44px"
              style="margin-right: 2%;"
            ></v-img
            ><span>내 반려동물</span>
          </div></v-card
        >

        <v-select
          v-model="petId"
          label="내 반려동물"
          :items="options"
          item-text="name"
          item-value="id"
          :rules="user_auth_rule"
          solo
          rounded
          flat
          :menu-props="{
            rounded: 'rounded',
          }"
          style="max-width:263px !important; height:74px !important; color:aquamarine !important;"
        >
        </v-select>
      </div>
    </div>
    <div style="display:flex; justify-content:center; margin-bottom: 50px;">
      <v-card
        width="987px"
        height="584px"
        style="display:flex; justify-content:center; align-items:center;"
      >
        <div>
          <div
            style="display:flex; justify-content:center; align-items:center;"
          >
            <div>
              <v-card
                width="250px"
                height="305px"
                style="display:flex; justify-content:center; align-items:center; border-radius: 49px;"
                ><v-img src="@/assets/큰 몽몽.png"></v-img>
              </v-card>
            </div>
            <div style="margin-top:7%; margin-left: 5%;">
              <table>
                <thead>
                  <tr style="min-width:212px;">
                    <th class="tableBorder"><span>이름</span></th>
                    <th class="tableBorder"><span>종</span></th>
                    <th class="tableBorder">
                      <span>몸무게</span>
                    </th>
                    <th class="tableBorder tableBorderBottom">
                      <span>생일</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="tableWidth "
                    style="font-family: NotoSansRegular; width: 290px;"
                  >
                    <td class="tableBorder">
                      <!-- {{ 셀렉트값의 petId 를 통해 가지고 온 옵션값에서 
                      해당하는 객체 찾은 후 새 변수에 넣어야 할듯 }} -->
                    </td>
                    <td class="tableBorder">
                      <span>{{ petWeight }}</span>
                    </td>
                    <td class="tableBorder">
                      <span>{{ petLayMethod }}</span>
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
            </div>
          </div>
          <div
            style="clear:both; display: flex; justify-content: center; margin-top: -2%;"
          >
            <v-btn
              depressed
              style="width: 810px; height: 72px; border-radius: 26px; background-color: #FE843C; "
              ><span
                style="font-size:32px"
                @click="
                  $router.push({
                    name: `selectMyPet`,
                    params: { pageNumber: 2 },
                  })
                "
                >이 반려동물로 견적내기</span
              ></v-btn
            >
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { id: 1, name: '몽몽이', img: require('@/assets/몽몽이.png') },
        { id: 2, name: '핑핑이', img: require('@/assets/몽몽이.png') },
        { id: 3, name: '구핑이', img: require('@/assets/몽몽이.png') },
        { name: '반려동물 추가하기', img: require('@/assets/몽몽이.png') },
      ],
      petId: Number,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-input__slot {
  min-height: 74px;
  background-color: #fe843c !important;
}

.shadowNone {
  border-radius: 0px 0px 30px 30px;
  box-shadow: none;
}

table {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  overflow-x: auto;
  overflow-y: hidden;
  border-collapse: collapse;
  height: 322px;
  max-width: 502px;
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
  line-height: 53px;
}
th {
  color: #676767;
  background-color: #f3f3f3;

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
