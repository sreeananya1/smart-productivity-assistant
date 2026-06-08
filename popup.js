document.getElementById("start").addEventListener("click", () => {
  let seconds = 20;
  const timerElement = document.getElementById("timer");

  timerElement.textContent = seconds;
  const interval = setInterval(() => {
    seconds--;
    timerElement.textContent = seconds;
    if (seconds === 0) {
      clearInterval(interval);
      timerElement.textContent = "Done!";
    }
  }, 1000);
});
