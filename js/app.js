
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var secretNumber;

  	/*When the page loads, JavaScript should start a new game. Since you’ll need to be able to start a new game when the user clicks the “New Game” button, you’ll want to create a newGame function that does everything necessary to start a new game.*/

  	var newGame = function() {
		/*When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. You should write a named function that takes care of this.*/
		randomNumber100();
  	};

	/*When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. You should write a named function that takes care of this.*/
  	var randomNumber100 = function() {
  		secretNumber = Math.floor(Math.random()*100);
  	};
  	randomNumber100();

  	/*The user should get feedback about each guess – if it was too low, too high, or just right. This means that you’ll need to write a named function that takes a user guess and determines which feedback to provide.*/

  	/*Initially, you shouldn’t worry about telling users if they’re getting “hotter” or “colder” relative to their previous guess. Instead, you can use absolute values. For instance, you might decide that if a user is 50 or further away from the secret number, they are told they are “Ice cold”, if they are between 30 and 50 they are “cold”, if they are between 20 and 30 they are warm, between 10 and 20 hot, and between 1 and 10 “very hot”. We’ll leave it up to you to choose what the ranges are and what feedback you provide.*/

  	  	var feedback = function() {
  		/*Feedback about the guess should appear in div#feedback. By default, when the page loads, the text in this field is set to “Make Your Guess!”*/
	};

  	/*The game should track how many guess the user has made. Feedback about this should appear in span#count (which defaults to 0, when the page loads).*/

  	/*The game should also supply users with a list of the numbers they have guessed so far. We’ve set up the CSS for this game in such a way that you can simply add each guessed number as an li to ul#guessList.*/

  	/*You’ll need to ensure that users provide valid inputs. Note that the guess text input field has the HTML 5 required flag set, so you won’t have to worry about blank guesses being submitted (if the user submits a blank guess, they'll be prompted to supply an input). However, you will need to write code that ensures that the user has supplied a numeric input between 1 and 100.*/

  	/*The starter template already contains a button in the upper right hand corner for starting a new game, however, this button does not currently do anything. You’ll need to write code that allows users to start a new game without making additional calls to the server. Clicking “New Game” should trigger the JavaScript function that starts a new game.*/

  	/*The game should track how many guesses the user has made. Feedback about this should appear in span#count (which defaults to 0, when the page loads).*/

});


