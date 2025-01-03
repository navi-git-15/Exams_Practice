let selectedSubject = "";
let selectedTopic = "";
let currentQuestionIndex = 0;

const subjects = {
    Math: mathTopics,
    PunjabGk: punjabGkTopics,
    Polity: polityTopics
    
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
    const questionData =
        subjects[selectedSubject][selectedTopic][currentQuestionIndex];
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <div class= "question-box">
            <h2 class='question-number'>Question ${currentQuestionIndex + 1}</h2>
            <p class= 'question'>${questionData.question}</p>
            <button class="btn btn-success mt-3" onclick="showAnswer()">Show Answer</button>
            <div id="answer-section" class="mt-3"></div>
        </div>
    
  `;
}

function showAnswer() {
    const questionData =
        subjects[selectedSubject][selectedTopic][currentQuestionIndex];
    const answerSection = document.getElementById("answer-section");
    answerSection.innerHTML = `
    <p><strong>Answer:</strong> ${questionData.answer}</p>
    <p>${questionData.extra || ''}</p>
    <button class="btn btn-primary mt-3" onclick="nextQuestion()">Next Question</button>
  `;
}

function nextQuestion() {
    const questionArray = subjects[selectedSubject][selectedTopic];
    if (currentQuestionIndex < questionArray.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        document.getElementById("main-content").innerHTML = `
      <h2>Quiz Completed!</h2>
      <button class="btn btn-primary mt-3" onclick="reload()">Restart</button>
    `;
    }
}

function reload() {
    location.reload();
}
