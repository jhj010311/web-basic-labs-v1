/*
[문제] 아래 배열의 userId로 하나씩 fetch 요청을 보내 user 정보를 순서대로 출력하세요.

const userIds = [1, 2, 3];

- https://jsonplaceholder.typicode.com/users/{userId}
- async/await와 for...of 문 사용
- (순서대로 출력되어야 함)
*/

async function fetchData(userId) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await response.json();

    return data;
}

async function runAll() {
    const userIds = [1, 2, 3];

    for (let userId of userIds) {
        const result = await fetchData(userId);
        console.log(result);
    }
}

runAll();
