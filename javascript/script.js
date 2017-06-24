let input = "";
let list = [];


while (input !== "quit") {
  input = prompt("What would you like to do?");

  if (input === "list") {
    listItems();
  } else if (input === "new") {
    addToDo();
  } else if (input === "delete") {
    deleteToDo();
  }
}

console.log("YOU QUIT THE APP");



function addToDo() {
  let item = prompt("Enter your item");
  list.push(item)
  console.log('Added "' + item + '" to Todo list');
}

function deleteToDo() {
  let item = prompt("Delete which index?");
  list.splice(item, 1)
  console.log('Deleted "' + item + '" from to Todo list');
}

function listItems() {
  let output = "**********\n";
  list.forEach(function(item, index) {
    output += index + ": " + item + "\n";
  });

  output += "**********";
  console.log(output);
}
