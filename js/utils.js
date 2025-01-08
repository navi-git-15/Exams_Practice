export function removeExistingScripts() {
    document.querySelectorAll("script[data-dynamic]").forEach((script) => script.remove());
  }
  
  export function getQuizData() {
    return window.quizData; // assuming quiz data is global or added dynamically
  }
  