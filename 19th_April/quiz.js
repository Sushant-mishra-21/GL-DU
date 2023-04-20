let score = 0;
let timeleft = 25;
const timer = document.querySelector("#timer");
let count =0;  
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
const getData =async ()=>{
  
  const res = await fetch(
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium"
)
  
  const data = await res.json();
  console.log(data.results[count].question)
  count++;
}
getData()
