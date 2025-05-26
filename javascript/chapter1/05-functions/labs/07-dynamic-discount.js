// 할인율을 입력받아 할인 가격을 계산하는 함수를 반환하세요.

function createDiscount(rate) {
    // TODO: 클로저로 rate를 기억하고, 가격을 받아 할인된 가격 반환

    return function (amount) {
        return `할인율 : ${rate}\n할인가 : ${amount * (1 - rate)}`;
    };
}

const blackFriday = createDiscount(0.3);
console.log(blackFriday(100000)); // → 70000
console.log(blackFriday(50000));

const halfSale = createDiscount(0.5);
console.log(halfSale(1000000));
