let score = 0;
let timeleft = 25;
const timer = document.querySelector("#timer");
const question = document.querySelector("#question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const button = document.querySelector(".btn-sub");
let count = 0;
let dataLength = 0;
const interval = setInterval(() => {
  timeleft--;
  if (timeleft > 60) {
    let t_output_m = Math.floor(timeleft / 60);
    let t_output_s = Math.floor(timeleft % 60);
    timer.innerHTML = `Time left : ${t_output_m} m ${t_output_s} s`;
  } else if (timeleft < 15) {
    timer.style.color = "red";
    timer.innerHTML = `Time left : ${timeleft} s`;
  } else {
    timer.innerHTML = `Time left : ${timeleft} s`;
  }
  if (timeleft == 0) {
    clearInterval(interval);
    timer.innerHTML = `Time up!`;
  }
}, 1000);
const getData = async () => {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium"
  );

  const data = await res.json();
  question.innerHTML = data.results[count].question;
  option1.innerHTML = data.results[count].correct_answer;
  option2.innerHTML = data.results[count].incorrect_answers[0];
  option3.innerHTML = data.results[count].incorrect_answers[1];
  option4.innerHTML = data.results[count].incorrect_answers[2];
  console.log(data.results);
  dataLength = data.results.length;
  console.log(dataLength);
};
getData();

function buttonClicked() {
  count++;
  if (count <= dataLength) {
    getData();
  } else {
    testCompleted();
  }
}
function testCompleted() {
  button.disabled = true;
  alert("Test Finished!");
  window.location.href = "TestFinished.html";
}
