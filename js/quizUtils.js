// Function to shuffle an array (Fisher-Yates shuffle algorithm)
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Function to show feedback after an answer is selected
export function showFeedback(selected, isCorrect, correctAnswer, optionsList) {
  const allOptions = optionsList.querySelectorAll(".list-group-item");

  allOptions.forEach((option) => {
    if (option.textContent === selected) {
      option.innerHTML += isCorrect ? " ✔️" : " ❌"; // Add tick or cross
    }

    if (option.textContent === correctAnswer && !isCorrect) {
      option.innerHTML += " ✔️"; // Add green tick to correct answer if selected answer is wrong
    }
  });

  const audio = new Audio(
    "assets/sounds/" + (isCorrect ? "correct.mp3" : "incorrect.mp3")
  );
  audio.play();
}

// Function to load a question and display options
export function loadQuestion(index, quizData, optionsList, submitButton, prevButton, nextButton, starredSwitch, starredQuestions, isQuestionStarred, toggleStarredQuestion) {
  if (index < 0 || index >= quizData.length) {
    console.error(`Invalid index: ${index}`);
    return;
  }

  const { question, options, answer } = quizData[index];

  questionText.textContent = question;
  optionsList.innerHTML = "";

  const questionNumberElement = document.getElementById("questionNumber");
  questionNumberElement.textContent = `Question ${index + 1}/${quizData.length}`;

  // Add Star Icon for Starring Questions
  const starIcon = document.createElement("span");
  starIcon.className = "star-icon";
  starIcon.innerHTML = isQuestionStarred(index) ? "★" : "☆";
  starIcon.style.cursor = "pointer";
  starIcon.addEventListener("click", () => toggleStarredQuestion(index, starIcon));
  questionNumberElement.appendChild(starIcon);

  // Shuffle and Display Options
  const shuffledOptions = shuffleArray(options); // Now shuffleArray is defined
  let selectedAnswer = null;

  shuffledOptions.forEach((option) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = option;

    listItem.addEventListener("click", () => {
      optionsList.querySelectorAll(".list-group-item").forEach((item) => item.classList.remove("active"));
      listItem.classList.add("active");
      selectedAnswer = option; // Capture selected answer

      submitButton.disabled = false;
    });

    optionsList.appendChild(listItem);
  });

  submitButton.disabled = true;

  submitButton.onclick = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    if (selectedAnswer === answer) {
      showFeedback(selectedAnswer, true, answer, optionsList);
    } else {
      showFeedback(selectedAnswer, false, answer, optionsList);
    }

    submitButton.disabled = true;
  };

  prevButton.disabled = index === 0;

  nextButton.onclick = () => {
    if (index < quizData.length - 1) {
      loadQuestion(index + 1, quizData, optionsList, submitButton, prevButton, nextButton, starredSwitch, starredQuestions, isQuestionStarred, toggleStarredQuestion);
    } else {
      alert("Quiz submitted!");
      window.location.href = "index.html";
    }
  };

  prevButton.onclick = () => {
    if (index > 0) {
      loadQuestion(index - 1, quizData, optionsList, submitButton, prevButton, nextButton, starredSwitch, starredQuestions, isQuestionStarred, toggleStarredQuestion);
    }
  };

  starredSwitch.addEventListener("change", () => {
    const isStarredOnly = starredSwitch.checked;
    if (isStarredOnly) {
      quizData = quizData.filter((_, index) => isQuestionStarred(index));
    } else {
      window.location.reload();
    }
    loadQuestion(0, quizData, optionsList, submitButton, prevButton, nextButton, starredSwitch, starredQuestions, isQuestionStarred, toggleStarredQuestion);
  });
}
