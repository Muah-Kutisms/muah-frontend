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
      content2: 'MUAH의 무지개상회에서 다양한 작가의 작품을 확인해 보세요.',
      content3: '',
      menu: [
        ['맞춤 견적', 'grayCat'],
        ['출장 서비스', 'brownDog'],
        ['가이드북', 'grayDog'],
        ['장례식장 후기', 'petGroup'],
      ],
    };
  },
};
</script>
