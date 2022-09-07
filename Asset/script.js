//declare variables

var landingPage = document.getElementById('landing-page');
var questionsPage = document.getElementById('questions-page');
var resultPage = document.getElementById('result-page');
var highscorePage = document.getElementById('highscore-page');

var btnStartQuiz = document.getElementById('btnstart-quiz');
var qnFeedback = document.getElementById('qn-feedback');
var spanTimer = document.getElementById('span-timer');

function showQuestionPage() {

landingPage.classList.add("hide");

questionsPage.classList.remove("hide");

}

btnStartQuiz.addEventListener('click',function(event){
    showQuestionPage();
});


//TIME


//need to get the time running while starting quiz

function startTimer() {
    timerId = setInterval(function(){
        var timeRemaining = Number(spanTimer.textContent)-1
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

//time has to stop while answeting the last question show the result page




//QUESTIONS

//show the question page while start the quiz

//set array for the question sets

//set the true or false for the options

//loop the question set one by one

//show the feed back for the answer

//next button to move on to the next question

//INITIAL PAGE

//Add initials and submit

//FINAL SCORE PAGE
// show the final score with the initials

//click go back button to reload form starting



