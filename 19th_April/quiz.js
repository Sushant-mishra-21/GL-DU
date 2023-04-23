let score = 0;
let timeleft = 10; //125 seconds => 2 minutes and 5 seconds
let data = undefined;
let data_correct_answer = undefined;
let data_selected_answer = undefined;
const timer = document.querySelector("#timer");
const question = document.querySelector("#question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const button = document.querySelector(".btn-sub");
const opt = document.querySelectorAll(".ans");
const showScore = document.querySelector("#showScore");
let div_array = [...opt];
let optionsArray = [];
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
    count = 0;
    testCompleted();
  }
}, 1000);
const getData = async () => {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium"
  );

  data = await res.json();
  question.innerHTML = data.results[count].question;
  option1.innerHTML = data.results[count].correct_answer;
  option2.innerHTML = data.results[count].incorrect_answers[0];
  option3.innerHTML = data.results[count].incorrect_answers[1];
  option4.innerHTML = data.results[count].incorrect_answers[2];
  dataLength = data.results.length;
  data_correct_answer = data.results[count].correct_answer;
  optionsArray = [];
  optionsArray = [
    data.results[count].correct_answer,
    data.results[count].incorrect_answers[0],
    data.results[count].incorrect_answers[1],
    data.results[count].incorrect_answers[2],
  ];
};
getData();

function SavebuttonClicked() {
  count++;
  getValue();
  if (count <= dataLength) {
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => {
      label.classList.remove("green");
    });
    getData();
  } else {
    testCompleted();
  }
}

opt.forEach((radio) => {
  radio.addEventListener("click", function () {
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => {
      label.classList.remove("green");
    });
    const label = this.closest("label");
    label.classList.add("green");
  });
});

function getValue() {
  div_array.forEach((arr) => {
    if (arr.checked == true) {
      // alert(arr.value);
      data_selected_answer = arr.value;
      calculateScore();
    }
  });
}
function testCompleted() {
  button.disabled = true;
  alert("Test Finished!");
  showScore.innerHTML = "You Scored " + score + " marks out of 10!";
}

function calculateScore() {
  if (data_correct_answer === optionsArray[data_selected_answer - 1]) {
    console.log("OK");
    score = score + 1;
  } else {
    console.log("NOt OK");
  }
}
