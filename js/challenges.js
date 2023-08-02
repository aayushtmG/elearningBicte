let question = document.querySelector(".question")
let answers = document.querySelectorAll(".answers")
let submitButton = document.querySelector("#submitAnswer")
let nextButton = document.querySelector("#nextButton")
let prevButton = document.querySelector("#prevButton")
let questionForm = document.querySelector("#questionAnswer")
let navigator = document.querySelectorAll(".navigator")
let count = 0
let questionCount = 0

let QACollection = [
  [
    {
      question:
        " Which of the following option leads to the portability and security of Java?",
      answers: [
        "Bytecode is executed by JVM",
        "The applet makes the Java code secure and portable",
        "Use of exception handling",
        "Dynamic binding between objects",
      ],
      correct: 0,
    },
    {
      question: "Which of the following is not a Java features?",
      answers: [
        "Dynamic",
        "Architecture Neutral",
        "Use of pointers",
        "Object-oriented",
      ],
      correct: 2,
    },
    {
      question: "_____ is used to find and fix bugs in the Java programs.",
      answers: ["JVM", "JRE", "JDK", "JDB"],
      correct: 3,
    },
  ],
  [
    {
      question: "Which one is not control flow statement in java?",
      answers: [
        "Loop Statements",
        "Jump Statements",
        "Decision Making Statements",
        "Conditional Statements",
      ],
      correct: 3,
    },
  ],
]
let collection = 0

function renderTopicSection(collection) {
  reset()
  questionCount = 0
  renderQuestion(collection, questionCount)
}
renderTopicSection(0, 0)
function renderQuestion(collection, questionCount) {
  let countt = 0
  nextButton.setAttribute("disabled", "")
  question.innerHTML = QACollection[collection][questionCount].question
  answers.forEach(
    (ans) =>
      (ans.innerHTML =
        QACollection[collection][questionCount].answers[countt++])
  )
  questionCount == 0
    ? prevButton.setAttribute("disabled", "")
    : prevButton.removeAttribute("disabled")
}

navigator.forEach((li) => {
  li.addEventListener("click", function (e) {
    Object.values(e.target.parentElement.children).forEach((li) =>
      li.classList.remove("active")
    )
    e.target.classList.add("active")
    collection = e.target.dataset.navigate
    console.log(collection, questionCount)
    renderTopicSection(collection, questionCount)
  })
})

//Getting the answer
questionForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  const answer = Object.fromEntries(formData).answer
  if (answer == QACollection[collection][questionCount].correct) {
    answers[QACollection[collection][questionCount].correct].classList.add(
      `bg-success`,
      "text-white"
    )
    document.querySelectorAll(".btn-check").forEach((el) => {
      if (el.getAttribute("value") != answer) {
        el.setAttribute("disabled", "")
        submitButton.setAttribute("disabled", "")
      }
      if (questionCount + 1 != QACollection[collection].length) {
        nextButton.removeAttribute("disabled")
      }
    })
  } else {
    answers[answer].classList.add("bg-danger", "text-white")
    document
      .querySelector(`#btnradio${answer * 1 + 1}`)
      .setAttribute("disabled", "")
  }
})

//NEXT QUESTION
nextButton.addEventListener("click", function () {
  //increment question count to move to next question
  questionCount++
  reset()
  //change the html contents
  renderQuestion(collection, questionCount)
})

//PREVIOUS QUESTION
prevButton.addEventListener("click", function () {
  questionCount--
  reset()
  renderQuestion(questionCount)
})

function reset() {
  count = 0
  answers.forEach((ans) => {
    ans.classList.remove("bg-success", "text-white", "bg-danger")
  })
  document
    .querySelectorAll("input")
    .forEach((el) => el.removeAttribute("disabled"))
  submitButton.removeAttribute("disabled")
  questionForm.reset()
}
