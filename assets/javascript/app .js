// game variables 
var words = ["hagar", "garth", "toby", "alabama", "sugarland"];
var hint = ["He is a highway man", "He has Friends in low places", "toby", "Sweet Home", "Bigger"];
var song = [];
var losses = 0;
var wins = 0;
var guessesLeft = 12;
var gameRunning = false;

var gussedLetters = [];
var userGuess = " ";
var underScore = [];
var correctLetter =[];
var wrongLetter = [];
var getRan = Math.floor(Math.random() * words.length);
var getWord = words[getRan];

console.log("get Word: " + getWord);

// new game fuction reset all stats and pick new word and create placeholders
function newGame () {
  gameRunning = true;
  guessesLeft = 12;
  gussedLetters = [];
  wrongLetter = [];
  //underScore = [];

  // pick new Word
  pickedWord = words[Math.floor(Math.random() * words.length)];

  // create underscores
  for(var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] === ' ') {
      underScore.push(' ');
    } else {
      underScore.push('__');
    }
  }
}
console.log('underscore 22 ' + underScore);

// letters gussed function check to see if correct


// check for incorect


// check for lose


// check for win


// add event listner for new game button
$newGame.addEventListner('click', newGame);

// add keyup event to triger letter guess





// // clear array function
// function empty () {
//   gussedLetters = [];
// }

// var genUnder = function () {
//   for (i = 0; i < getWord.length; i++) {
//     underScore.push('_')
//   }
//   return underScore;
// }
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
  
 
   







  var html = "<p>Guess The Artist Below</p>" +
    "<p>Hint: " + hint[getRan] + "</p>" + 
    "<p>Word to guess: " + underScore + "</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Loses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Letters Gussed: " + gussedLetters + "</p>";

  document.querySelector("#word").innerHTML = html;

 // logs to screen for testing 
  console.log('undersscore ' + underScore);
  console.log('guessed letter ' + gussedLetters);
  console.log('get word ' + getWord)
  console.log("User Guess: " + userGuess);
  console.log("guesses Left: " + guessesLeft + " Wins: " + wins +" Losses: " + losses)
}

//console.log(gussesLetters);