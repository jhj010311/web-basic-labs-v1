const student = {
    name: "윤학생",
    age: 21,
    major: "컴퓨터공학",
};

// TODO:
// for...in 문으로 각 속성과 값을 출력하세요.
// 예시:
// name: 윤학생
// age: 21
// major: 컴퓨터공학
for (key in student) {
    // console.log(`${key}: ${student.key}`); >> 정직하게 "key"가 키인 값을 찾으려고 함
    console.log(`${key}: ${student[key]}`);
}
