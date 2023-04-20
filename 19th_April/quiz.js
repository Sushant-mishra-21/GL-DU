const quizForm = document.getElementById("quiz-form");
const timer = document.getElementById("timer");
const result = document.getElementById("result");

let score = 0;
let timeLeft = 30; // 10 minutes in seconds

// Start the timer
const interval = setInterval(() => {
  timeLeft--;
  timer.innerHTML = `Time left: ${timeLeft} seconds`;

  if (timeLeft === 0) {
    clearInterval(interval);
    disableForm();
    showResult();
  }
}, 1000);

// Disable the form once the timer expires
function disableForm() {
  for (let i = 0; i < quizForm.elements.length; i++) {
    quizForm.elements[i].disabled = true;
  }
}

// Calculate the score and show the result
function showResult() {
  for (let i = 0; i < quizForm.elements.length; i++) {
    const element = quizForm.elements[i];

    if (element.checked) {
      // Check if the selected answer is correct
      if (element.value === "b") {
        score++;
      }
    }
  }

  result.innerHTML = `You scored ${score} out of 10!`;
}

// Submit the quiz
quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  disableForm();
  clearInterval(interval);
  showResult();
});