#### Shortcuts

v-on:click -> @click
v-bind:html -> :html

#### Conditionals

```html
<p v-if="condition">This is completely removed from the DOM if condition evaluates to false</p>
<p v-else-if="condition">A basic else if statement</p>
<p v-else>This will be in the DOM if all other conditions evaluates to false</p>
```

#### Loops

```html
<p v-for="n in 10">{{ n }}</p>
<!-- Add a key when needed -->
<p v-for="user in users" :key="user.id">{{ n }}</p>
```


#### Toggle a CSS class on click

- `:class` will be merged with the HTML `class` property
- the key `'red':` is the class to add
- the value `attachRed` is the condition under which to add the class

```html
<div id="app">
  <div class="demo" @click="attachRed = !attachRed" :class="{'red': attachRed}">
  </div>
</div>
<script>
new Vue({
  el: '#app',
  data: {
    attachRed: false
  }
})
</script>
```

#### Binding to classes

`:class="{someClass: condition}"`  allows you to specify under which condition someClass should be added to this element.

`:class="someClass"`  on the other hand allows you to dynamically bind to some object working in the same way as in the first example (so you basically removed the logic from the template and put it into your JS code).

`:class="[someClass, anotherClass]"`  allows you to add multiple classes to an element. Here, someClass  CAN also be an object with the name: condition  mapping but it can also just be a class name (which then is always added, since it doesn't have a condition).

#### Properties

Use the `computed` property when you want data that is based on other data
Computed properties are always run synchronously

```javascript
new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
  computed: {
    output: function() {
      return this.counter > 5 ? 'Greater than 5' : 'Less than 6';
    }
  }
});
```

Use the `watch` property when you need to wait for some data (E.g: Asynchonous)

```javascript
new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
  watch: {
    // This will reset the counter to 0 after 2 seconds
    // This name has to match the property being watched
    // Vue will pass in the value of the upcoming change
    counter: function(value) {
      var vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 2000)
    }
  }
});
```
