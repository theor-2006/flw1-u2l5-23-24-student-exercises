# Lesson 2.5: Array Properties & Methods

## 🗂️ Array Properties & Methods

### Recap: What is an Array?
An array is a data structure that can store multiple values in a single variable. Each item in an array is called an element, and elements are ordered and accessed using a numerical index.

```javascript
let fruits = ['apple', 'banana', 'orange'];
```

### Accessing Array Elements
Array elements can be accessed using their index, starting at 0 for the first element.

```javascript
let fruits = ['apple', 'banana', 'orange'];
let firstFruit = fruits[0]; // 'apple'
```

### Array Properties
Arrays have built-in properties that provide useful information about the array, such as the `length` property, which gets the number of elements in the array.

```javascript
let fruits = ['apple', 'banana', 'orange'];
let numFruits = fruits.length; // 3
```

### Array Methods Overview
Array methods are built-in functions that allow you to perform various operations on arrays easily. Here are some common array methods:
- `push()`: Adds elements to the end of an array.
- `pop()`: Removes the last element from an array.
- `shift()`: Removes the first element from an array.
- `unshift()`: Adds elements to the beginning of an array.

```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grapes'); // ['apple', 'banana', 'orange', 'grapes']
fruits.pop(); // ['apple', 'banana', 'orange']
fruits.shift(); // ['banana', 'orange']
fruits.unshift('kiwi'); // ['kiwi', 'banana', 'orange']
```

### 🔄 DOM Manipulation Review
While it’s important to access data from the array and modify it, we also want to display that data on our page!

#### DOM Manipulation
- `createElement()`: Creates an HTML element in JavaScript, but it's not yet in the DOM.
- `appendChild()`: Attaches an element to the DOM, adding it as the last child.

Example:
```javascript
let para = document.createElement("p");
para.innerHTML = "Hello!";
document.body.appendChild(para);
```

Happy coding! 😊