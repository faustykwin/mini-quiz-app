// Fruit quiz questions
const questions = [
    {
        question: "Which fruit is yellow and curved?",
        options: ["Banana", "Apple", "Grape", "Papaya"],
        answer: "Banana"
    },
    {
        question: "Which fruit is red and often used to make juice?",
        options: ["Orange", "Watermelon", "Apple", "Guava"],
        answer: "Apple"
    },
    {
        question: "Which fruit has a crown on top?",
        options: ["Pineapple", "Mango", "Pear", "Lemon"],
        answer: "Pineapple"
    }
];

const startBtn = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;
let score = 0; // <-- keep track of correct answers

// Start quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    score = 0; // reset score
    startBtn.classList.add("hide");
    quizContainer.classList.remove("hide");
    currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);
}

// Show question
function showQuestion(index) {
    const question = questions[index];
    questionText.innerText = question.question;

    // Clear previous buttons
    answerButtons.innerHTML = "";

    // Create buttons for options
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(option, question.answer));
        answerButtons.appendChild(button);
    });
}

// Handle answer click
function selectAnswer(selected, correct) {
    if (selected === correct) {
        alert("✅ Correct!");
        score++; // increase score for correct answer
    } else {
        alert(`❌ Wrong! The correct answer is: ${correct}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert(`🎉 Quiz finished! Your score is: ${score} / ${questions.length}`);
        quizContainer.classList.add("hide");
        startBtn.classList.remove("hide");
        startBtn.innerText = "Restart Quiz";
    }
}
