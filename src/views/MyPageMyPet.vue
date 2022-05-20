<template>
  <div>
    <div style="display:flex;flex-direction: column;">
      <div
        style="display:flex; justify-content:center; font-size: 32px; font-family: NotoSansBold; margin-bottom: 30px;"
      >
        마이페이지
      </div>

      <div style="display:flex; justify-content:center; margin-bottom: 50px;">
        <v-card width="575px" height="74px" style="margin-right:1%"
          >내 반려동물</v-card
        >
        <v-select
          v-model="petId"
          label="내 반려동물"
          :items="options"
          item-text="name"
          item-value="id"
          :rules="user_auth_rule"
          solo
          flat
          elevation="0"
          style="max-width:263px !important; height:74px; box-shadow: none !important;"
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
          <div>
            <span style="float:left"
              ><v-card width="250px" height="305px"></v-card
            ></span>
            <span
              ><table>
                <thead>
                  <tr style="min-width:200px;">
                    <th class="tableBorder"><span>이름</span></th>
                    <th class="tableBorder"><span>종</span></th>
                    <th class="tableBorder"><span>몸무게</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="tableWidth "
                    style="font-family: NotoSansRegular; width: 150px;"
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
                    <td
                      class="tableBorder tableBorderBottom"
                      style="border-bottom: 1px solid lightgray;"
                    >
                      <span>{{ question }}</span>
                    </td>
                  </tr>
                </tbody>
              </table></span
            >
          </div>
          <div style="clear:both; display: flex; justify-content: center;">
            <v-btn>우와아아</v-btn>
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
      ],
      petId: Number,
    };
  },
};
</script>

<style scoped>
::v-deep .v-menu__content {
  box-shadow: none !important;
  border-radius: 100px !important;
}

::v-deep .v-input__slot {
  min-height: 74px;
}

table {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  overflow-x: auto;
  overflow-y: hidden;
  border-collapse: collapse;
  height: 322px;
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
</style>
