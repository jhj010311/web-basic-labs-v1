/*
[문제] axios로 아래 API에 GET 요청을 보내
모든 게시글의 제목(title)만 콘솔에 출력하세요.

GET: https://jsonplaceholder.typicode.com/posts
*/

import axios from "axios";

async function fetchTitle() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.data;

        return data;
    } catch (err) {
        console.error("에러:", err);
    }
}

async function main() {
    const data = await fetchTitle();

    for (let d of data) {
        console.log(d.title);
    }
}

main();
