import { loadQuestion, showFeedback } from './quizUtils.js';
import { getQuizData } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.title;

  if (pageTitle === "Quiz Page") {
    // Code for quiz.html
    const quizTitle = document.getElementById("quizTitle");
    const questionText = document.getElementById("questionText");
    const optionsList = document.getElementById("optionsList");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const submitButton = document.getElementById("submitButton");
    const starredSwitch = document.getElementById("starredSwitch");

    const subject = sessionStorage.getItem("quizSubject");
    const topic = sessionStorage.getItem("quizTopic");

    if (!subject || !topic) {
      alert("No quiz data found. Redirecting to home page.");
      window.location.href = "index.html";
      return;
    }

    const script = document.createElement("script");
    script.src = `data/${subject}/${topic}.js`;
    script.onload = () => {
      window.quizData = getQuizData();
      if (!quizData) {
        console.error("Quiz data not found for the selected topic.");
        return;
      }
      startQuiz(quizData, subject, topic);
    };
    script.onerror = () => {
      console.error(`Failed to load quiz data for topic: ${topic}`);
    };
    document.body.appendChild(script);

    function startQuiz(quizData, subject, topic) {
      let currentQuestionIndex = 0;

      const starredQuestionsKey = `${subject}_${topic}_starredQuestions`;
      let starredQuestions =
        JSON.parse(localStorage.getItem(starredQuestionsKey)) || [];

      const isQuestionStarred = (index) => starredQuestions.includes(index);
      const toggleStarredQuestion = (index, starIcon) => {
        if (isQuestionStarred(index)) {
          starredQuestions = starredQuestions.filter((i) => i !== index);
          starIcon.innerHTML = "☆";
        } else {
          starredQuestions.push(index);
          starIcon.innerHTML = "★";
        }
        localStorage.setItem(
          starredQuestionsKey,
          JSON.stringify(starredQuestions)
        );
      };

      loadQuestion(currentQuestionIndex, quizData, optionsList, submitButton, prevButton, nextButton, starredSwitch, starredQuestions, isQuestionStarred, toggleStarredQuestion);
    }
  }
});
