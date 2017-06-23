function isEven(number) {
  return number % 2 === 0;
}

// function factorial(number) {
//   if (number <= 1) {
//     return 1;
//   }
//   var total = number;
//   while (number > 1) {
//     number--;
//     total *= number
//   }
//   return total;
// }

function factorial(number) {
  var total = 1;
  for (var i = 2; i < number; i++) {
    total *= i;
  }
  return total;
}

function kebabToSnake(string) {
  return string.replace(/-/g, "_");
}
