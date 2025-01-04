let selectedSubject = "";
let selectedTopic = "";
let currentQuestionIndex = 0;

const subjects = {
    Math: mathTopics,
    PunjabGk: punjabGkTopics,
    Polity: polityTopics,

};

function selectSubject(subject) {
    selectedSubject = subject;
    const topics = Object.keys(subjects[subject]);
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
    <h2>Select Topic</h2>
    ${topics
            .map(
                (topic) =>
                    `<button class="btn btn-primary mx-2" onclick="selectTopic('${topic}')">${topic}</button>`
            )
            .join("")}
  `;
}

function selectTopic(topic) {
    selectedTopic = topic;
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    const questionData = subjects[selectedSubject][selectedTopic][currentQuestionIndex];
    const totalQuestions = subjects[selectedSubject][selectedTopic].length;
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <div class="question-box">
            <h2 class="question-number">Question ${currentQuestionIndex + 1} / ${totalQuestions}</h2>
            <p class="question">${questionData.question}</p>
            <button class="btn btn-success mt-3" onclick="showAnswer()">Show Answer</button>
            <div id="answer-section" class="mt-3"></div>
        </div>
        <div class="navigation-buttons mt-3">
            <button class="btn btn-secondary mx-2" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? "disabled" : ""}>Previous Question</button>
            <button class="btn btn-primary mx-2 mt-2" onclick="nextQuestion()">Next Question</button>
        </div>
    `;
}


function showAnswer() {
    const questionData = subjects[selectedSubject][selectedTopic][currentQuestionIndex];
    const answerSection = document.getElementById("answer-section");
    answerSection.innerHTML = `
        <p><strong>Answer:</strong> ${questionData.answer}</p>
        <p>${questionData.extra || ''}</p>
    `;
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    const questionArray = subjects[selectedSubject][selectedTopic];
    if (currentQuestionIndex < questionArray.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        document.getElementById("main-content").innerHTML = `
            <h2>Quiz Completed!</h2>
            <button class="btn btn-primary mt-3s" onclick="reload()">Restart</button>
        `;
    }
}

function reload() {
    location.reload();
}
