// 생성자 함수 방식
function Student(name, major) {
    this.name = name;
    this.major = major;
}

// 메모리 최적화
// 어느 의미론 static과 유사 - 생성자 실행마다 새로 함수를 생성할 필요 없이 모든 객체가 동일하게 참조 가능
Student.prototype.introduce = function () {
    console.log(`안녕하세요, ${this.major} 전공 ${this.name}입니다.`);
};

const s1 = new Student("윤학생", "컴퓨터공학");
s1.introduce();

// 클래스 방식
class StudentClass {
    constructor(name, major) {
        this.name = name;
        this.major = major;
    }

    introduce() {
        console.log(`안녕하세요, ${this.major} 전공 ${this.name}입니다.`);
    }
}

const s2 = new StudentClass("김학생", "심리학");
s2.introduce();
