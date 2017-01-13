/*
- 3 or more questions
- 2 dimensional array - question and answer
- how many got right and which ones
- how many got wrong and which ones
- overall score
- use prompt to ask questions
*/

//Quiz questions and their answers
var quiz = [
  [ 'Is a mallard a duck?', 'YES'],
  [ 'What day comes after Wednesday?', 'THURSDAY'],
  [ 'What coding language is named after a gem?', 'RUBY' ],
  [ 'What coding language was used to make this quiz?', 'JAVASCRIPT' ]
];

var score = 0;
var correctAnswer = [];
var wrongAnswer = [];

//function to print out things
function print(message) {
  document.write(message);
}

//Asking the questions
for (var i = 0; i < quiz.length; i += 1) {
  var question = prompt(quiz[i][0]);
  //turns answers into uppercase so that it doesn't matter how they were entered in when asked
  question = question.toUpperCase();
  //if answered correctly, increase score and store answer in correctAnswer array
  if ( question === quiz[i][1] ) {
    score += 1;
    correctAnswer.push( quiz[i][0] );
    //if answered incorrectly, store answer in wrongAnswer array
  } else {
    wrongAnswer.push( quiz[i][0] );
  }
}

//used to print out questions in an array
function printQuestions( questionArray ) {
  print("<ul>");
  for ( var i = 0; i < questionArray.length; i += 1 ) {
    var printedQuestion = print("<li>");
    printedQuestion += print( questionArray[i] );
    printedQuestion += print("</li>");
  }
  print("</ul>");
}

print("<p>You got " + score + " correct answers out of a possible " + quiz.length + ".</p>");

print("<h2>Answered correctly:</h2>")
//prints out correctly answered questions
printQuestions(correctAnswer);


print("<h2>Answered incorrectly:</h2>");
//prints out incorrectly answered questions
printQuestions(wrongAnswer);








