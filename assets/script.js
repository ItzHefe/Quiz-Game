var timerEl = document.querySelector('#countDown');
var startGame = document.querySelector('#start-game')


var message = "Game Over"

function countDown() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function() { 
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft; 
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
        }, 1000);
  }
  startGame.addEventListener("click",  countDown);