// TODO: add, subtract, multiply, divide 함수 만들고 결과 출력

function add(a, b) {
    console.log("덧셈 호출");
    console.log(a + b);
}

function subtract(a, b) {
    console.log("뺄셈 호출");
    console.log(a - b);
}

function multiply(a, b) {
    console.log("곱셈 호출");
    console.log(a * b);
}

function divide(a, b) {
    console.log("나눗셈 호출");
    console.log(a / b);
}

function calculate(a, b, callback) {
    console.log("계산기 호출중");
    callback(a, b);
}

//

let a = 10;
let b = 5;

calculate(a, b, add);
calculate(a, b, subtract);
calculate(a, b, multiply);
calculate(a, b, divide);
