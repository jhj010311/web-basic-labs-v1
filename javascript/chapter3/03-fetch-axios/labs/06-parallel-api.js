/*
[문제] axios 또는 fetch를 이용해 아래 두 요청을 병렬로 처리하세요.

- https://jsonplaceholder.typicode.com/users/1
- https://jsonplaceholder.typicode.com/posts/1

Promise.all을 활용하여
두 결과를 동시에 받아 콘솔에 출력하세요.
*/

import axios from "axios";

const getAxios = async (params) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${params}`
    );

    const data = response.data;
};

const result = Promise.all([getAxios("users/1"), getAxios("posts/1")]);

console.log(result);

/*
const main2 = async () => {
  const promises = [
    axios.get('https://jsonplaceholder.typicode.com/users/1'),
    axios.get('https://jsonplaceholder.typicode.com/posts/1'),
  ];
  const responses = await Promise.all(promises);
  const data = responses.map((response) => response.data);
  console.log(data);
};

// main1();
main2();
*/
