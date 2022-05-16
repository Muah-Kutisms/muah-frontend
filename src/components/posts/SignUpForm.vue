<template>
  <v-layout>
    <div style="width:100%; height:100%">
      <div v-if="basic == 1">
        <v-form ref="basicform">
          <div style="width:60%; margin-top:-5%">
            <p><span>*</span>이름</p>
            <v-text-field
              label="이름을 입력해주세요."
              v-model="name"
              single-line
              outlined
              :rules="name_rule"
            ></v-text-field>
          </div>
          <div style="width:60%;">
            <p><span>*</span>닉네임</p>
            <v-text-field
              label="닉네임을 입력해주세요."
              single-line
              outlined
              v-model="nickname"
              class="textfieldwidth"
              :rules="nickname_rule"
            ></v-text-field>
          </div>
          <div style="width:100%">
            <div style="width:60%; display: inline-block; margin-right:3%">
              <p>
                <span>*</span>전화번호
                <!-- <label v-if="!isPhoneNumberVaild" style="font-size:5px"
                >양식을 지켰는지 확인해주세요</label
              > -->
              </p>
              <v-text-field
                label="010-1234-5678"
                single-line
                outlined
                v-model="phone_number"
                class="textfieldwidth"
                :rules="phone_rule"
              ></v-text-field>
            </div>
            <div style="display: inline-block">
              <v-btn
                height="58px"
                width="178px"
                depressed
                style="background:#D3D3D3"
                ><span style="font-size:20px; color:#8C8C8C" depressed
                  >인증요청</span
                ></v-btn
              >
            </div>
          </div>
          <div style="display: flex; justify-content:center; margin-left:1">
            <div style="display: flex;">
              <v-checkbox label="모두 동의합니다"></v-checkbox>
              <span
                style="font-size:15px; margin-top:18px; margin-left:25px; margin-right:25px "
              >
                |
              </span>

              <v-checkbox
                id="check"
                label="이용약관 필수 동의"
                style="margin-right:30px; margin-left:10px"
              >
              </v-checkbox>
            </div>
            <v-checkbox label="개인정보 수집 및 이용 동의"></v-checkbox>
          </div>
          <div style="display: flex; justify-content:center; margin-left:1">
            <div style="display: flex;">
              <v-btn
                @click="submit"
                style="background:#FF8B4A; width:761px; height:74px"
                class="submitbtn"
                ><span
                  v-if="type == 'basic' && basic == 1"
                  style="font-size:30px"
                  >다음으로</span
                >
                <span v-else style="font-size:30px">가입</span>
              </v-btn>
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </v-layout>
</template>

<script>
import { validatePhoneNumber } from '@/utils/validation';
export default {
  props: {
    type: String,
  },

  data() {
    return {
      name: '',
      nickname: '',
      phone_number: '',
      basic: 1,
      name_rule: [v => !!v || '이름은 필수 입력 사항입니다.'],
      nickname_rule: [v => !!v || '닉네임은 필수 입력 사항입니다.'],
      phone_rule: [
        v => validatePhoneNumber(v) || '핸드폰번호의 양식에 맞춰주세요',
      ],
    };
  },
  methods: {
    basicSubit() {
      const validate = this.$refs.basicform.validate();
      console.log(validate);
      if (validate) {
        this.$emit(true, validate);
      }
    },
    submit() {
      if (this.type == 'basic') {
        if (this.basic == 1) {
          this.basic++;
        } else {
          //axios
        }
      } else if (this.type == 'store') {
        //axios
      } else if (this.type == 'user') {
        //axios
      }
    },
  },
  computed: {},
};
</script>

<style scope>
p {
  font-size: 24px;
}
p span {
  color: red;
}

.textfieldwidth {
  /* width: 354px; */
  margin: 0px !important;
  margin: 0% !important;
}

.submitbtn {
  border-radius: 15px !important;
}
</style>
