
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

  	/*what happens when someone pushes the newGame button?*/
  	var newGame = function() {
		setSecretNumber();
		/*more stuff*/
  	};

  	/*sets secret number to random number between 1 and 100*/
  	var setSecretNumber = function() {
  		secretNumber = Math.floor(Math.random()*100);
  	};

  	/*sets user guess variable*/
  	var setUserGuess = function() {
  		userGuess = $("#userGuess").val();
  		console.log(userGuess);
  	};

  	/*compares user guess and secret number and posts feedback*/
  	var feedback = function() {
		setUserGuess();
		var difference = Math.abs(userGuess-secretNumber);
		var postFeedback = function(message) {
			$('#feedback').text(message);
		};
		if(difference >= 1 && difference <= 10) {
			postFeedback("You are very hot!");
		}
		else if(difference >= 11 && difference <= 20) {
			postFeedback("You are hot");
		}
		else if(difference >= 21 && difference <= 30) {
			postFeedback("You are warm");
		}
		else if (difference >= 31 && difference <= 50) {
			postFeedback("You are cold");
		}
		else {
			postFeedback("You are ice cold!");
		}
	};
	/*runs feedback function when the user clicks the button*/
	$('#guessButton').click(function() {
		setUserGuess();
		var difference = Math.abs(userGuess-secretNumber);
		var postFeedback = function(message) {
			$('#feedback').text(message);
		};
		if(difference >= 1 && difference <= 10) {
			postFeedback("You are very hot!");
		}
		else if(difference >= 11 && difference <= 20) {
			postFeedback("You are hot");
		}
		else if(difference >= 21 && difference <= 30) {
			postFeedback("You are warm");
		}
		else if (difference >= 31 && difference <= 50) {
			postFeedback("You are cold");
		}
		else {
			postFeedback("You are ice cold!");
		}
	});
});


