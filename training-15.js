// 문자열 예제
const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지";
// 문자열을 기준을 통해 배열로 만드는 함수
function splitString(stringParams) {
  // 여기서의 기준은 ' '
  let result = stringParams.split(' ');
  return result;
};
// 문자열로 이루어진 배열의 요소들을 특정 변수(body)에 넣어주는 콜백 함수
function appendString(stringArray, callback) {
  let body = "";
  stringArray.forEach(function(element) {
    body = body + element;
  });
  callback(body);
};

let bodyTemplate = ``;
let resultCase = appendString(splitString(stringExample), function(body) {
  console.log(body); // 참깨빵위에순쇠고기패티두장특별한소스양상추치즈피클양파까지
  // string.substring(indexStart[, indexEnd]) 시작부터 종료인덱스 전까지 부분 문자열을 반환
  // 배열의 0부터 "티"까지(티 + 1)
  bodyTemplate += body.substring(0, body.indexOf("티") + 1);
  console.log(bodyTemplate); // 참깨빵위에순쇠고기패티
});
// 문자열을 태그로 감싸주는 함수
function elementMaker(string) {
  return `<div>${string}</div>`
}
console.log(elementMaker(bodyTemplate)); // <div>참깨빵위에순쇠고기패티</div>

// 특정 문자열을 기준을 잡고 배열을 만들어 준 후
// 만들어진 배열을 다시 가공하여 원하는 작업을 한 후
// 페이지에 사용하기 위해 태그를 감싸는 일련의 작업이다.