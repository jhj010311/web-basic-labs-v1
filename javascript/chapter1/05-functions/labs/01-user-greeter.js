// 문제 : 사용자 이름을 받아 인사 출력하는 함수를 만드세요
// TODO: greetUser(name) → "안녕하세요, OO님!"
// 출력은 브라우저 혹은 콘솔 환경 중 선택

function greetUser(name) {
    console.log(`안녕하세요 ${name} 사용자님!`);
}

function login(name, callback) {
    console.log(`${name}으로 로그인중...`);
    console.log("..");
    console.log(".");
    setTimeout(() => {
        console.log("로그인 완료");
        callback(name);
    }, 2000);
}

login("장현준", greetUser);
