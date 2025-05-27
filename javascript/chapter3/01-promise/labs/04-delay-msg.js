// [문제] Promise객체를 이용해 ms초 후에 문자열 msg를 출력하는 비동기 함수를 작성해보세요.

function message(ms, msg) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(msg));
        }, ms);
    });
}

message(1000, "메세지1");
message(500, "메세지2");
