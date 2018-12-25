// game variables 
var words = [ "Willie", "garth", "Toby", "Alabama", "SugarLand"];
var losses = 0;
var wins = 0;
var guessesLeft = 12;
var gussedLetters = [];
var userGuess = " ";
var underScore = [];



// clear array function
function empty () {
  gussedLetters = [];
}

var genUnder = function () {
  for (i = 0; i < getWord.length; i++) {
    underScore.push('_')
  }
  return underScore;
}
// get word from array
var getWord = words[Math.floor(Math.random () * words.length)];
document.onkeyup = function () {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // push user guess to aray
  gussedLetters.push(userGuess);
  // decrese guesses left
  guessesLeft--
  // reset guess counter
  if (guessesLeft === 0){
    guessesLeft = 12;
    // increase losses
    losses ++
    // call clear out array
    empty()
  }
  
  if( gussedLetters == getWord ) {
    alert('winner')
    wins ++;
    guessesLeft = 12;
    empty()
  }
   
  var getUnderscore = function() {
    for (i = 0; i < getWord.length; i++) {
      underScore.push('_')
    }
  }






  var html = "<p>Guess The Prase Above</p>" +
  "<p>Word in aray: " + words + "</p>" +
  "<p>Word to guess: " + getWord + underScore + "</p>" +
  "<p>Wins: " + wins + "</p>" +
  "<p>Loses: " + losses + "</p>" +
  "<p>Guesses Left: " + guessesLeft + "</p>" +
  "<p>Letters Gussed: " + gussedLetters+ "</p>" ;

  document.querySelector("#word").innerHTML = html;
 // logs to screen for testing 
  console.log(underScore);
  console.log(gussedLetters);
  console.log(getWord)
  console.log("User Guess: " + userGuess);
  console.log("guesses Left: " + guessesLeft + " Wins: " + wins +" Losses: " + losses)
}

//console.log(gussesLetters);