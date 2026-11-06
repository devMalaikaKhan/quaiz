const questions = [
  {
    question: "Capital of France?",
    answers: ["Berlin", "Paris", "Rome", "Madrid"],
    correct: "Paris"
  },
  {
    question: "5 + 5 = ?",
    answers: ["10", "15", "20", "5"],
    correct: "10"
  },
  {
    question: "JS stands for?",
    answers: ["JavaSource", "JavaScript", "JustScript", "JScript"],
    correct: "JavaScript"
  },
  {
    question: "HTML is?",
    answers: ["Programming", "Markup Language", "Database", "OS"],
    correct: "Markup Language"
  },
  {
    question: "CSS used for?",
    answers: ["Logic", "Styling", "Database", "Server"],
    correct: "Styling"
  }
];

let current = 0;
let score = 0;

/* ELEMENTS */
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progress = document.getElementById("progress");
const progressText = document.getElementById("progressText");
const scoreEl = document.getElementById("score");
const finalScore = document.getElementById("finalScore");

/* START */
function startQuiz() {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  loadQuestion();
}

/* LOAD QUESTION */
function loadQuestion() {
  let q = questions[current];

  questionEl.innerText = q.question;
  progressText.innerText = `Question ${current + 1}/${questions.length}`;
  scoreEl.innerText = `Score: ${score}`;

  progress.style.width = `${(current / questions.length) * 100}%`;

  answersEl.innerHTML = "";

  q.answers.forEach(ans => {
    const btn = document.createElement("div");
    btn.classList.add("answer");
    btn.innerText = ans;

    btn.onclick = () => selectAnswer(btn, ans);
    answersEl.appendChild(btn);
  });
}
/* SELECT */
function selectAnswer(btn, answer) {
  let correct = questions[current].correct;

  if (answer === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
  }

  // Disable further clicks during timeout
  const answers = document.querySelectorAll('.answer');
  answers.forEach(a => a.style.pointerEvents = 'none');

  setTimeout(() => {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 800);
}

/* RESULT */
function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScore.innerText = `You scored ${score}/${questions.length}`;
}

/* RESTART */
function restartQuiz() {
  current = 0;
  score = 0;
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}

/* INIT */
startScreen.classList.add("active");




