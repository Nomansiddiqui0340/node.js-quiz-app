var readlineSync = require("readline-sync");

var score = 0;

// array of objects
var questions = [{
  question: "Where do They live? ",
  answer: "Jungle"
}, {
  question: "They are king of jungle or not? ",
  answer: "Yes"
}];

function welcome() {
  var userName = readlineSync.question("What's your Name? ");

  console.log("Welcome " + userName + " DO YOU KNOW LOIN?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

}


welcome();
game();
showScores();


