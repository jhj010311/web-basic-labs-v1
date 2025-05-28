/*
[문제] 두 개의 외부 API를 fetch로 병렬 처리한 뒤, 둘의 결과를 모두 출력하세요.

1) https://jsonplaceholder.typicode.com/posts/2
2) https://jsonplaceholder.typicode.com/users/1

- async/await와 Promise.all을 활용
- 두 API 모두의 데이터를 받아서 각각 출력
*/

async function fetchData(page) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/${page}`
        );
        const data = await response.json();

        return data;
    } catch (err) {
        console.error("에러:", err);
    }
}

async function runAll() {
    const promises = [fetchData("posts/2"), fetchData("users/1")];

    console.log("페이지 요청 시작");

    const results = await Promise.all(promises);
    console.log(results);

    // const [a, b] = await Promise.all([fetchMock(1, 500), fetchMock(2, 1000)]);
    // console.log("병렬 처리 결과:", a, b);
}

runAll();
