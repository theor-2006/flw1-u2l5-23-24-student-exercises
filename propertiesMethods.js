// 1. Write a function named arrLength that:
//  - Takes an array as an argument 
//  - Returns its length

function arrLength() {
  return arguments.length
}

  
let myArray1 = [1, 2, 3, 4, 5];
console.log(arrLength(myArray1)); // Should print 5
  
// 2. Write a function name pushElement that:
//  - Takes an array and an element
//  - Adds the element to the end of the array using the push() method
//  - Returns the array

function pushElement() {
  let myArray2 = [1, 2, 3, 4, 5];
    myArray2.push(6);
  return myArray2
}
  
let myArray2 = [1, 2, 3];
pushElement(myArray2, 4);
console.log(myArray2); // Should print [1, 2, 3, 4]
  

// 3. Write a function named popElement that:
//  - Takes an array and removes the last element using the pop() method
//  - Returns the array

function popElement() {
  let myArray3 = [1, 2, 3, 4, 5];
    myArray3.pop();
  return myArray3
}


let myArray3 = [1, 2, 3, 4];
popElement(myArray3);
console.log(myArray3); // Should print [1, 2, 3]
  

// 4. Write a function named shiftElement that:
//  - Takes an array and removes the first element using the shift() method
//  - Returns the array
function shiftElement() {
  let myArray4 = [1, 2, 3, 4, 5];
    myArray4.shift();
  return myArray4
}


let myArray4 = [1, 2, 3, 4];
shiftElement(myArray4);
console.log(myArray4); // Should print [2, 3, 4]
  

// 5. Write a function named unshiftElement that:
//  - Takes an array and an element
//  - Adds the element to the beginning of the array using the unshift() method
//  - Returns the array

function unshiftElement() {
  let myArray5 = [1, 2, 3, 4, 5];
    myArray5.unshift(0);
  return myArray5
}



  
let myArray5 = [1, 2, 3, 4];
unshiftElement(myArray5, 1);
console.log(myArray5); // Should print [1, 2, 3, 4]


// CHALLENGE
// Look up how a spread operator works.
// Write a function called mergeArrays that:
function mergeArrays() {
  let array1 = [1, 2, 3, 4];
  let array2 = [5, 6, 7, 8];
  let array3 = [...array1, ...array2];
  return myArray
}



let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c'];
let array3 = [4, 5, 6];
let mergedArray = mergeArrays(array1, array2, array3);
console.log(mergedArray); // Should print [1, 2, 3, 'a', 'b', 'c', 4, 5, 6]
