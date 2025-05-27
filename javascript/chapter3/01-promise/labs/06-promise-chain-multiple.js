/*
[문제] 여러 Promise 작업을 순차적으로 연결(체이닝)

아래 Promise 함수들로 1 → 2 → 3 순서로 실행해서,
최종 결과를 출력하세요.

function step1() {
  return new Promise(resolve => setTimeout(() => resolve("1단계 완료"), 300));
}
function step2() {
  return new Promise(resolve => setTimeout(() => resolve("2단계 완료"), 400));
}
function step3() {
  return new Promise(resolve => setTimeout(() => resolve("3단계 완료"), 500));
}

/*
[출력 예시]
1단계 완료
2단계 완료
3단계 완료
*/

function step1() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("1단계 완료"), 300)
    );
}
function step2() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("2단계 완료"), 400)
    );
}
function step3() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("3단계 완료"), 500)
    );
}

step1()
    .then((step1) => console.log(step1))
    .then(() => step2())
    .then((step2) => console.log(step2))
    .then(() => step3())
    .then((step3) => console.log(step3));

step1()
    .then((result1) => {
        console.log(result1);
        return step2();
    })
    .then((result2) => {
        console.log(result2);
        return step3();
    })
    .then((result3) => {
        console.log(result3);
    });

step1()
    .then((res) => {
        console.log(res);
        return step2();
    })
    .then((res) => {
        console.log(res);
        return step3();
    })
    .then((res) => {
        console.log(res);
    });

// 실패한 코드
// step1()
//     .then((step1) => console.log(step1))
//     .then(step2())
//     .then((step2) => console.log(step2))
//     .then(step3())
//     .then((step3) => console.log(step3));
