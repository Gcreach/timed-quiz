var startButton = document.querySelector(".start-button");
var initials = document.querySelector(".initials");
var timerElement = document.querySelector(".timer-text");
var highScore = document.querySelector(".high-score");
var main = document.querySelector(".mainPage");
var enterInitials = document.getElementById("#initials");
var backButton = document.getElementById('#go-back');
var clearButton = document.getElementById('#clear');
var submitButton = document.getElementById('#submit');
var scoreList = document.getElementById('#score-list');

var initialsList = [];

function showHighscores () {
    var list = JSON.parse(localStorage.getItem("initialsList"));
    if (list !== null) {
        for (var i = 0; i < list.length; i++) {
            var listEL = document.createElement("li");
            listEL.textContent = i+1 + ". " + list[i].name + " - " + list[i].highScore;
            scoreList.appendChild(li);
        }
    }
}


showHighscores();