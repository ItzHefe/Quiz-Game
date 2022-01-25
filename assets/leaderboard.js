var submitBtn = document.querySelector('#submit-btn');
var userIni = document.querySelector('#initials');
var leaderEl = document.querySelector('#leaderBoard');
var leaderListEl = document.querySelector('#score-list');
var resetBtn = document.querySelector('#reset-btn');
var navButtonEl = document.querySelector('.sButton');


submitBtn.addEventListener('click', showLeaders);
resetBtn.addEventListener('click', resetHS);

function showLeaders(event) {
    event.preventDefault();
    //un-hides the stack ranking
    leaderEl.classList.remove('hide');
    leaderListEl.classList.remove('hide');
    navButtonEl.classList.remove('hide');
    resetBtn.classList.remove('hide');

    //need to store the input form the form and then put it to local storage

    localStorage.setItem("initials", (userIni.value));
}

var userName = localStorage.getItem('initials');
var points = localStorage.getItem("score");

document.querySelector('#hs1').textContent = (userName + " - " + points);


function resetHS() {
    document.querySelector('#hs1').textContent = "";
}