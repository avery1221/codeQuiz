var questionContainerEl= document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtonELement = document.getElementById ('answer-buttons')
var nextButton =document.getElementById('next-button')
var answer = document.getElementById('answer')
var btnAnswer = document.getElementById('btn-answer')
var scoreButton = document.getElementById('score-button')
let shuffledQuestion, currentQuestion
var startButton = document.getElementById('start-button')
var submitButton = document.getElementById('submit-button')
var container = document.getElementById('container')
var myText = document.getElementById('myText')
var final = document.getElementById('final')
var field = document.getElementById('field')
var score = 0
var quizLength = 5
var timeLeft = 75
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})
function startQuiz (){
    startButton.classList.add('hide')
    shuffledQuestion = []
    while (shuffledQuestion.length < quizLength) {
      shuffledQuestion.push(randomQuestion())
    }
    currentQuestion = 0
    var downloadTimer = setInterval(function(){
      timeLeft--;
      document.getElementById("display").textContent = timeLeft;
      if(timeLeft < 1)
          selectAnswer();
      },1000);
    timeOut()
    questionContainerEl.classList.remove('hide')
    nextButton.classList.remove('hide')
    final.classList.add('hide')
    field.classList.remove('hide')
    nextQuestion()
}
function randomQuestion() {
  var randNumb = Math.floor(Math.random() * Math.floor(5))
  if (shuffledQuestion.includes(randNumb)) {
    return randomQuestion()
  }
  else { 
    return randNumb
  }
}
function nextQuestion (){
    resetState()
    showQuestion(questions[shuffledQuestion[currentQuestion]])
    if (quizLength === currentQuestion) {
      alert("score")
    } else {
        nextButton.classList.add('hide')
    }
}
function showQuestion(question) {
    questionEl.innerText = question.question
    Object.keys(question.answers).forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer
      button.classList.add('btn-answer')
      button.addEventListener('click', ()=>selectAnswer(question.answers[`${answer}`]))
      answerButtonELement.appendChild(button)
    })
}
function resetState(){
    while (answerButtonELement.firstChild){
        answerButtonELement.removeChild(answerButtonELement.firstChild)
}}
function selectAnswer(e){
  if (e) {
    score ++
  }
  currentQuestion ++
  if (currentQuestion === quizLength) {
    var finalScore = `${score}`
    lsOutput = document.getElementById('lsOutput')
    submitButton.onclick = function() {
    const initial = myText.value;
    localStorage.setItem(myText.value , initial);
  for(let i=0; i < localStorage.length; i++) {
    const initial = localStorage.key(i);
    lsOutput.innerHTML += `${initial}: ${score}<br/>`;
  }}
    document.getElementById("score").innerHTML = finalScore
  } else if(timeLeft > 1){
    (nextQuestion())}
  if (currentQuestion === 5) {
    container.classList.add('hide')
    final.classList.remove('hide')      
}}
function timeOut(){
  setTimeout(function(){ alert("Your Time has ended!!"); 
  container.classList.add('hide');
}, 75000);
}
var questions = [{
    question: 'Commonly used data types DO NOT include:',
    answers: {
      strings: false,
      boolean: false,
      alert: true,
      numbers: false,
    }},
      {
    question: 'The condition in an if / else statement is enclosed within ____.',
    answers: {
      quotes: false,
      curlybrackets: false,
      parentheses: true,
      squarebrackets: false
    }},
      {
    question: 'Which is a file you always want to name the same?',
    answers: {
      index: true ,
      css: false ,
      readme: false ,
      HTML: false
    }},
      {
    question: 'Which of the following a is not a high-level in Javascript ?',
    answers: {
      class: true ,
      HTML: false ,
      CSS: false ,
      Javascript: false
    }},
      {
    question: 'Which are a proper click listen? ',
    answers: {
      addEventListener: true ,
      addClickListener: false ,
      clickAddListener: false ,
      eventAddListener: false
    }}]