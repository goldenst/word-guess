// game variables 
var words = ["willie", "garth", "toby", "alabama", "sugarland"];
var losses = 0;
var wins = 0;
var guessesLeft = 12;
var gussedLetters = [];
var userGuess = " ";
var underScore = [];
var correctLetter =[];
var wrongLetter = [];

function newWord() {

}
// clear array function
function empty() {
  gussedLetters = [];
}
// get word from array
var getWord = words[Math.floor(Math.random() * words.length)];
// get underscores for gamegf
var getUnder = function () {
  for (i = 0; i < getWord.length; i++) {
    underScore.push('_')
  }
  return underScore;
}
console.log(getUnder());


// Get user input
document.onkeyup = function (event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // push user guess to aray
  gussedLetters.push(userGuess);
  // reset guess counter
  if (guessesLeft === 0) {
    guessesLeft = 12;
    // increase losses
    losses++
    // call clear out array
    empty()
    // call new word
    newWord()
  }
  
  if (getWord.indexOf(userGuess) > -1){
    correctLetter.push(userGuess);
    for (var i = 0; i < getWord.length; i++) {
      if(getWord[i] === userGuess) {
        underScore[i] = userGuess;
        console.log(underScore);
      }
    }
  } else {
    guessesLeft--
    wrongLetter.push(userGuess)
  }

  // if user wins game
  if (underScore == getWord) {
    alert('winner')
    wins++;
    guessesLeft = 12;
    empty()
    newWord()
  }

  var html = "<p>Guess The Prase Below</p>" +
    "<p>Word to guess: " + underScore + "</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Loses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Letters Gussed: " + gussedLetters + "</p>";

  document.querySelector("#word").innerHTML = html;
  // logs to screen for testing 


  
  console.log("Guessed letters: " + gussedLetters);
  console.log("Correect letter: " + correctLetter);
  console.log("Wrong letter: " + wrongLetter);
  console.log(getWord);
  console.log("User Guess: " + userGuess);
  console.log("guesses Left: " + guessesLeft + " Wins: " + wins + " Losses: " + losses)
}

//console.log(gussesLetters);