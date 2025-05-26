// 문제: 숫자 조건 검사기 만들기
// 숫자 하나와 조건을 전달받아, 조건을 만족하는지를 판단하는 함수를 작성하세요.
// checkByCondition(num, callback) 형태로 작성하며,
// callback 함수는 해당 숫자가 조건을 만족하면 true, 아니면 false를 반환합니다.

function checkByCondition(num, callback) {
    // TODO: callback을 이용해 조건 검사
    console.log(`${num}을 ${callback.name} 조건으로 검사중`);
    console.log(`${callback(num)}`);
}

// 1) 짝수인지 검사
function checkEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

checkByCondition(2, checkEven);
checkByCondition(3, checkEven);

// 2) 10보다 큰지 검사
function biggerThen10(num) {
    if (num > 10) {
        return true;
    } else {
        return false;
    }
}

checkByCondition(6, biggerThen10);
checkByCondition(12, biggerThen10);

// 3) 3의 배수인지 검사
function check3(num) {
    if (num % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

checkByCondition(12, check3);
checkByCondition(13, check3);
