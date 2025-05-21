/* 사용자가 입력한 비밀번호가 다음 조건을 만족하는지 확인하고 모든 조건 만족 시 "강한 비밀번호", 아니면 부족한 항목을 명시하세요.
조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)
*/

// let password = prompt("비밀번호를 작성해주세요");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("비밀번호를 작성해주세요 : ", (password) => {
    const check = {
        isLong: password.length >= 8,
        hasUpper: /[A-Z]/.test(password),
        hasNumber: /\d/.test(password),
        hasSpecial: /[!@#$%^&*]/.test(password),
    };

    var count = 0;

    for (const key in check) {
        if (!check[key]) {
            why(key);
            count++;
        }
    }

    if (count === 0) {
        console.log("강한 비밀번호");
    }
    rl.close();
});

function why(key) {
    if (key == "isLong") {
        console.log("비밀번호는 8자 이상이어야 합니다");
    } else if (key == "hasUpper") {
        console.log("대문자가 1자 이상 포함되어 있어야 합니다");
    } else if (key == "hasNumber") {
        console.log("숫자가 1자 이상 포함되어 있어야 합니다");
    } else if (key == "hasSpecial") {
        console.log("특수문자(!@#$%^&*)가 1자 이상 포함되어 있어야 합니다");
    }
}
