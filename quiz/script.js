const  quiz = [
    {
        question: "what is the largest animal?",
        answer: [{ text: "Blue Whale", correct: "true" }, { text: "Elephant", correct: "false" },
        { text: "Tiger", correct: "false" }, { text: "Deer", correct: "false" }]

    },
    {
        question: "what is the smallest planet in the universe?",
        answer: [{ text: "Pluto", correct: "true" }, { text: "Earth", correct: "false" },
        { text: "Jupiter", correct: "false" }, { text: "Mars", correct: "false" }]
    },
    {
        question: "What is the best language for competitive programming?",
        answer: [{ text: "C++", correct: "true" }, { text: "JavaScript", correct: "false" },
        { text: "Java", correct: "false" }, { text: "Python", correct: "false" }]
    }
];
let qIndex = 0;
let score = 0;
let totalQuestions = quiz.length;
let questionElement = document.getElementById("question");
let ansBtns = document.getElementById("answer-btns");
let next = document.querySelector("#next");
console.log("sdfg");
showQuestion();
function showQuestion() {
    resetQuestion();
    questionElement.innerText = `Question-${qIndex + 1}:${quiz[qIndex].question}`;
    quiz[qIndex].answer.forEach(ans => {
        const btn = document.createElement("button");
        btn.classList.add("ans");
        btn.innerText = `Answer:${ans.text}`;
        ansBtns.appendChild(btn);
        if (ans.correct) {
            btn.dataset.correct = ans.correct;
        }
        btn.addEventListener("click", checkAnswer);
    })
    
}
function checkAnswer(e) {
    let btn = e.target;
    console.log(btn.innerText);
    const isCorrect = btn.dataset.correct === "true";
    if (isCorrect) {
        btn.classList.add("right");
        score++;
    } else {
        btn.classList.add("wrong");
    }
    Array.from(ansBtns.children).forEach(button => {
        if (button.dataset.correct) {
            this.classList.add("right");
        }
        button.disabled = true;
    });
    next.style.display = "block";
}
next.addEventListener("click", () => {
    if (qIndex+1 < totalQuestions) {
        qIndex++;
        showQuestion();
    }
    else {
        resetQuestion();
        questionElement.innerText = `Your Score is ${score}`;
    }
})
function resetQuestion() {
    next.style.display = "none";
    while (ansBtns.firstChild) {
        ansBtns.firstChild.remove();
    }
}


