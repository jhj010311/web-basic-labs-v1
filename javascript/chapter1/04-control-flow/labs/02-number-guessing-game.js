// 문제: 사용자가 정답 숫자를 맞힐 때까지 계속 입력받는 게임을 만들어보세요. (while 사용)
// Math.random()으로 1~10 중 하나를 고르고 맞힐 때까지 반복

const num = 10 * Math.random();
const int = Math.floor(num) + 1;
while (true) {
    let answer = prompt("1~10 사이의 숫자를 맞춰보세요");
    if (answer == int) {
        alert("정답입니다!");
        break;
    }

    alert("다른 수를 입력해보세요");
}

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// var keepgo = true;
// const num = 10 * Math.random();
// const int = Math.floor(num) + 1;
// while (keepgo) {
//     rl.question("숫자를 맞춰보세요 : ", (answer) => {
//         if (answer == int) {
//             alert("정답입니다!");
//             rl.close();
//             keepgo = false;
//         }
//         console.log(`다른 수를 입력해보세요`);
//     });
// }
