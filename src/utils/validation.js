//이메일 주소 검증하는건데, 저희 구글 소셜로 할거라서 쓰진 않을거에요.
//이런식으로 조건을 걸면 됩니다!

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(number) {
  var re = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  return re.test(String(number).toLowerCase());
}

function validateBirth(number) {
  var re = /^([0-9]{4})-?([0-9]{2})-?([0-9]{2})$/;
  return re.test(String(number).toLowerCase());
}

export { validateEmail, validatePhoneNumber, validateBirth };
