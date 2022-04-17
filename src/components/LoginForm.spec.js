import { shallowMount } from '@vue/test-utils'; //특정 컴포넌트를 마운트 할 수 있음.

import LoginForm from './LoginForm';
// import Vue from 'vue';

describe('LoginForm.vue', () => {
  test('id는 이메일 형식이 아니면 경고 메세지가 출력된다', () => {
    // const instance = new Vue(LoginForm).$mount(); //vue 인스턴스 생성 후 마운팅하기
    //샬로로 대체 가능
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    }); //두번째 인자로 객체(데이터)를 넣으면 해당 데이터의 내용이 입력됨
    // wrapper.vm; //vm은 이 웨퍼 내의 인스턴스랑 동일함.
    // const idInput = wrapper.find('#username');
    // console.log('인풋박스의 값', idInput.element.value);
    // console.log('함수도 검증이 가능', wrapper.vm.isUsernameValid);
    //find는 인스턴스 내 템플릿 안의 특정 html요소를 쫒아갈 수 있게 해준다.
    // expect(instance).toBeTruthy(); //이 인스턴스가 트루다
    // expect(wrapper.vm.username).toBe('');

    const warningTest = wrapper.find('.warning'); //class값도 있는지 확인이 가능
    expect(warningTest.exists()).toBeTruthy(); //exists는 있으면 트루, 없으면 펄스를 반환해줌
  });

  test('ID와 PW이 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('.btn');
    expect(button.element.disabled).toBeTruthy(); //버튼의 디스에이블드 속성 검증
  });
});

// import { sum } from './math';

// describe('math.js', () => {
//   test('10+20=30', () => {
//     const result = sum(10, 20); //테스트할 코드
//     expect(result).not.toBe(30); //예상 값
//   }); //테스트할 케이스의 이름과 기능을 정의
// }); //jest용 api. 테스트가 가능하게 해줌

// 자바스크립트 테스트 방법이었음.

//여기부터는 vue 테스트
