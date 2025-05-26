// 문제 : 숫자 n을 입력받아 1부터 n까지의 합을 반환하는 함수를 작성하세요.
function sum(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result;
}

console.log(sum(5));
console.log(sum(6));
console.log(sum(15));
