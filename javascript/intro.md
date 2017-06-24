#### Equality operators

`==` does type coercion, converting the 2 arguments into a similar type so it can compare them. This can easily lead to bugs.
`===` means that the 2 arguments are exactly the same. Always use `===`

#### Convert a string to a number

```javascript
var string = "4";
console.log(Number(string))
// #=> 4
```

#### String cotains character or word

```javascript
var string = "Hello world";
console.log(string.indexOf("world"))
// #=> 6
console.log(string.indexOf("nope"))
// #=> -1
```

#### Higher order functions

Take a function as an argument or return another function.

#### Common array functions

- `forEach(eachElementName, index = null)` - For loop on array
- `splice(index, numberOfElements)` - Removes `numberOfElements` starting from `index`
- `indexOf(element)`- Find the index of the element. Returns `-1` if not in array
- `push(element)`- Add an element to the end
- `pop`- Remove and element from the end
- `shift`- Remove an element from the beginning
- `unshift(element)`- Add an element to the beginging

#### document.querySelector()

```javascript
let tag = document.querySelector("li")
let tag = document.querySelector("#comments")
let tag = document.querySelector(".comment") // Returns only one element
let tag = document.querySelectorAll(".comment") // Returns all elements
```

#### Select element text

```javascript
document.querySelector("p").textContent // Just the text
document.querySelector("p").innerHTHML // Text with HTML markup
```

#### Event listner

```javascript
let p = document.querySelector("p")
p.addEventListner("click", function () {
  console.log("p was clicked");
});
```
