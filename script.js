document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.title;

  if (pageTitle === "Quiz Website") {
    // Code for index.html
    const subjectSelect = document.getElementById("subject");
    const topicSelect = document.getElementById("topic");
    const startQuizButton = document.getElementById("startQuiz");

    if (!subjectSelect || !topicSelect || !startQuizButton) {
      console.error("Required elements are missing on index.html.");
      return;
    }

    const subjects = {
      maths: "subjects/maths.js",
      punjab_gk: "subjects/punjab_gk.js",
      polity: "subjects/polity.js",
    };

    // Populate subjects dropdown
    Object.keys(subjects).forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
      subjectSelect.appendChild(option);
    });

    // Remove dynamically loaded scripts
    function removeExistingScripts() {
      document
        .querySelectorAll("script[data-dynamic]")
        .forEach((script) => script.remove());
    }

    // Load subject file and populate topics
    subjectSelect.addEventListener("change", () => {
      removeExistingScripts(); // Clean up previous scripts
      topicSelect.innerHTML = '<option value="">Select Topic</option>';
      topicSelect.disabled = true;
      startQuizButton.disabled = true;

      if (subjectSelect.value) {
        const script = document.createElement("script");
        script.src = subjects[subjectSelect.value];
        script.setAttribute("data-dynamic", "true"); // Mark as dynamically loaded
        script.onload = () => {
          if (typeof topics === "undefined" || !topics[subjectSelect.value]) {
            console.error("Topics are not defined in the subject file.");
            return;
          }
          loadTopics(subjectSelect.value);
        };
        script.onerror = () =>
          console.error(`Failed to load script for ${subjectSelect.value}`);
        document.body.appendChild(script);
      }
    });

    // Load topics for the selected subject
    function loadTopics(subject) {
      topics[subject].forEach((topic) => {
        const option = document.createElement("option");
        option.value = topic;
        option.textContent = topic.charAt(0).toUpperCase() + topic.slice(1);
        topicSelect.appendChild(option);
      });
      topicSelect.disabled = false;
    }

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
  } else if (pageTitle === "Quiz Page") {
    // Code for quiz.html
    const quizTitle = document.getElementById("quizTitle");
    const questionText = document.getElementById("questionText");
    const optionsList = document.getElementById("optionsList");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const submitButton = document.getElementById("submitButton");

    if (
      !quizTitle ||
      !questionText ||
      !optionsList ||
      !prevButton ||
      !nextButton ||
      !submitButton
    ) {
      console.error("Required elements are missing on quiz.html.");
      return;
    }

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
      if (typeof quizData === "undefined") {
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

      quizTitle.textContent = `${
        subject.charAt(0).toUpperCase() + subject.slice(1)
      } - ${topic.charAt(0).toUpperCase() + topic.slice(1)}`;

      const totalQuestions = quizData.length; // Get the total number of questions

      const loadQuestion = (index) => {
        const { question, options, answer } = quizData[index];
        questionText.textContent = question;
        optionsList.innerHTML = "";

        // Display current question number (e.g., Question 1/50)
        const questionNumberElement = document.getElementById("questionNumber");
        questionNumberElement.textContent = `Question ${
          index + 1
        }/${totalQuestions}`;

        let selectedAnswer = null;

        // Shuffle options
        const shuffledOptions = shuffleArray(options);

        shuffledOptions.forEach((option) => {
          const listItem = document.createElement("li");
          listItem.className = "list-group-item";
          listItem.textContent = option;
          listItem.addEventListener("click", () => {
            optionsList
              .querySelectorAll(".list-group-item")
              .forEach((item) => item.classList.remove("active"));
            listItem.classList.add("active");
            selectedAnswer = option;
          });
          optionsList.appendChild(listItem);
        });

        prevButton.disabled = index === 0;
        nextButton.textContent =
          index === quizData.length - 1 ? "Submit" : "Next";
        submitButton.disabled = false; // Enable the submit button for the question

        submitButton.onclick = () => {
          if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
          }

          if (selectedAnswer === answer) {
            // Correct answer
            showFeedback(selectedAnswer, true);
          } else {
            // Incorrect answer
            showFeedback(selectedAnswer, false, answer);
          }

          submitButton.disabled = true; // Disable submit button after submission
        };
      };

      nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < quizData.length - 1) {
          currentQuestionIndex++;
          loadQuestion(currentQuestionIndex);
        } else {
          alert("Quiz submitted!");
          window.location.href = "index.html";
        }
      });

      prevButton.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          loadQuestion(currentQuestionIndex);
        }
      });

      loadQuestion(currentQuestionIndex);

      // Function to show feedback
      function showFeedback(selected, isCorrect, correctAnswer) {
        const allOptions = optionsList.querySelectorAll(".list-group-item");

        allOptions.forEach((option) => {
          if (option.textContent === selected) {
            option.innerHTML += isCorrect ? " ✔️" : " ❌"; // Add tick or cross
          }

          if (option.textContent === correctAnswer && !isCorrect) {
            option.innerHTML += " ✔️"; // Add green tick to correct answer if selected answer is wrong
          }
        });

        // Play sound based on correctness
        const audio = new Audio(
          "assets/sounds/" + (isCorrect ? "correct.mp3" : "incorrect.mp3")
        );
        audio.play();
      }

      // Function to shuffle array
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
      }
    }
  }
});
