let selectedSubject = "";
let selectedTopic = "";
let currentQuestionIndex = 0;

// Load starred questions from localStorage or initialize
const starredQuestions = JSON.parse(localStorage.getItem("starredQuestions")) || {
    Math: [],
    PunjabGk: [],
    Polity: [],
};

// Save starred questions to localStorage
function saveStarredQuestions() {
    localStorage.setItem("starredQuestions", JSON.stringify(starredQuestions));
}

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
        <button class="btn btn-warning mx-2 mt-2" onclick="viewStarred()">Starred</button>
    `;
}

function selectTopic(topic) {
    selectedTopic = topic;
    currentQuestionIndex = 0;
    showQuestion();
}

function viewStarred() {
    selectedTopic = "Starred";
    currentQuestionIndex = 0;
    showStarredQuestions();
}

function showQuestion() {
    const questionData = selectedTopic === "Starred"
        ? starredQuestions[selectedSubject][currentQuestionIndex]
        : subjects[selectedSubject][selectedTopic][currentQuestionIndex];

    const totalQuestions = selectedTopic === "Starred"
        ? starredQuestions[selectedSubject].length
        : subjects[selectedSubject][selectedTopic].length;

    const isStarred = starredQuestions[selectedSubject].some(q => q.question === questionData.question);
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <div class="question-box">
            <h2 class="question-number">Question ${currentQuestionIndex + 1} / ${totalQuestions}</h2>
            <p class="question">${questionData.question}</p>
            <button class="btn btn-success mt-3" onclick="showAnswer()">Show Answer</button>
            <button class="btn mt-3" onclick="${isStarred ? "unstarQuestion()" : "starQuestion()"}()">
                <span class="${isStarred ? "text-warning" : "text-muted"}" style="font-size: 24px;">${isStarred ? "★" : "☆"}</span>
            </button>
            <div id="answer-section" class="mt-3"></div>
        </div>
        <div class="navigation-buttons mt-3">
            <button class="btn btn-secondary mx-2" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? "disabled" : ""}>Previous Question</button>
            <button class="btn btn-primary mx-2 mt-2" onclick="nextQuestion()">Next Question</button>
        </div>
    `;
}

function showStarredQuestions() {
    const starred = starredQuestions[selectedSubject];
    if (starred.length === 0) {
        document.getElementById("main-content").innerHTML = `
            <h2>No Starred Questions</h2>
            <button class="btn btn-primary mt-3" onclick="selectSubject('${selectedSubject}')">Back to Topics</button>
        `;
        return;
    }

    const questionData = starred[currentQuestionIndex];
    const totalQuestions = starred.length;
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <div class="question-box">
            <h2 class="question-number">Question ${currentQuestionIndex + 1} / ${totalQuestions}</h2>
            <p class="question">${questionData.question}</p>
            <button class="btn btn-success mt-3" onclick="showAnswer()">Show Answer</button>
            <button class="btn mt-3" onclick="unstarQuestion()">
                <span class="text-warning" style="font-size: 24px;">★</span>
            </button>
            <div id="answer-section" class="mt-3"></div>
        </div>
        <div class="navigation-buttons mt-3">
            <button class="btn btn-secondary mx-2" onclick="previousStarred()" ${currentQuestionIndex === 0 ? "disabled" : ""}>Previous Question</button>
            <button class="btn btn-primary mx-2 mt-2" onclick="nextStarred()">Next Question</button>
        </div>
    `;
}

function showAnswer() {
    const questionData =
        selectedTopic === "Starred"
            ? starredQuestions[selectedSubject][currentQuestionIndex]
            : subjects[selectedSubject][selectedTopic][currentQuestionIndex];
    const answerSection = document.getElementById("answer-section");
    answerSection.innerHTML = `
        <p><strong>Answer:</strong> ${questionData.answer}</p>
        <p>${questionData.extra || ""}</p>
    `;
}

function starQuestion() {
    const questionData = subjects[selectedSubject][selectedTopic][currentQuestionIndex];
    if (!starredQuestions[selectedSubject].some(q => q.question === questionData.question)) {
        starredQuestions[selectedSubject].push(questionData);
        saveStarredQuestions(); // Save to localStorage
        alert("Question Starred!");
    }
    showQuestion(); // Refresh to update button state
}

function unstarQuestion() {
    const questionData =
        selectedTopic === "Starred"
            ? starredQuestions[selectedSubject][currentQuestionIndex]
            : subjects[selectedSubject][selectedTopic][currentQuestionIndex];

    starredQuestions[selectedSubject] = starredQuestions[selectedSubject].filter(
        q => q.question !== questionData.question
    );

    saveStarredQuestions(); // Save to localStorage
    alert("Question Unstarred!");

    if (selectedTopic === "Starred") {
        if (currentQuestionIndex >= starredQuestions[selectedSubject].length) {
            currentQuestionIndex = Math.max(0, currentQuestionIndex - 1);
        }
        showStarredQuestions();
    } else {
        showQuestion(); // Refresh regular view
    }
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
            <button class="btn btn-primary mt-3" onclick="reload()">Restart</button>
        `;
    }
}

function previousStarred() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showStarredQuestions();
    }
}

function nextStarred() {
    const starred = starredQuestions[selectedSubject];
    if (currentQuestionIndex < starred.length - 1) {
        currentQuestionIndex++;
        showStarredQuestions();
    } else {
        document.getElementById("main-content").innerHTML = `
            <h2>All Starred Questions Viewed!</h2>
            <button class="btn btn-primary mt-3" onclick="viewStarred()">Back to Starred Questions</button>
        `;
    }
}

function reload() {
    location.reload();
}
