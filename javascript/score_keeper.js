let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let numInput = document.querySelector('input');
let playingToDisplay = document.querySelector('p span');
let playingTo = 5;
let gameOver = false;

let players = [{
    display: document.querySelector("#p1Display"),
    button: document.querySelector("#p1"),
    score: 0,
  },
  {
    display: document.querySelector("#p2Display"),
    button: document.querySelector("#p2"),
    score: 0,
  },
];

players.forEach(function(player) {
  player.button.addEventListener("click", function() {
    increaseScore(player);
  });
})

resetButton.addEventListener("click", function() {
  resetGame();
});

numInput.addEventListener("change", function() {
  playingToDisplay.textContent = this.value;
  playingTo = Number(this.value);
  resetGame();
});

function increaseScore(player) {
  if (!gameOver && player.score < playingTo) {
    player.score++;
    player.display.textContent = player.score;
  }
  if (player.score === playingTo) {
    gameOver = true;
    player.display.style.color = "green";
  }
}

function resetGame() {
  players.forEach(function(player) {
    player.score = 0;
    player.display.textContent = 0;
    player.display.style.color = "black";
    gameOver = false;
  });
}
