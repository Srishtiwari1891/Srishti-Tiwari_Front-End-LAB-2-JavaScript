function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function iterate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        iterate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("Javascript is an _________ language.", ["Object-oriented", "Object-based","Procedural", "None of the above"], "Object-oriented"),
    new Question("Which of the following methods is used to access HTML elements using Javascript?", ["getElementbyId()", "getElementbyName()", "Both A and B", "None of the above"], "Both A and B"),
    new Question("How can a datatype be declared to be a constant type?", ["const", "var","let", "constant"], "const"),
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
iterate();// Show selection for ch01
    ch01.addEventListener("click", () => {
        ch01.style.backgroundColor = "lightgoldenrodyellow";
        ch02.style.backgroundColor = "lightskyblue";
        ch03.style.backgroundColor = "lightskyblue";
        ch04.style.backgroundColor = "lightskyblue";
        selected = ch01.value;
    })
  
    // Show selection for ch02
    ch02.addEventListener("click", () => {
        ch01.style.backgroundColor = "lightskyblue";
        ch02.style.backgroundColor = "lightgoldenrodyellow";
        ch03.style.backgroundColor = "lightskyblue";
        ch04.style.backgroundColor = "lightskyblue";
        selected = ch02.value;
    })
  
    // Show selection for ch03
    ch03.addEventListener("click", () => {
        ch01.style.backgroundColor = "lightskyblue";
        ch02.style.backgroundColor = "lightskyblue";
        ch03.style.backgroundColor = "lightgoldenrodyellow";
        ch04.style.backgroundColor = "lightskyblue";
        selected = ch03.value;
    })
  
    // Show selection for ch04
    ch04.addEventListener("click", () => {
        ch01.style.backgroundColor = "lightskyblue";
        ch02.style.backgroundColor = "lightskyblue";
        ch03.style.backgroundColor = "lightskyblue";
        ch04.style.backgroundColor = "lightgoldenrodyellow";
        selected = ch04.value;
    })