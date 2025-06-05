// utils
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// 큰 div요소 보였다 안 보였다를 컨트롤할 함수 선언
function elementDisplayToggle(element) {
    if (element.style.display == "none")
        return (element.style.display = "block");
    if (element.style.display != "none")
        return (element.style.display = "none");
}

// 문제 제출용 순번 제작
function getRandomNum(count, range = 10) {
    const ramdomNums = [];

    // 지정된 범위 내에서 랜덤을 돌리고
    // 그 숫자가 배열 안에 없으면 넣고
    // 배열이 지정된 길이에 도달하면 정지

    // 근데 배열에 넣는 부분이 좀 비효율적이긴 한듯
    while (true) {
        let random = Math.floor(Math.random() * range) + 1;
        if (!ramdomNums.includes(random)) {
            ramdomNums.push(random);
        }
        if (ramdomNums.length == count) break;
    }

    return ramdomNums;
}

// manipulate dom
// question
// insertQuestion(viewQuiz, questions[userAnswers.length], {current: userAnswers.length + 1, questionNum,}, userAnswers)
async function insertQuestion(element, question, progress, userAnswers) {
    console.log(question);

    const labels = question.choices.map((choice, index) => {
        return `<label><input type="radio" name="choice" value="${index}" />${choice}</label>`;
    });

    element.innerHTML = `
  <div id="quiz-status">
          <span id="progress">문제 ${progress.current} / ${
        progress.questionNum
    }</span>
          <span id="timer" style="float: right">남은시간: ${
              question.timeLimit
          }s</span>
  </div>
  <div id="quiz-box">
    <div style="font-weight:bold; margin-bottom:10px;">${
        question.question
    }</div>
    <form id="choice-form">
    ${labels.join(" ")}
     </form>
  </div>
        <button id="submit-btn" disabled>제출</button>`;

    let currentChoiceValue = undefined;
    let timeCount = 0;

    const timer = document.getElementById("timer");
    const choiceForm = document.getElementById("choice-form");
    const submitBtn = document.getElementById("submit-btn");

    submitBtn.addEventListener("click", (e) => {
        choiceForm.dispatchEvent(
            new Event("submit", { bubbles: true, cancelable: true })
        );
    });

    const timeCouter = setInterval(() => {
        timeCount++;
        timer.textContent = `남은시간: ${question.timeLimit - timeCount}s`;
        if (timeCount > question.timeLimit) {
            clearInterval(timeCouter);
            choiceForm.dispatchEvent(
                new Event("submit", { bubbles: true, cancelable: true })
            );
        }
    }, 1000);

    choiceForm.addEventListener("change", (e) => {
        if (e.target.tagName != "INPUT") return;
        currentChoiceValue = e.target.value;
        submitBtn.disabled = false;
    });

    // 이 함수는 for문 내부에서 돌아가는 함수
    // Promise로 리턴하는 것으로 for문 내부에서 await로 for문의 반복 주기를 제어할 수 있게 됨
    return new Promise((resolve) => {
        choiceForm.addEventListener("submit", (e) => {
            e.preventDefault();
            userAnswers.push(currentChoiceValue);
            resolve();
        });
    });
}

// result 가공용
function getResults(questions, userAnswers) {
    const results = [];
    for (let i = 0; i < questions.length; i++) {
        results.push({
            questionAnswer: questions[i].answer,
            userAnswer: userAnswers[i],
        });
    }
    return results;
}

// 결과창 제작
// insertResult(viewResult, questions, userAnswers);
async function insertResult(element, questions, userAnswers) {
    const results = getResults(questions, userAnswers);

    let answerCount = results.filter(
        (result) => result.questionAnswer == result.userAnswer
    ).length;

    // <li>s
    const lis = results.map(
        (result, index) => `    <li>
      <div class="result-qnum-row">
        <span class="result-qnum">Q${index + 1}.</span>
        <span class="result-ox-icon"> ${
            +result.questionAnswer == +result.userAnswer ? "o" : "x"
        } </span>
      </div>
      <div class="result-question">
        ${questions[index].question}
      </div>
      <div class="result-choice-block">
                <div class="result-choice">
          <span class="result-choice-label">정답</span>
          ${+result.questionAnswer + 1}번 ${
            questions[index].choices[result.questionAnswer]
        }
        </div>
        <div class="result-choice">
          <span class="result-choice-label">내 선택</span>
          ${
              result.userAnswer != undefined
                  ? `          ${+result.userAnswer + 1}번 ${
                        questions[index].choices[result.userAnswer]
                    }`
                  : "선택안함"
          }

        </div>

      </div>
    </li>`
    );

    // element = viewResult
    // 위에서 만든 작업물을 최종적으로 렌더링
    element.innerHTML = `<h2>퀴즈 결과</h2>
  <div id="score">총 ${results.length}문제 중 ${answerCount}개 정답!</div>
  <ul class="result-list">
    ${lis.join(" ")}
    <button id="restart-btn">다시하기</button>
   </ul>
  `;

    // 처음으로 되돌아가는게 아니라
    // 아예 새로고침을 하는 것으로 해결한 모양
    // 새로고침 없이 안정적으로 되돌아갈 방법은 없나?
    const restartBtn = document.getElementById("restart-btn");
    restartBtn.addEventListener("click", () => {
        location.reload(true);
    });
}

// fetching data
async function fetchQuestions() {
    const response = await fetch(
        "/javascript/projects/quiz-app/data/questions.json"
    );

    const data = await response.json();
    return data;
}

const data = await fetchQuestions();

// get DOM
const viewStart = document.getElementById("view-start");
const viewQuiz = document.getElementById("view-quiz");
const viewResult = document.getElementById("view-result");
const selectCount = document.getElementById("select-count");
const startBtn = document.getElementById("start-btn");

// quiz var

let questionNum;
let userAnswers = [];
let questions = [];

// adding event
startBtn.addEventListener("click", async () => {
    // quiz
    questionNum = selectCount.value;

    // make question
    let randomNums = getRandomNum(questionNum);
    for (let i = 0; i < questionNum; i++) {
        questions.push(data[randomNums[i] - 1]);
    }

    // viewStart display none & viewQuiz display
    elementDisplayToggle(viewStart);
    elementDisplayToggle(viewQuiz);

    for (let i = 0; i < questionNum; i++) {
        await insertQuestion(
            viewQuiz,
            questions[userAnswers.length],
            {
                current: userAnswers.length + 1,
                questionNum,
            },
            userAnswers
        );
    }

    insertResult(viewResult, questions, userAnswers);

    // viewQuiz display none & viewResult display
    elementDisplayToggle(viewQuiz);
    elementDisplayToggle(viewResult);
});
