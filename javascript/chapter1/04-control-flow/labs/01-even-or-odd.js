// 문제: prompt() 메서드를 활용해 사용자에게 숫자를 입력받아 홀수/짝수를 출력하세요.

alert("hello alert");
let input = prompt("숫자를 입력해주세요");

alert(`홀수? : ${Boolean(input % 2)}`);
