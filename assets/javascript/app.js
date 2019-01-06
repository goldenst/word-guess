// game variables 
var words = ["Sammy Hagar", "Garth Brooks", "Toby Kieth", "Alabama", "Sugarland"];
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



// new game fuction reset all stats and pick new word and create placeholders


  // pick new Word
 var getWord = words[Math.floor(Math.random() * words.length)];

  // create underscores
  var getUnder = function () {
    for(var i = 0; i < getWord.length; i++) {
      if (getWord[i] === ' '){
        underScore.push(' ')
      }else {
        underScore.push('__')
      }
    }
    return underScore;
  }
  getUnder()
  

  // letters gussed function check to see if correct


 

// check for incorect


// check for loss


// check for win


// add event listner for new game button


// add keyup event to triger letter guess



var html = "<p>Guess The Artist Below</p>" +
  "<p>Hint: " +  "</p>" + 
  "<p>Word to guess: " +  "</p>" +
  "<p>Wins: " +  "</p>" +
  "<p>Loses: " +  "</p>" +
  "<p>Guesses Left: " +  "</p>" +
  "<p>Letters Gussed: " + "</p>";

  //document.querySelector('#word').innerHTML = html;

console.log("Get word: " + getWord)
console.log("User Guess" + userGuess);
console.log("Guessed Letters" + gussedLetters);
console.log('wins: ' + wins + "  losses: " + losses + "  Guesses left: " + guessesLeft);
console.log("underscore: " + underScore)