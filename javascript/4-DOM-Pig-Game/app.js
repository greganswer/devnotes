/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gameOver;
const DEFAULT_FINAL_SCORE = 100;

finalScore();
initGame();

// -----------------------
// Event listeners
// -----------------------

getDomClass('btn-roll').addEventListener('click', function() {
  if (gameOver) {
    return;
  }
  let dice = rollDice();
  if (dice !== 1) {
    roundScore += dice;
    getDomId(`current-${activePlayer}`).textContent = roundScore;
    if (roundScore + scores[activePlayer] >= finalScore()) {
      declareWinner();
    }
  } else {
    roundScore = 0;
    switchPlayers();
  }
});

getDomClass('btn-hold').addEventListener('click', function() {
  if (gameOver) {
    return;
  }
  addRoundScoreToCurrentScore();
  switchPlayers();
});

getDomClass('btn-new').addEventListener('click', initGame);

// -----------------------
// Functions
// -----------------------

function initGame() {
  getDomClass('dice').style.display = 'none';
  getDomClass(`player-${activePlayer || 0}-panel`).classList.remove('winner');
  getDomClass(`player-${activePlayer || 0}-panel`).classList.remove('active');
  getDomClass('player-0-panel').classList.add('active');
  getDomId('name-0').textContent = 'Player 1';
  getDomId('name-1').textContent = 'Player 2';
  getDomId(`current-${activePlayer || 0}`).textContent = 0;
  getDomId('score-0').textContent = 0;
  getDomId('score-1').textContent = 0;
  finalScore();

  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gameOver = false;
}

function finalScore() {
  let finalScore = getDomClass('final-score').value;
  finalScore = finalScore >= 1 ? finalScore : DEFAULT_FINAL_SCORE;
  return (getDomClass('final-score').value = finalScore);
}

function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  let diceDOM = getDomClass('dice');
  diceDOM.style.display = 'block';
  diceDOM.src = `dice-${dice}.png`;
  return dice;
}

function addRoundScoreToCurrentScore() {
  scores[activePlayer] += roundScore;
  roundScore = 0;
  getDomId(`score-${activePlayer}`).textContent = scores[activePlayer];
  getDomId(`current-${activePlayer}`).textContent = 0;
}

function getDomClass(name) {
  return document.querySelector(`.${name}`);
}

function getDomId(name) {
  return document.getElementById(name);
}

function switchPlayers() {
  getDomId(`current-${activePlayer}`).textContent = 0;
  getDomClass('player-0-panel').classList.toggle('active');
  getDomClass('player-1-panel').classList.toggle('active');
  getDomClass('dice').style.display = 'none';
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;
  finalScore();
}

function declareWinner() {
  getDomId(`name-${activePlayer}`).textContent = 'Winner!';
  gameOver = true;
  getDomClass(`player-${activePlayer}-panel`).classList.toggle('winner');
  addRoundScoreToCurrentScore();
}
