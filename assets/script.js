var timerEl = document.querySelector('#countDown');
var startButton = document.querySelector('#start-btn');
var nextQ = document.querySelector('#next-btn');
var questionContainerEl = document.querySelector('#question-container');
var questionEl = document.querySelector('#question');
var answerBtnEl = document.querySelector('#answers');
var userFeedbackEl = document.querySelector('.feedback');
var quizEndEl = document.querySelector('.quiz-end')
var timeInterval
var timeLeft = 75
var submitHSBtn = document.querySelector('#submitHS-btn');

let currentQuestionIndex, nextQuestion

startButton.addEventListener("click", countDown);
startButton.addEventListener("click", startGame);
nextQ.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function countDown() {
    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

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
    userFeedbackEl.classList.add('hide')
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function selectAnswer(i) {
    var selectedButton = i.target;
    var correctA = (selectedButton.dataset.correct === "true");

    var userFeedText = document.querySelector('#userResponse');
    var hsBtn = document.querySelector('#hs-btn');
    //var btnClicked = $(this);

    if (correctA) {
        userFeedbackEl.classList.remove('hide')
        userFeedText.innerHTML = 'Correct!';
    }
    else {
        //trying to show the user in the feedback section the correct answer
        userFeedbackEl.classList.remove('hide');
        userFeedText.innerHTML = 'Not Correct';
        questions[0].answers[0].correct
        timeLeft -= 5;
        // "The correct answer was: " + questions[currentQuestionIndex].answer;
        // loop through answers to try and show the correct one. 
    }

    if (nextQuestion.length > currentQuestionIndex + 1) {
        nextQ.classList.remove('hide');
    }
    //trying to stop the timer, show "all done", and show high score link all on the answer click if there is no available questions after
    else {
        hsBtn.classList.remove('hide');
        clearInterval(timeInterval);
        quizEndEl.classList.remove('hide');
        showInitials(event);
    }
}

function showInitials(event) {
    event.preventDefault();
    var showForm = document.querySelector('#initialsForm');
    showForm.classList.remove('hide');
    
}

function saveHS(formIni) {
    
    var savedHS = JSON.parse(localStorage.getItem('highScores')) || [];
    var userScore = {
        initials: formIni.value, 
        score: timeLeft 
    }
    savedHS.push(userScore)
    localStorage.setItem('highScores', JSON.stringify(savedHS));

}
submitHSBtn.addEventListener('click', function() {
    var formIni = document.querySelector('#initials');
    saveHS(formIni);
});


var questions = [
    {
        question: 'example question 1',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '33', correct: false },
            { text: '44', correct: false }
        ]
    },
    {
        question: 'example question 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '33', correct: false },
            { text: '44', correct: false }
        ]
    },
    {
        question: 'example question 3',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '33', correct: false },
            { text: '44', correct: false }
        ]
    },
    {
        question: 'example question 4',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '33', correct: false },
            { text: '44', correct: false }
        ]
    },
    {
        question: 'example question 5',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '33', correct: false },
            { text: '44', correct: false }
        ]
    },
]