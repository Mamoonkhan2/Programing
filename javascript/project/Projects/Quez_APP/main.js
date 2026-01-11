
// Quiz Data (already in your HTML, but we'll use it here)
const quizData = [
    {
        question: "Which one is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Who is known as the father of computers?",
        answers: [
            { text: "Alan Turing", correct: false },
            { text: "Charles Babbage", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    }
];

// DOM Elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const currentQ = document.getElementById('current');
const totalQ = document.getElementById('total');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart');

let currentquestionindex = 0;
let score = 0;
function startQuiz() {
    currentquestionindex = 0;
    score = 0;
    nextBtn.innerHTML = "next"
    loadQuestion()
}
function loadQuestion(params) {
    resetState()
    let currentQuestion = quizData[currentquestionindex];
    let questionNo = currentquestionindex + 1;
    currentQ.innerHTML = `${questionNo}`
    totalQ.innerHTML = `${quizData.length}`
    questionEl.innerHTML = `${currentQuestion.question}`

    currentQuestion.answers.forEach(answers=>{
        const button = document.createElement('button');
        button.innerHTML = answers.text;
        button.classList.add('option')
        button.style.color = 'black'
        optionsEl.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        
        button.addEventListener('click',(e)=>{
            const selectedbtn = e.target;
            const isCorect = selectedbtn.dataset.correct === 'true';
            if (!isCorect) {
                selectedbtn.classList.add('wrong')
            }
            else{
                selectedbtn.classList.add('correct')
                score++;
            }
            Array.from(optionsEl.children).forEach(button =>{
                if (button.dataset.correct === "true") {
                    button.classList.add("correct")
                }
                button.disabled = true;
            })
            nextBtn.style.display = 'block';
        });

    })

}
function resetState() {
    nextBtn.style.display = 'none';
    while (optionsEl.firstChild) {
        optionsEl.removeChild(optionsEl.firstChild)
    }
}
nextBtn.addEventListener('click',()=>{
    if (currentquestionindex<quizData.length) {
        currentquestionindex++;
        if(currentquestionindex<quizData.length){
            loadQuestion()
        }
        else{
            questionEl.style.display = 'none';
            optionsEl.style.display = 'none';
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none'
            resultEl.style.display = 'block';
            scoreEl.innerHTML = score;
            restartBtn.addEventListener('click',()=>{
            questionEl.style.display = 'block';
            optionsEl.style.display = 'block';
            resultEl.style.display = 'none'
                startQuiz()})
        }
    }
    else{
        startQuiz()
    }
})
startQuiz()