var submitBtn = document.querySelector('#submit-btn');
var userIni = document.querySelector('#initials');
var leaderEl = document.querySelector('#leaderBoard');
var leaderListEl = document.querySelector('#score-list');
var resetBtn = document.querySelector('#reset-btn');
var navButtonEl = document.querySelector('.sButton');


resetBtn.addEventListener('click', resetHS);



var savedHS = JSON.parse(localStorage.getItem('highScores')) || [];
savedHS = savedHS.sort((a, b) => b.score - a.score);
savedHS.forEach(person => {
    var createLi = document.createElement('li')
    createLi.textContent = 'Initials: ' + person.initials + " Score: " + person.score;
    leaderListEl.appendChild(createLi);  
});

function resetHS() {
    document.querySelector('#hs1').textContent = "";
}