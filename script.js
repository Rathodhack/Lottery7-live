let countdown = 15;
let timerEl = document.getElementById("timer");
let numberEl = document.getElementById("number");

function getRandomPrediction() {
  return Math.floor(Math.random() * 10);
}

function updatePrediction() {
  const newNumber = getRandomPrediction();
  numberEl.textContent = newNumber;
}

setInterval(() => {
  countdown--;
  timerEl.textContent = countdown;
  if (countdown === 0) {
    updatePrediction();
    countdown = 15;
  }
}, 1000);

updatePrediction();