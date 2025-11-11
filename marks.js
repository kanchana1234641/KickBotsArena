const setup = document.getElementById("setup");
const scoreboard = document.getElementById("scoreboard");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

const p1Plus = document.getElementById("p1Plus");
const p1Minus = document.getElementById("p1Minus");
const p2Plus = document.getElementById("p2Plus");
const p2Minus = document.getElementById("p2Minus");

const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const timerDisplay = document.getElementById("timer");
const result = document.getElementById("result");

const p1Name = document.getElementById("p1Name");
const p2Name = document.getElementById("p2Name");

let s1 = 0, s2 = 0;
let timeLeft = 0;
let timer;

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function updateTimer() {
  timerDisplay.textContent = formatTime(timeLeft);
}

function startGame() {
  const name1 = document.getElementById("player1").value || "Player 1";
  const name2 = document.getElementById("player2").value || "Player 2";
  const time = parseInt(document.getElementById("timeInput").value) || 120;

  p1Name.textContent = name1;
  p2Name.textContent = name2;
  timeLeft = time;
  s1 = s2 = 0;
  score1.textContent = s1;
  score2.textContent = s2;
  result.textContent = "";

  setup.classList.add("hidden");
  scoreboard.classList.remove("hidden");

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  updateTimer();
}

function endGame() {
  if (s1 > s2) {
    result.textContent = `${p1Name.textContent} Wins! 🏆`;
  } else if (s2 > s1) {
    result.textContent = `${p2Name.textContent} Wins! 🏆`;
  } else {
    result.textContent = "It's a Tie! 🤝";
  }
}

function resetGame() {
  clearInterval(timer);
  setup.classList.remove("hidden");
  scoreboard.classList.add("hidden");
}

p1Plus.addEventListener("click", () => {
  s1++;
  score1.textContent = s1;
});
p1Minus.addEventListener("click", () => {
  if (s1 > 0) s1--;
  score1.textContent = s1;
});
p2Plus.addEventListener("click", () => {
  s2++;
  score2.textContent = s2;
});
p2Minus.addEventListener("click", () => {
  if (s2 > 0) s2--;
  score2.textContent = s2;
});

startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
