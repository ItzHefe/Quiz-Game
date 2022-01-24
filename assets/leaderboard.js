var submitBtn = document.querySelector('#submit-btn');
var userIni = document.querySelector('#initials');
var leaderEl = document.querySelector('#leaderBoard');
var leaderListEl = document.querySelector('#score-list');
var resetBtn = document.querySelector('#reset-btn');
var navButtonEl = document.querySelector('.sButton')

submitBtn.addEventListener('click', showLeaders);

function showLeaders() {
    leaderEl.classList.remove('hide');
    leaderListEl.classList.remove('hide');
    navButtonEl.classList.remove('hide');

    localStorage.setItem("initials", JSON.stringify(userIni));

}