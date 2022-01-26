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
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: true },
            { text: 'alerts', correct: false },
            { text: 'numbers', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true }
        ]
    },
    {
        question: 'The condition of an if / else statement is enclosed within ______.',
        answers: [
            { text: 'quotas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'parentheses', correct: true },
            { text: 'square brackets', correct: false }
        ]
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: true },
            { text: 'quotas', correct: false },
            { text: 'parentheses', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'JavaScript', correct: false },
            { text: 'terminal / bash', correct: false },
            { text: 'for loops', correct: true },
            { text: 'console.log', correct: false }
        ]
    },
]