<template>
  <div>
    <div style="display:flex;flex-direction: column;">
      <div style="display:flex; justify-content:center;">마이페이지</div>
      <div style="display:flex; justify-content:center;">
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
                  <v-row>
                    <v-col>
                      <div style="font-size:30px; text-align:center">
                        {{ type }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      style="height:213px; display:flex; align-items:flex-end"
                    >
                      <div>
                        <img :src="require(`@/assets/${imgFile}.png`)" />
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-btn>
            </div>
          </v-hover>
        </div>
      </div>
      <div style="display:flex; justify-content:left;">회원정보 관리</div>
      <div style="display:flex; justify-content:left;">
        <div>
          <v-card outlined width="215px" height="203px"> </v-card>
          <div>
            <v-btn width="215px" height="57px">파일 업로드</v-btn>
          </div>
        </div>
        <div>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </div>
      </div>
      <div style="display:flex; justify-content:left;">
        예약내역
        <v-btn width="675px" height="80px"
          ><span style="font-size:25px">
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
        ['내 반려동물', 'grayCat'],
        ['찜 목록', 'brownDog'],
        ['배송', 'grayDog'],
        ['내가 쓴 글', 'petGroup'],
        ['내 견적 확인', 'petGroup'],
      ],
      number: 0,
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn:hover {
  color: '#FFB388';
}
</style>
