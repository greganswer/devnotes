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