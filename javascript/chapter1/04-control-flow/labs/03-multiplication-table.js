// 문제: 구구단 2단부터 9단까지 출력 (중첩 for문)

for (let i = 2; i < 10; i++) {
    console.log(`${i}단`);
    for (let j = 1; j < 10; j++) {
        console.log(`${i * j}`);
    }
    console.log();
}
