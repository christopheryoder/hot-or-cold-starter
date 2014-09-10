
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*Declare global variables*/
  	var secretNumber = Math.floor(Math.random()*100);
  	var userGuess;
  	var guessCount = 0;

  	/*Declare global functions*/

	var postFeedback = function(message) {
	$('#feedback').text(message);
	};

  	var setSecretNumber = function() {
  		secretNumber = Math.floor(Math.random()*100);
  	};

  	var setUserGuess = function() {
  		userGuess = $("#userGuess").val();
  	};

  	var postGuessCount = function() {
  		$("#count").text(guessCount);
  	};

  	var clearGuessBox = function() {
  		$("#userGuess").val("");
  	};

  	var newGame = function() {
		setSecretNumber();
		postFeedback("Make your Guess!");
		clearGuessBox();
		guessCount = 0;
		postGuessCount();
		/*more stuff*/
  	};

  	/*compares user guess and secret number and posts feedback*/
  	var compare = function() {
		var difference = Math.abs(userGuess-secretNumber);
		if (userGuess==secretNumber) {
			postFeedback("You are correct!");
			/*Give user the option to start a new game*/
			var okCancel = confirm("You won the game! : )\nWould you like to play again?");
			if (okCancel == true) {
				newGame();
				return;
			} 
			else {

			}
		}
		else if(difference >= 1 && difference <= 3) {
			postFeedback("You are burning up!");
		}
		else if(difference >= 4 && difference <= 6) {
			postFeedback("You are very hot!");
		}
		else if(difference >= 7 && difference <= 13) {
			postFeedback("You are hot");
		}
		else if(difference >= 14 && difference <= 25) {
			postFeedback("You are warm");
		}
		else if (difference >= 26 && difference <= 50) {
			postFeedback("You are cold");
		}
		else {
			postFeedback("You are ice cold!");
		}
		guessCount++;
		postGuessCount();
	};

	/*What happens when the user clicks the guess button*/
	$('#guessButton').click(function(event) {
		event.preventDefault();
		setUserGuess();
		clearGuessBox();
		compare();
		$("#guessList").append("<li>"+userGuess+"</li>");
	});

	/*What happens when the user clicks on the New Game button*/
	$('.new').click(function() {
		newGame();
	});
});