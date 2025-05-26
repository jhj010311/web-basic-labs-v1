/*
장바구니 항목들의 가격을 모두 합산하여 총액을 계산하세요.
*/

const cart = [
    { name: "Keyboard", price: 30000 },
    { name: "Mouse", price: 15000 },
    { name: "Monitor", price: 200000 },
];

// TODO: reduce로 총합 계산
// const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total);
