// [문제] 다음 중 결과가 true가 되는 경우는?
// 주석에 결과를 예측하고, 이유를 설명해보세요.

console.log(Boolean("0")); // true - string값
console.log(Boolean(0)); // false - 숫자 0은 false
console.log(Boolean([])); // true - Object 객체
console.log(Boolean({})); // true - 배열
console.log(Boolean(undefined)); // false - undefined는 false
console.log(Boolean(null)); // false - null은 false
