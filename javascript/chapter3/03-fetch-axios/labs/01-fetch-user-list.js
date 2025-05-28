/*
[문제] fetch를 사용해 아래 API에서 사용자 목록을 가져오세요.

GET: https://jsonplaceholder.typicode.com/users

- JSON 형식으로 응답을 받아 콘솔에 이름(name)만 출력
- async/await 사용 필수
*/
async function fetchUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        return data;
    } catch (err) {
        console.error("에러:", err);
    }
}

async function main() {
    const users = await fetchUser();

    for (let user of users) {
        console.log(user.name);
    }
}

main();
