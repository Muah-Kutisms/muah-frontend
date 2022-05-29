<template>
  <v-layout>
    <div style="width:100%; height:100%">
      <div v-if="type == 'store'">
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
            <p><span>*</span>주소</p>
            <v-text-field
              label="주소를 입력해주세요."
              single-line
              outlined
              v-model="adree"
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
              <v-checkbox v-model="check" label="모두 동의합니다"></v-checkbox>
              <span
                style="font-size:15px; margin-top:18px; margin-left:25px; margin-right:25px "
              >
                |
              </span>

              <v-checkbox
                v-model="check"
                id="check"
                label="이용약관 필수 동의"
                style="margin-right:30px; margin-left:10px"
              >
              </v-checkbox>
            </div>
            <v-checkbox
              v-model="check"
              label="개인정보 수집 및 이용 동의"
            ></v-checkbox>
          </div>
          <div style="display: flex; justify-content:center; margin-left:1">
            <div style="display: flex;">
              <v-btn
                @click="submit"
                style="background:#FF8B4A; width:761px; height:74px"
                class="submitbtn"
              >
                <span style="font-size:30px">가입</span>
              </v-btn>
            </div>
          </div>
        </v-form>
      </div>
      <div v-if="type != 'store' && basic == 1">
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
              <v-checkbox v-model="check" label="모두 동의합니다"></v-checkbox>
              <span
                style="font-size:15px; margin-top:18px; margin-left:25px; margin-right:25px "
              >
                |
              </span>

              <v-checkbox
                id="check"
                v-model="check"
                label="이용약관 필수 동의"
                style="margin-right:30px; margin-left:10px"
              >
              </v-checkbox>
            </div>
            <v-checkbox
              v-model="check"
              label="개인정보 수집 및 이용 동의"
            ></v-checkbox>
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
      <div
        v-if="type == 'basic' && basic > 1"
        style="width:100%;  margin-top:-10%"
      >
        <v-form ref="basicform2" enctype="multipart/form-data">
          <div style="float:left; width:50%; height:70%; margin-top:8%">
            <div style="">
              <p><span>*</span>반려동물 사진</p>
              <v-card outlined width="215px" height="203px"
                ><v-img :src="imageSrc" width="215px" height="203px"></v-img>
              </v-card>
              <div style=" margin-top: 5%">
                <!-- <v-btn
                  width="215px"
                  height="57px"
                  ref="image"
                  @click="uploadImg()"
                  >파일 업로드</v-btn
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
          </div>
          <div style="float:right;  width:50%;">
            <div style="width:100%; height:50%">
              <p><span>*</span>반려동물 이름</p>
              <v-text-field
                label="반려동물 이름을 입력해주세요."
                v-model="petName"
                single-line
                outlined
                :rules="pet_name_rule"
              ></v-text-field>
            </div>
            <div style="width:100%; margin-top:-5%">
              <p><span>*</span>반려동물 종류</p>
              <v-text-field
                label="반려동물 종류를 입력해주세요."
                single-line
                outlined
                v-model="petKind"
                class="textfieldwidth"
                :rules="petKind_rule"
              ></v-text-field>
            </div>
            <div style="width:100%; margin-right:3%; margin-top:-5%">
              <p>
                <span>*</span>반려동물 생일
                <!-- <label v-if="!isPhoneNumberVaild" style="font-size:5px"
                >양식을 지켰는지 확인해주세요</label
              > -->
              </p>
              <v-text-field
                label="yyyy-mm-dd"
                single-line
                outlined
                v-model="petBirthday"
                class="textfieldwidth"
                :rules="petBirthday_rule"
              ></v-text-field>
            </div>
            <div style="width:100%; margin-top:-5%; margin-bottom:-5%">
              <p><span>*</span>반려동물 무게</p>
              <v-text-field
                label="닉네임을 입력해주세요."
                single-line
                outlined
                v-model="petWeight"
                class="textfieldwidth"
                :rules="petWeight_rule"
              ></v-text-field>
            </div>
          </div>
          <div style="clear: both; margin-top:-5%">
            <div style="display: flex; justify-content:center; margin-top:-5%">
              <v-checkbox v-model="check" label="모두 동의합니다"></v-checkbox>
              <span
                style="font-size:15px; margin-top:18px; margin-left:25px; margin-right:25px "
              >
                |
              </span>

              <v-checkbox
                v-model="check"
                id="check"
                label="이용약관 필수 동의"
                style="margin-right:30px; margin-left:10px"
              >
              </v-checkbox>
              <v-checkbox
                v-model="check"
                label="개인정보 수집 및 이용 동의"
              ></v-checkbox>
            </div>
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
import { validatePhoneNumber, validateBirth } from '@/utils/validation';
import { PostPet, PostUser, PutUser } from '@/api/index';
import { getUserFromCookie } from '@/utils/cookies';
export default {
  props: {
    type: String,
  },

  data() {
    return {
      check: '',
      name: '',
      nickname: '',
      phone_number: '',
      imageSrc: '',
      id: '',
      img: '',
      petName: '',
      petKind: '',
      petBirthday: '',
      petWeight: '',
      adree: '',
      imgForm: FormData,
      basic: 1,
      name_rule: [v => !!v || '이름은 필수 입력 사항입니다.'],
      nickname_rule: [v => !!v || '닉네임은 필수 입력 사항입니다.'],
      phone_rule: [
        v => validatePhoneNumber(v) || '핸드폰번호의 양식에 맞춰주세요',
      ],
      birth_rule: [v => validateBirth(v) || '생년월일 양식에 맞춰주세요'],
      pet_name_rule: [v => !!v || '이름은 필수 입력 사항입니다.'],
      petKind_rule: [v => !!v || '종류는 필수 입력 사항입니다.'],
      petBirthday_rule: [v => validateBirth(v) || '생년월일 양식에 맞춰주세요'],
      petWeight_rule: [v => !!v || '이름은 필수 입력 사항입니다.'],
    };
  },
  methods: {
    uploadImg() {
      console.log('들어왔다');

      this.img = this.$refs['image'].files[0];
      const url = URL.createObjectURL(this.img);
      this.imageSrc = url;
    },
    async submit() {
      this.id = getUserFromCookie();
      const userData = {
        address: {
          city: this.adree,
          country: ' ',
          district: ' ',
        },
        funeralName: '',
        name: this.name,
        nickName: this.nickname,
        phone: this.phone_number,
        isNew: false,
        isApproved: false,
        role: 'ROLE_USER',
      };
      if (this.type == 'basic') {
        if (this.basic == 1) {
          const basicValidate = this.$refs.basicform.validate();
          console.log(basicValidate);
          if (basicValidate) {
            let a = await PutUser(this.id, userData);
            if (a) {
              this.basic++;
            }
          }
        } else {
          const basicValidate2 = this.$refs.basicform2.validate();
          console.log(basicValidate2);
          const request = {
            birthdate: this.petBirthday,
            kind: this.petKind,
            name: this.petName,
            userId: this.id,
            weight: this.petWeight,
          };
          console.log(request);
          this.imgForm = new FormData();
          console.log(this.img);
          this.imgForm.append('imgFile', this.img);
          this.imgForm.append(
            'request',
            new Blob([JSON.stringify(request)], { type: 'application/json' }),
          );

          if (basicValidate2) {
            let a = await PostPet(this.imgForm);
            console.log(a);
            this.$router.push('/main');
          }
        }
      } else if (this.type == 'store') {
        userData.role = 'ROLE_COMPANY';
        userData.funeralName = this.name;
        await PutUser(this.id, userData);
        this.$router.push('/main');
      } else if (this.type == 'maker') {
        userData.role = 'ROLE_SELLER';
        await PostUser(userData);
        this.$router.push('/main');
      }
    },
  },
  mounted() {
    this.basic = 1;
  },
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
