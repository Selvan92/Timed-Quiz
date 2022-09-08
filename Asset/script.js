//declare variables

var landingPage = document.getElementById('landing-page');
var questionsPage = document.getElementById('questions-page');
var resultPage = document.getElementById('result-page');
var highscorePage = document.getElementById('highscore-page');

var viewHighScores =document.getElementById('view-highscores');
var btnStartQuiz = document.getElementById('btnstart-quiz');
var qnFeedback = document.getElementById('qn-feedback');
var spanTimer = document.getElementById('span-timer');


var questionsPage = document.getElementById('questions-page');

var question = document.getElementById('question');

var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');

var scoreResult = document.getElementById('score-result');
let timerId;



//Open the high score page on clicking View High Scores in header

viewHighScores.addEventListener('click', function(event){
    showHighScorePage();
})

function showHighScorePage(){
    landingPage.classList.add("hide");

    questionsPage.classList.add("hide");

    resultPage.classList.add("hide");

    highscorePage.classList.remove("hide");

}


  

//TIME

//Need to get the time running while starting quiz

function startTimer() {
    timerId = setInterval(function(){
        var timeRemaining = Number(spanTimer.textContent)-1;
spanTimer.textContent=timeRemaining;

//if time ends show the result page

if(timeRemaining <=0){
    clearInterval(timerId);
    showResultPage();
   
}
    },1000)

}
btnStartQuiz.addEventListener('click',function(event){
    startTimer();
});



function showResultPage(){
    landingPage.classList.add("hide");

    questionsPage.classList.add("hide");

    resultPage.classList.remove("hide");
}




//time has to decrease when answering the wrong question






//QUESTIONS

let questions = [
  {
    question: "Commonly used data types Do Not Include?",
    choiceA: "1.Strings",
    choiceB: "2.Booleans",
    choiceC: "3.Alerts",
    choiceD: "4.Numbers",   
    correct: "C"
  },

  {
    question: "The condition in an if/else statement is enclosed with ____.",
    choiceA: "1.Quotes",
    choiceB: "2.Curly Brackets",
    choiceC: "3.Parentheses",
    choiceD: "4.Square Brackets",   
    correct: "C"
  },

  {
    question: "Arrays in JavaScript can be used to store?",
    choiceA: "1.Number and strings",
    choiceB: "2.Other Arrays",
    choiceC: "3.Booleans",
    choiceD: "4.All of the above",   
    correct: "D"
  }
];

let lastQuestion = questions.length-1;

let runningQuestion =0;

function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
choiceA.innerHTML =q.choiceA;
choiceB.innerHTML =q.choiceB;
choiceC.innerHTML =q.choiceC;
choiceD.innerHTML =q.choiceD;

}

//show the question page while start the quiz

btnStartQuiz.addEventListener('click',
        showQuestionPage);

function showQuestionPage() {

    landingPage.classList.add("hide");
    
    questionsPage.classList.remove("hide");
    
    renderQuestion();
    }
 //moving to the next question and score page while on last quesion
    function nextQuestion() { 
    if (runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
    
    }
    else {
      clearInterval(timerId);
      showResultPage();
    }
  }
choiceA.addEventListener('click',nextQuestion);
choiceB.addEventListener('click',nextQuestion);
choiceC.addEventListener('click',nextQuestion);
choiceD.addEventListener('click',nextQuestion);


//check answer
function checkAnswer(answer){

  if(answer === questions[runningQuestion].correct){
      // answer is correct
      
      
      answerIsCorrect();
  }else{
      // answer is wrong
      
      answerIsWrong();
      
  }
 
}

// answer is correct
function answerIsCorrect(){
  document.getElementById("qn-feedback").innerHTML = "Correct!";
}

// answer is Wrong
function answerIsWrong(){
  
  document.getElementById("qn-feedback").innerHTML = "Wrong!";
  
}


//initals submit
var initialsSubmit = document.getElementById('initials-submit');
initialsSubmit.addEventListener('click',initialSubmit);
   
  function initialSubmit() {
    landingPage.classList.add("hide");
    questionsPage.classList.add("hide");
    resultPage.classList.add("hide");
    highscorePage.classList.remove("hide");
  }
 



//decrease 10 sec for wrong answer

//show the score as time left

//store the input value in the initials

//show the initial input and the score in the highscore page

//store the highscore page outputs

//click go back button to load landing page


var goBack = document.getElementById('goback');
goBack.addEventListener('click',btngoBack);
   
  function btngoBack() {
    landingPage.classList.remove("hide");
    questionsPage.classList.add("hide");
    resultPage.classList.add("hide");
    highscorePage.classList.add("hide");
  }
 

//click clear high scores to clear the stored values



