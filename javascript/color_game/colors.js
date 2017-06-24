let numSquares = 6;
let colors = [];
let pickedColor;
let bgColor = "#333";
let body = document.querySelector("body");
let bodyBgColor = body.style.backgroundColor;
let colorDisplay = document.querySelector("#colorDisplay");
let h1 = document.querySelector("h1");
let messageDisplay = document.querySelector("#message");
let modeButtons = document.querySelectorAll(".mode");
let resetButton = document.querySelector("#reset");
let squares = document.querySelectorAll(".square");


init();


//
// Functions
//
function init() {
  setupSquares();
  setupModeButtons();
  reset();
}

// Reset button event listener
resetButton.addEventListener("click", function() {
  reset();
});

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        resetButton.textContent = "Play Again?";
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = bgColor;
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      removeSelectedClassFromAllButtons();
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New colors";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

function removeSelectedClassFromAllButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].classList.remove("selected")
  }
}
