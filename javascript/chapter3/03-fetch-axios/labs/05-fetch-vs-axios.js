/*
[문제] 동일한 요청을 fetch와 axios로 각각 구현하세요.

요청: GET https://jsonplaceholder.typicode.com/todos/1

- 두 방식 모두 async/await 사용
- 각각 결과 콘솔 출력
- 차이점 주석으로 정리

    처음 주소를 입력할 때 방식을 지정하는가 하지 않는가의 차이
    받아온 response를 가공하는 방식의 차이
*/

import axios from "axios";

async function fetchStyle() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = response.json();

    return data;
}

async function axiosStyle() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = response.data;

    return data;
}

async function main() {
    let resultFetch = await fetchStyle();
    let resultAxios = await axiosStyle();

    console.log(resultFetch);
    console.log(resultAxios);
}

main();

// 인수님 코드
// const main2 = async (params) => {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/todos/1'
//   );
//   const data = response.data;
//   console.log(data);
// };
