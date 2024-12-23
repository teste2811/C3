
const questions = [
    {
        question: "A data do nosso primeiro encontro?",
        options: ["17/11", "16/11", "15/11", "14/11"],
        correct: 0
    },
    {
        question: "Quem o joão pedro mendes ama?",
        options: ["Caroline", "Carolina", "Karolline", "Carolline"],
        correct: 3
    },
    {
        question: "Qual o nome da melhor sogra do mundo",
        options: ["Kátia", "Catia", "Kaita", "Catio"],
        correct: 0
    },
    {
        question: "Qual o nome do melhor sogro do mundo",
        options: ["Jerson", "Gerssssssson", "Gerson", "Gersom"],
        correct: 2
    },
    {
        question: "Qual foi a comida do nosso primeiro encontro?",
        options: ["Sushi", "Carneiro cozido", "Salada", "Açaí"],
        correct: 0
    },
    {
        question: "O número de encontros que a gente já teve é?",
        options: ["10", "Nunca saímos", "1", "99"],
        correct: 0
    },
    {
        question: "Complete a frase: O joão pedro te?:",
        options: ["Ama", "Adora", "Admira", "Todas as opções acima"],
        correct: 3
    },
    {
        question: "Qual foi o total de beijos que a gente já deu?",
        options: ["Nunca nos beijamos", "200+", "1", "1,5"],
        correct: 1
    },
    {
        question: "O total de presentes que eu já te dei",
        options: ["3487174", "10+", "Nunca te dei porra nenhuma", "2,333..."],
        correct: 1
    },
    {
        question: "Qual a forma certa de se despedir por mensagem?",
        options: ["Tchau", "Boa noite", "Boa noite viu, dorme bem, até amanhã, beijãoo🫶🫶", "bjs"],
        correct: 2
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOptionIndex === currentQuestion.correct) {
        score++;
    }
    nextQuestion()
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function telaInicial(){
    window.location.href = "index.html"
}

function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h1>Parabénssss🫶🫶</h1>
                               <p>Sua pontuação final foi: ${score}/10</p>
                               <button id= "next-button" onclick="telaInicial()">Tela inicial</button>`;
}

loadQuestion();
