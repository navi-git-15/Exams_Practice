export function loadTopics(subject, topicSelect) {
    if (typeof topics === "undefined" || !topics[subject]) {
      console.error("Topics are not defined in the subject file.");
      return;
    }
  
    topics[subject].forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent =
        topic.charAt(0).toUpperCase() + topic.slice(1);
      topicSelect.appendChild(option);
    });
    topicSelect.disabled = false;
  }
  