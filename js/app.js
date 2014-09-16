$(document).ready(function () {
	$("#userGuess").focus();
/*--- Display information modal box ---*/
	$(".what").click(function () {
		$(".overlay").fadeIn(1000);
	});

/*--- Hide information modal box ---*/
	$("a.close").click(function () {
 		$(".overlay").fadeOut(1000);
    });

/*Declare global variables*/
	var secretNumber;
	var userGuess;
	var guessCount = 0;

/*Declare global functions*/

	var postFeedback = function (message) {
		$('#feedback').text(message);
	};

	var setSecretNumber = function () {
		secretNumber = Math.floor(Math.random() * 100);
		console.log("Secret Number: " + secretNumber);
	};

	var setUserGuess = function () {
		userGuess = Number($("#userGuess").val());
	};

	var postGuessCount = function () {
		$("#count").text(guessCount);
	};

	var clearGuessBox = function () {
		$("#userGuess").val("");
	};

	var clearGuessList = function () {
		$("#guessList").children().remove();
	};

	var newGame = function () {
	setSecretNumber();
	postFeedback("Make your Guess!");
	clearGuessBox();
	clearGuessList();
	guessCount = 0;
	postGuessCount();
	console.log("newGame ran");
	/*more stuff*/
	};

	newGame();

	var addGuessToList = function () {
	$("#guessList").append("<li>"+userGuess+"</li>");
	};

/*compares user guess and secret number and posts feedback*/
	var guessTheNumber = function () {
		
		setUserGuess();
		
		clearGuessBox();

		var updateGuessInfo = function () {
			guessCount++;
			postGuessCount();
			addGuessToList();
		};

		var difference = Math.abs(userGuess - secretNumber);

		if (secretNumber === "guessed") {
			postFeedback("You Won this game already! You need to start a new game.");
		}
		else if (userGuess > 100 || userGuess < 1) {
			postFeedback("Oops! Your guess has to be a number between 1 and 100!");
		}

		else if (userGuess === secretNumber) {
			postFeedback("You are correct!");
			updateGuessInfo();
			secretNumber = "guessed";
		}

		else if(difference === 1) {
			postFeedback("You are burning up!");
			updateGuessInfo();
		}

		else if(difference >= 2 && difference <= 3) {
			postFeedback("You are very hot!");
			updateGuessInfo();
		}

		else if(difference >= 4 && difference <= 7) {
			postFeedback("You are hot");
			updateGuessInfo();
		}

		else if(difference >= 8 && difference <= 15) {
			postFeedback("You are warm");
			updateGuessInfo();
		}

		else if(difference >= 16 && difference <= 31) {
			postFeedback("You are lukewarm");
			updateGuessInfo();
		}

		else if (difference >= 32 && difference <= 63) {
			postFeedback("You are cool");
			updateGuessInfo();
		}

		else {
			postFeedback("You are ice cold!");
			updateGuessInfo();
		}
		$("#userGuess").focus();
	};

/*What happens when the user clicks the guess button*/
/*Try using an on submit event rather than an on click*/
/*First thing you want to do is validate*/
	$('#guessButton').click(function(event) {
		guessTheNumber();
		event.preventDefault();
	});

	/*What happens when the user clicks on the New Game button*/
	$('.new').click(function() {
		newGame();
	});
});