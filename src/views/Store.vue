<template>
  <div style="width:1920px;">
    <SubHeader
      :filename="require('@/assets/store.png')"
      width="100%"
      :title="title"
      :content1="content1"
      :content2="content2"
      :content3="content3"
    ></SubHeader>
    <div>
      <div
        style="display:flex;justify-content:center;margin-top:150px;margin-left:70px;"
      >
        <v-row style="padding-left:100px;padding-right:100px;">
          <v-col v-for="(item, index) in storelist" :key="index" col="3">
            <v-btn
              depressed
              height="588"
              width="358"
              style="border-radius: 10px;background-color:#FAF6E8;margin-right:-10px;align-items:flex-start
"
            >
              <div style="text-align:left;flex-direction: column;">
                <img :src="item.storeurl" />
                <div
                  style="font-size:20px;font-family:NotoSansRegular;color: #6A6A6A;margin-top:20px;margin-left:15px;"
                >
                  {{ item.storename }}
                </div>
                <div
                  style="font-size:20px;font-family:NotoSansRegular;margin-top:5px;margin-left:15px;"
                >
                  {{ item.itemname }}
                </div>
                <div
                  style="font-size:22px;font-weight:550;font-family:NotoSansMedium;margin-left:15px
"
                >
                  <span style="color:#FF2A2A">{{ item.discountpercent }}</span
                  >{{ item.price }}
                </div>
                <div
                  style=" font-family:NotoSansMedium; font-size: 14px; font-weight:500;text-decoration:line-through;color:#A9A9A9;margin-top:5px;margin-left:15px

"
                >
                  {{ item.beforeprice }}
                </div>
                <div
                  style=" font-family:NotoSansRegular; font-size: 15px; font-weight:400;margin-top:7px;margin-left:15px

"
                >
                  {{ item.createDate }}
                </div>
              </div>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '../components/common/SubHeader.vue';
export default {
  components: { SubHeader },
  data() {
    return {
      title: '무지개상회',
      content1: '사랑하는 반려동물과의 추억을 기록할 방법을 찾고 계신가요?',
      content2: 'MUAH의 무지개상회에서 다양한 작가의 작품을 확인해 보세요. ',
      content3: '',
      storename: String,
      itemname: String,
      date: String,
      imgFile: String,

      storelist: [
        {
          storeurl: require('@/assets/storedog1.png'),
          storename: '아라봉',
          itemname: '🎉주문폭주🎉 추모 미니액자',
          discountpercent: '',
          price: '18,000원',
          beforeprice: '',
          createDate: '2022-02-14',
        },
        {
          storeurl: require('@/assets/storedog2.png'),
          imgFile: 'storedog1',
          storename: '미미츄',
          itemname: '초상화 드로잉',
          discountpercent: '',
          price: '15,500원',
          beforeprice: '',
          createDate: '2022-02-10',
        },
        {
          storeurl: require('@/assets/storedog3.png'),
          imgFile: 'storedog1',
          storename: '토토코코',
          itemname: '반려묘 유치 목걸이',
          discountpercent: '35% ',
          price: '20,000원',
          beforeprice: '27,000원',
          createDate: '2022-02-01',
        },
        {
          storeurl: require('@/assets/storedog4.png'),
          imgFile: 'storedog1',
          storename: '무지개세상',
          itemname: '(주문제작) 추모 그림 ❤',
          discountpercent: '',
          price: '30,000원',
          beforeprice: '',
          createDate: '2022-01-31',
        },
        {
          storeurl: require('@/assets/storedog5.png'),
          storename: '햄묭씌',
          itemname: '1:1 주문제작😸 모형 무드등',
          discountpercent: '',
          price: '13,000원',
          beforeprice: '',
          createDate: '2022-01-15',
        },
        {
          storeurl: require('@/assets/storedog6.png'),
          imgFile: 'storedog1',
          storename: '드로잉파워',
          itemname: '크리스탈 봉안당 납골당',
          discountpercent: '',
          price: '15,500원',
          beforeprice: '',
          createDate: '2022-01-10',
        },
        {
          storeurl: require('@/assets/storedog7.png'),
          imgFile: 'storedog1',
          storename: '포토바보',
          itemname: '증명사진 액자',
          discountpercent: '25% ',
          price: '19,800원',
          beforeprice: '14,900원',
          createDate: '2022-01-06',
        },
        {
          storeurl: require('@/assets/storedog8.png'),
          imgFile: 'storedog1',
          storename: '멍멍냥냥',
          itemname: '🎁오픈 기념 1+1🎁 추모 캔들 홀더',
          discountpercent: '',
          price: '40,000원',
          beforeprice: '',
          createDate: '2021-12-30',
        },
      ],
    };
  },
};
</script>
<style></style>
