
var words = ["Garth", "Willie", "alabama"];
var losses = 0;
var wins = 0;
var guessesLeft = 12;
var gussesLetters = [];
var userGuess = " ";


document.onkeyup = function () {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // push user guess to aray
  gussesLetters.push(userGuess);
  // decrese guesses left
  guessesLeft--
  // reset guess counter
  if (guessesLeft === 0){
    guessesLeft = 12;
    // increase losses
    losses ++
    // clear out array
    gussesLetters = [];
  }

  console.log(gussesLetters);
  console.log("User Guess: " + userGuess);
  console.log("guesses Left: " + guessesLeft + " words: " + words + " Wins: " + wins +" Losses: " + losses)
}

//console.log(gussesLetters);