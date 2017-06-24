// let colors = [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)",
// ];

//
// Variables
//
let colors = generateRandomColors(6);
let pickedColor = pickColor();
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let body = document.querySelector("body");
let bodyBgColor = body.style.backgroundColor;
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let bgColor = "#333";

colorDisplay.textContent = pickedColor;


//
// Event listeners
//
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    clickedColor = this.style.backgroundColor;
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

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  h1.style.backgroundColor = bgColor;
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New colors";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

//
// Functions
//
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
