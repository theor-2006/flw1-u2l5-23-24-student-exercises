// 1. Write a function named arrLength that:
//  - Takes an array as an argument 
//  - Returns its length

  
const myArray = [1, 2, 3, 4, 5];
console.log(arrLength(myArray)); // Should print 5
  
// 2. Write a function name pushElement that:
//  - Takes an array and an element
//  - Adds the element to the end of the array using the push() method
//  - Returns the array

  
const myArray = [1, 2, 3];
pushElement(myArray, 4);
console.log(myArray); // Should print [1, 2, 3, 4]
  

// 3. Write a function named popElement that:
//  - Takes an array and removes the last element using the pop() method
//  - Returns the array

  
const myArray = [1, 2, 3, 4];
popElement(myArray);
console.log(myArray); // Should print [1, 2, 3]
  

// 4. Write a function named shiftElement that:
//  - Takes an array and removes the first element using the shift() method

  
const myArray = [1, 2, 3, 4];
shiftElement(myArray);
console.log(myArray); // Should print [2, 3, 4]
  

// 5. Write a function that:
//  - Takes an array and an element
//  - Adds the element to the beginning of the array using the unshift() method

  
const myArray = [2, 3, 4];
unshiftElement(myArray, 1);
console.log(myArray); // Should print [1, 2, 3, 4]


// CHALLENGE
// Look up how a spread operator works.
// Write a function called mergeArrays that:
//  - Takes 3 different arrays as arguments
//  - Uses the spread operator to merge them into a single array





const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const array3 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2, array3);
console.log(mergedArray); // Should print [1, 2, 3, 'a', 'b', 'c', 4, 5, 6]
