// game variables 
var words = ["Willie", "garth", "toby", "alabama", "sugarland"];
var hint = ["He is a highway man", "He has Friends in low places", "toby", "Sweet Home", "Bigger"];
var song = [];
var losses = 0;
var wins = 0;
var guessesLeft = 12;
var gussedLetters = [];
var userGuess = " ";
var underScore = [];
var correctLetter =[];
var wrongLetter = [];
var getRan = Math.floor(Math.random() * words.length);
var getWord = words[getRan];

console.log("get Word: " + getWord);

 function newWord() {
   
};
// create underscores for dom dislpay
var getUnder = function () {
  for (i = 0; i < getWord.length; i++) {
    underScore.push('__')
  };
  return underScore;
};
 getUnder();

// clear array function
function empty() {
  gussedLetters = [];
};

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
    // call clear out gueese letters array
    empty()
    // call new word
    newWord()
  };
  
  // push user guess into proper array
  if (getWord.indexOf(userGuess) > -1){
    correctLetter.push(userGuess);
    for (var i = 0; i < getWord.length; i++) {
      if(getWord[i] === userGuess) {
        underScore[i] = userGuess;  
      };
    };
  } else {
      wrongLetter.push(userGuess)
      // decrease user gueses left
      guessesLeft--
  };
  
  // if user wins game
  if (correctLetter.length === getWord.length) {
    alert('winner')
    // increment wins 
    wins++;
    // reset guesses left
    guessesLeft = 12;
    winGame();
   // empty guessed letters array
    empty();

    newWord();
  };

// ======================= html body =============================================================
  var html = "<p>Guess The Artist Below</p>" +
    "<p>Hint: " + hint[getRan] + "</p>" + 
    "<p>Word to guess: " + underScore + "</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Loses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Letters Gussed: " + gussedLetters + "</p>";

  document.querySelector("#word").innerHTML = html;


// =============  puts iframe in dom ========================
// display music video when user wins  

 function winGame () {

  var iframe = document.createElement('iframe');

  document.body.appendChild(iframe);

  iframe.src = 'javascript:void((function(){var script = document.createElement(\'script\');' +
    'script.innerHTML = "(function() {' +
    'document.open();document.domain=\'' + document.domain +
    '\';document.close();})();";' +
    'document.write("<head>" + script.outerHTML + "</head><body></body>");})())';
  
  iframe.contentWindow.document.write('https://youtu.be/ldQrapQ4d0Y');
};


 

  // ============================ logs to screen for testing ================================== 

  //console.log(randNum);
  //console.log(hint[randNum]);
  // console.log("Guessed letters: " + gussedLetters);
  // console.log("Correect letter: " + correctLetter);
  // console.log("Wrong letter: " + wrongLetter);
  //console.log(getWord);
  // console.log("User Guess: " + userGuess);
  // console.log("guesses Left: " + guessesLeft + " Wins: " + wins + " Losses: " + losses)
}

// ============================  problems / issues =================================

//  reset game after win or loose
//  bugs  does not alert or show win for words with multipule same letters
// iframe displays for every key press
// play song after win 
// can guess letter more than once
// remove commas from underscores
