var timerEl = document.querySelector('#countDown');
var startButton = document.querySelector('#start-btn');
var nextQ = document.querySelector('#next-btn');
var questionContainerEl = document.querySelector('#question-container');
var questionEl = document.querySelector('#question');
var answerBtnEl = document.querySelector('#answers');

let currentQuestionIndex, nextQuestion

startButton.addEventListener("click", countDown);
startButton.addEventListener("click", startGame);
nextQ.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log("game started");
    startButton.classList.add('hide');
    nextQuestion = questions;
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
    reset()
    showQuestion(nextQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnEl.appendChild(button)
    })
}

function reset() {
    nextQ.classList.add('hide');
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function selectAnswer(i) {
    var selectedButton = i.target
    
    if (nextQuestion.length > currentQuestionIndex + 1) {
        nextQ.classList.remove('hide')
    }
    else {showHighscore}
}

function countDown() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function() { 
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft; 
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
        if (timeLeft === 0) {
            clearInterval(timer);
            loseGame();
          }
        }, 1000);
  }

  var questions = [
      {
          question: 'example question 2',
          answers: [
              { text: '4', correct: true }, 
              { text: '22', correct: false },
              { text: '33', correct:false },
              { text: '44', correct:false }
          ]
      },
      {
        question: 'example question 3',
        answers: [
            { text: '4', correct: true }, 
            { text: '22', correct: false },
            { text: '33', correct:false },
            { text: '44', correct:false }
        ]
      },
      {
        question: 'example question 4',
        answers: [
            { text: '4', correct: true }, 
            { text: '22', correct: false },
            { text: '33', correct:false },
            { text: '44', correct:false }
        ]
      },
      {
        question: 'example question 5',
        answers: [
            { text: '4', correct: true }, 
            { text: '22', correct: false },
            { text: '33', correct:false },
            { text: '44', correct:false }
        ]
      },
      {
        question: 'example question 6',
        answers: [
            { text: '4', correct: true }, 
            { text: '22', correct: false },
            { text: '33', correct:false },
            { text: '44', correct:false }
        ]
      },
  ]