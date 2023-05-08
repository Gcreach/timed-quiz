var startButton = document.querySelector('.start-button');
var initials = document.querySelector('.initials');
var timerElement = document.querySelector('.timer-text');
var highScore = document.querySelector('.high-score');
var main = document.querySelector('.mainPage');
var enterInitials = document.querySelector('#initials');
var backButton = document.getElementById('#go-back');
var clearButton = document.getElementById('clear');
var submitButton = document.getElementById('submit');
var scoreList = document.getElementById('score-list');
var endText = document.querySelector('#end');

var timer;
var timerCount = 75;
var initialsList;

var userScore = 0;

endText.textContent = userScore;

function startTimer() {
	timer = setInterval(function () {
		timerCount--;
		timerElement.textContent = timerCount;

		if (timerCount <= 0) {
			clearInterval(timer);
			showFinalScore();
		}
	}, 1000);
}

function startGame() {
	startButton.disabled = true;
	startTimer();
	showQuiz1();
}

function init() {
	initialsList = JSON.parse(localStorage.getItem('score-list'));

	if (!initialsList) {
		initialsList = [];
	}
}
init();

startButton.addEventListener('click', startGame);

function showQuiz1() {
	main = document.getElementById('mainPage').style.display = 'none';
	document.getElementById('quiz-question1').style.display = 'block';
	document.getElementById('quiz-question2').style.display = 'none';
	document.getElementById('quiz-question3').style.display = 'none';
	document.getElementById('finalScore').style.display = 'none';
	document.getElementById('highScoreList').style.display = 'none';
	document.getElementById('high-score').style.display = 'none';
}

function showQuiz2() {
	main = document.getElementById('mainPage').style.display = 'none';
	document.getElementById('quiz-question1').style.display = 'none';
	document.getElementById('quiz-question2').style.display = 'block';
	document.getElementById('quiz-question3').style.display = 'none';
	document.getElementById('finalScore').style.display = 'none';
	document.getElementById('highScoreList').style.display = 'none';
	document.getElementById('high-score').style.display = 'none';
}

function showQuiz3() {
	main = document.getElementById('mainPage').style.display = 'none';
	document.getElementById('quiz-question1').style.display = 'none';
	document.getElementById('quiz-question2').style.display = 'none';
	document.getElementById('quiz-question3').style.display = 'block';
	document.getElementById('finalScore').style.display = 'none';
	document.getElementById('highScoreList').style.display = 'none';
	document.getElementById('high-score').style.display = 'none';
}

function verifyAnswer(answer) {
	var answerArr = answer.split('');
	var questionNum = answerArr[1];
	var answerNum = answerArr[3];
	if (questionNum === '1' && answerNum === '4') {
		userScore += 10;
		showQuiz2();
	} else if (questionNum === '2' && answerNum === '3') {
		userScore += 10;
		showQuiz3();
	} else if (questionNum === '3' && answerNum === '3') {
		userScore += 10;
		showFinalScore();
	} else {
		timerCount -= 10;
		if (questionNum === '1') {
			showQuiz2();
		} else if (questionNum === '2') {
			showQuiz3();
		} else if (questionNum === '3') {
			clearInterval(timer);
			showFinalScore();
		}
	}
}

function showFinalScore() {
	timerCount = 0;
	timer = 0;
	main = document.getElementById('mainPage').style.display = 'none';
	document.getElementById('quiz-question1').style.display = 'none';
	document.getElementById('quiz-question2').style.display = 'none';
	document.getElementById('quiz-question3').style.display = 'none';
	document.getElementById('finalScore').style.display = 'block';
	document.getElementById('timer').style.display = 'none';
	document.getElementById('highScoreList').style.display = 'none';
	document.getElementById('high-score').style.display = 'block';

	endText.textContent = userScore;
}

submitButton.addEventListener('click', showHighScoreList);

highScore.addEventListener('click', showHighScoreList);

function showHighScoreList() {
	main = document.getElementById('mainPage').style.display = 'none';
	document.getElementById('quiz-question1').style.display = 'none';
	document.getElementById('quiz-question2').style.display = 'none';
	document.getElementById('quiz-question3').style.display = 'none';
	document.getElementById('finalScore').style.display = 'none';
	document.getElementById('timer').style.display = 'none';
	document.getElementById('highScoreList').style.display = 'block';
	document.getElementById('high-score').style.display = 'none';
	showHighscores();
}

 function showHighscores() {
	var lastHighScore = JSON.parse(localStorage.getItem('userInitials'));
	scoreList.innerHTML = '';

    if (lastHighScore !== null) {
		clearInterval(timer);
        for (var i = 0; i < lastHighScore.length; i++) {
            var listEL = document.createElement("li");
            listEL.textContent = i+1 + ". " + lastHighScore[i].initials + " - " + lastHighScore[i].score;
			console.log(listEL);
            scoreList.append(listEL);
			//console.log(lastHighScore[i]);

			clearButton.addEventListener('click', function (event) {
				listEL.remove();
			})
        }
    } 
	console.log('lastHighScore', lastHighScore);
	console.log(timer);
} 

submitButton.addEventListener('click', function (event) {
	event.preventDefault();

	var userInitials = {
		initials: enterInitials.value.trim(),
		score: userScore,
	};
	initialsList.push(userInitials);
	localStorage.setItem('userInitials', JSON.stringify(initialsList));
	showHighScoreList();
});






   
    


  



   






