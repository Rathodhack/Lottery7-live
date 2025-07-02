let countdown = 15;
let timerEl = document.getElementById("timer");
let resultsEl = document.getElementById("results");
let history = [];

function getRandomPrediction() {
  return Math.floor(Math.random() * 10);
}

function getSizeLabel(n) {
  return n >= 5 ? "Big" : "Small";
}

function getColorClass(n) {
  return n >= 5 ? "big" : "small";
}

function getPeriodNumber(offset = 1) {
  const now = new Date(Date.now() + offset * 30000); // +1 period
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const h = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const sec = now.getSeconds();
  const part = Math.floor(sec / 30);
  return `${y}${m}${d}${h}${min}${part}`;
}

function updatePrediction() {
  const number = getRandomPrediction();
  const size = getSizeLabel(number);
  const cssClass = getColorClass(number);
  const period = getPeriodNumber(1); // next period

  const html = `
    <div class="result">
      <div>Period:<br><b>${period}</b></div>
      <div class="number ${cssClass}">${number}</div>
      <div>${size}</div>
    </div>
  `;

  history.unshift(html);
  if (history.length > 7) history.pop();
  resultsEl.innerHTML = history.join("");
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