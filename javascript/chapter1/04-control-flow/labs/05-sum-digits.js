// TODO: prompt로 입력받은 숫자의 각 자릿수 합을 구하도록 while 루프를 사용하여 작성하세요.

let input = prompt("숫자를 입력해주세요");
let sum = 0;

while (input >= 10) {
    sum += input % 10;
    input = Math.floor(input / 10);
}

sum += input;

alert(`모든 자릿수의 합계 : ${sum}`);
