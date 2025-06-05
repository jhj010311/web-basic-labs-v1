const viewStart = document.getElementById("view-start");
const viewQuiz = document.getElementById("view-quiz");
const viewResult = document.getElementById("view-result");

const questions = [];
let questionsQuantity = 10;
let questionIds = [];

//
// ## 1. 문제 데이터 로딩
async function getQuestions() {
    const response = await axios.get("data/questions.json");
    const data = await response.data;

    return data;
}

getQuestions().then((qs) => {
    for (let q of qs) {
        questions.push(q);
    }
});

//
// ## 2. 시작 화면
viewStart.addEventListener("change", (e) => {
    questionsQuantity = e.target.value;
});

viewStart.addEventListener("click", (e) => {
    if (e.target.id === "start-btn") {
        viewStart.style = "display: none";
        viewQuiz.style = "";
        viewResult.style = "display: none";

        questionIds = ramdomizeQuestions(questionsQuantity);

        startQuiz();
    }
});

//
//## 3. 문제 출제 및 풀이
//## 4. 진행/점수 표시
async function startQuiz() {
    const userAnswers = [];
    let userAnswer = false;
    const submitBtn = document.getElementById("submit-btn");
    let runout;

    viewQuiz.addEventListener("change", (e) => {
        if (e.target.name === "choice") {
            userAnswer = e.target.value;
            submitBtn.disabled = false;
        }
    });

    viewQuiz.addEventListener("click", (e) => {
        if (e.target.id === "submit-btn" && e.target.disabled === false) {
            const submitEvent = new Event("submit", { cancelable: true });
            const choiceForm = document.getElementById("choice-form");
            choiceForm.dispatchEvent(submitEvent);
        }
    });

    viewQuiz.addEventListener("submit", (e) => {
        e.preventDefault();

        if (e.target.id === "submit-btn") {
            clearTimeout(runout);

            userAnswers.push(userAnswer);

            submitBtn.disabled = true;
            userAnswer = false;
        }
    });

    let progress = 1;

    for (let q of questionIds) {
        const currentQuestion = questions[q - 1];

        document.getElementById(
            "progress"
        ).textContent = `${progress++} / ${questionsQuantity}`;

        document.getElementById(
            "timer"
        ).textContent = `제한시간: ${currentQuestion.timeLimit}s`;

        document.getElementById(
            "quiz-box"
        ).innerHTML = `<div style="font-weight:bold; margin-bottom:10px;">${currentQuestion.question}</div>
    <form id="choice-form">
      <label>
          <input type="radio" name="choice" value="0">
          ${currentQuestion.choices[0]}
        </label><label>
          <input type="radio" name="choice" value="1">
          ${currentQuestion.choices[1]}
        </label><label>
          <input type="radio" name="choice" value="2">
          ${currentQuestion.choices[2]}
        </label><label>
          <input type="radio" name="choice" value="3">
          ${currentQuestion.choices[3]}
        </label>
    </form>`;

        const submitEvent = new Event("submit", { cancelable: true });
        runout = setTimeout(() => {
            document.getElementById("choice-form").dispatchEvent(submitEvent);
        }, currentQuestion.timeLimit * 1000);
        await delay(currentQuestion.timeLimit * 1000);
    }
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// function countdown(timeLimit, lasting) {
//     document.getElementById("timer").textContent = `남은 시간: `;
// }

//
//## 5. 퀴즈 도중 새로고침/이탈
//??

//
//## 6. 결과 화면

//
// ## 7. 기타
// - **문제 순서는 매번 랜덤**으로 섞여 출제된다.
function ramdomizeQuestions(quantity) {
    const questionIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 9; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionIds[i], questionIds[j]] = [questionIds[j], questionIds[i]];
    }

    return questionIds.slice(0, quantity);
}

//
//
// async function test() {
//     const response = await axios.get("data/questions.json");

//     console.log(response.data.find((q) => q.id === 1));
// }

// test();
