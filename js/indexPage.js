import { loadTopics } from './domUtils.js';
import { removeExistingScripts } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.title;

  if (pageTitle === "Quiz Website") {
    // Code for index.html
    const subjectSelect = document.getElementById("subject");
    const topicSelect = document.getElementById("topic");
    const startQuizButton = document.getElementById("startQuiz");

    const subjects = {
      maths: "subjects/maths.js",
      punjab_gk: "subjects/punjab_gk.js",
      polity: "subjects/polity.js",
    };

    // Populate subjects dropdown
    Object.keys(subjects).forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent =
        subject.charAt(0).toUpperCase() + subject.slice(1);
      subjectSelect.appendChild(option);
    });

    subjectSelect.addEventListener("change", () => {
      removeExistingScripts();
      topicSelect.innerHTML = '<option value="">Select Topic</option>';
      topicSelect.disabled = true;
      startQuizButton.disabled = true;

      if (subjectSelect.value) {
        const script = document.createElement("script");
        script.src = subjects[subjectSelect.value];
        script.setAttribute("data-dynamic", "true");
        script.onload = () => {
          loadTopics(subjectSelect.value, topicSelect);
        };
        script.onerror = () =>
          console.error(`Failed to load script for ${subjectSelect.value}`);
        document.body.appendChild(script);
      }
    });

    // Enable Start Quiz button when a topic is selected
    topicSelect.addEventListener("change", () => {
      startQuizButton.disabled = !topicSelect.value;
    });

    // Start quiz on button click
    startQuizButton.addEventListener("click", () => {
      const subject = subjectSelect.value;
      const topic = topicSelect.value;
      sessionStorage.setItem("quizSubject", subject);
      sessionStorage.setItem("quizTopic", topic);
      window.location.href = "quiz.html";
    });
  }
});
