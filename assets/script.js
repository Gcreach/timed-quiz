var startButton = document.querySelector(".start-button");
var initials = document.querySelector(".initials");
var timerElement = document.querySelector(".timer-text");
var highScore = document.querySelector(".high-score");
var main = document.querySelector(".mainPage");
var enterInitials = document.querySelector("#initials");
var backButton = document.getElementById('#go-back');
var clearButton = document.getElementById('#clear');
var submitButton = document.getElementById('submit');
var scoreList = document.getElementById('#score-list');
var endText = document.querySelector('#end');

var timer;
var timerCount = 75;
var initialsList = [];

var userScore = 0;

endText.textContent = userScore;

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount === 0) {
            clearInterval(timer);
            showFinalScore();
        } 
        
    }, 1000)
}

function startGame() {
    startButton.disabled = true;
    startTimer();
    showQuiz1();
} 

function init() {
    initialsList = JSON.parse(localStorage.getItem("score-list"));

    if(!initialsList) {
        initialsList = []
    }
}

startButton.addEventListener("click", startGame);

function showQuiz1() {
    main = document.getElementById("mainPage").style.display = "none";
    document.getElementById("quiz-question1").style.display = "block";
    document.getElementById("quiz-question2").style.display = "none";
    document.getElementById("quiz-question3").style.display = "none";
    document.getElementById("finalScore").style.display = "none";
    document.getElementById("highScoreList").style.display = "none";
    document.getElementById("high-score").style.display = "none"

    var correct = document.getElementById("q1o4");
    var incorrect1 = document.getElementById("q1o1");
    var incorrect2 = document.getElementById("q1o2");
    var incorrect3 = document.getElementById("q1o3");

    if (correct.addEventListener('click', showQuiz2)) {
        userScore += 10;
    }
    else if (incorrect1.addEventListener('click', showQuiz2) || incorrect2.addEventListener('click', showQuiz2) || incorrect3.addEventListener('click', showQuiz2)) {
        timerCount -= 10;
    }
}

function showQuiz2() {
    main = document.getElementById("mainPage").style.display = "none";
    document.getElementById("quiz-question1").style.display = "none";
    document.getElementById("quiz-question2").style.display = "block";
    document.getElementById("quiz-question3").style.display = "none";
    document.getElementById("finalScore").style.display = "none";
    document.getElementById("highScoreList").style.display = "none";
    document.getElementById("high-score").style.display = "none"

    var correct = document.getElementById("q2o3");
    var incorrect1 = document.getElementById("q2o2");
    var incorrect2 = document.getElementById("q2o1");
    var incorrect3 = document.getElementById("q2o4");

    console.log(userScore);

    if (correct.addEventListener('click', showQuiz3)) {
        userScore += 10;
    }
    else if (incorrect1.addEventListener('click', showQuiz3) || incorrect2.addEventListener('click', showQuiz3) || incorrect3.addEventListener('click', showQuiz3)) {
        timerCount = timerCount - 10;
    }
}

function showQuiz3() {
    main = document.getElementById("mainPage").style.display = "none";
    document.getElementById("quiz-question1").style.display = "none";
    document.getElementById("quiz-question2").style.display = "none";
    document.getElementById("quiz-question3").style.display = "block";
    document.getElementById("finalScore").style.display = "none";
    document.getElementById("highScoreList").style.display = "none";
    document.getElementById("high-score").style.display = "none"

    var correct = document.getElementById("q3o3");
    var incorrect1 = document.getElementById("q3o1");
    var incorrect2 = document.getElementById("q3o2");
    var incorrect3 = document.getElementById("q3o4");

    if (correct.addEventListener('click', showFinalScore)) {
        userScore += 10;
    }
    else if (incorrect1.addEventListener('click', showFinalScore) || incorrect2.addEventListener('click', showFinalScore) || incorrect3.addEventListener('click', showFinalScore)) {
        timerCount = timerCount - 10;
    }
}

function showFinalScore() {
    main = document.getElementById("mainPage").style.display = "none";
    document.getElementById("quiz-question1").style.display = "none";
    document.getElementById("quiz-question2").style.display = "none";
    document.getElementById("quiz-question3").style.display = "none";
    document.getElementById("finalScore").style.display = "block";
    document.getElementById("timer").style.display = "none";
    document.getElementById("highScoreList").style.display = "none";
    document.getElementById("high-score").style.display = "block";

    submitButton.addEventListener("click", showHighScoreList)
  
}

function showHighScoreList() {
    main = document.getElementById("mainPage").style.display = "none";
    document.getElementById("quiz-question1").style.display = "none";
    document.getElementById("quiz-question2").style.display = "none";
    document.getElementById("quiz-question3").style.display = "none";
    document.getElementById("finalScore").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("highScoreList").style.display = "block";
    document.getElementById("high-score").style.display = "none"

    console.log(userScore);
    showHighscores();
    
}

function getHighScore() {
    var lastHighScore = localStorage.getItem("userInitials");

    if (!lastHighScore) {
        return;
    }
}

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

     var userInitials = {
         initials: enterInitials.value.trim(),
         score: userScore
        };
        initialsList.push(userInitials);
        localStorage.setItem("userInitials", JSON.stringify(userInitials));
        getHighScore();
    });

    function showHighscores () {
        var list = JSON.parse(localStorage.getItem("initialsList"));
       
    }

    

   
    


  



   






