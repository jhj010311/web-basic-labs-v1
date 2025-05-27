/*

프로미스 함수의 기본형태는
function promiseFunction() {
  return new Promis((resolve, reject) => {
    실행내용
    조건에 따라 resolve();
    조건에 따라 reject();
  })
}

reject하는 경우에 대응하지 않아도 되는 경우 reject는 매개변수 단계에서부터 생략해도 무방


이후 사용법

promiseFunction().then(성공시 내용).then(앞에서 성공했을 경우 내용).catch(하나라도 실패시 내용)


콜백은 연쇄가 없으면 일견 편해보이지만

함수의 연쇄가 여러 번 일어나야 하는 경우 급속도로 코드가 복잡해진다


[문제] 콜백을 Promise로 변환하기

아래 함수는 콜백 방식으로 데이터를 받아오는 함수입니다.
이 함수를 Promise 방식으로 재작성하세요.

function fetchProduct(productId, callback) {
  setTimeout(() => {
    if (productId > 0) {
      callback(null, { id: productId, name: "상품" + productId });
    } else {
      callback("잘못된 상품 ID", null);
    }
  }, 800);
}

// 예시 사용법
fetchProduct(3, (err, product) => {
  if (err) {
    console.error("에러:", err);
  } else {
    console.log("상품 정보:", product);
  }
});
*/

function fetchProductPromise(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productId > 0) {
                resolve({ id: productId, name: "상품" + productId });
            } else {
                reject("잘못된 상품 ID");
            }
        }, 800);
    });
}

fetchProductPromise(3)
    .then((product) => console.log("상품 정보:", product))
    .catch((err) => console.error("에러:", err));
