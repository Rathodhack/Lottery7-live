function generatePrediction() {
  const number = Math.floor(Math.random() * 10); // 0 to 9
  const now = new Date().toLocaleTimeString();
  const entry = `${now} → [ ${number} ]`;

  const div = document.getElementById("prediction");
  const newLine = document.createElement("div");
  newLine.innerText = entry;

  div.prepend(newLine); // Latest prediction on top
}

// Run immediately and every 15 seconds
generatePrediction();
setInterval(generatePrediction, 15000);
