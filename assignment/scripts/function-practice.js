console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Tracey'));

// 3. Function to add two numbers together & return the result
function addNumbers( x, y ) {
  return x + y;
}
console.log('1 plus 2 is:', addNumbers(1,2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( x, y, z ){
  return x * y * z;
}
console.log('2 times 4 times 6 is:', multiplyThree(2,4,6));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  return (number > 0);
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length === 0){
    return undefined;
  } else {
    return array[array.length-1];
  }
}
console.log('getLast array empty:', getLast([]));
console.log('getLast array Dog, Cat, Bird:', getLast(['Dog', 'Cat', 'Bird']));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (i of array) {
    if (i === value){
      return true;
    }
  }  
  return false;
}
console.log('Finding value 1 in array of 3, 2, 1:', find(1, [3, 2, 1]));
console.log('Finding value 1 in array of 4, 5, 6:', find(1, [4, 5, 6]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return (string[0] === letter);
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (i of array){
    sum += i;
  }
  return sum;
}
console.log ('adding 1+2+3+4+5: ', sumAll([1, 2, 3, 4, 5]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveArr ( array ){
  let newArray = [];
  for (i of array){
    if (i > 0){
      newArray.push(i);
    }
  }
  return newArray;
}

console.log('Testing array of 1, -2, 3, -4, 5', positiveArr([1,-2,3,-4,5]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Tuck in Array
//Create a function that takes two arrays and insert the second array in the middle of the first array.
//The first array always has two elements
//Use spread syntax
//https://edabit.com/challenge/7ysTEDruHz2prcJQ9

function tuckIn ( arr1, arr2 ){
  return [arr1[0], ...arr2, arr1[1]];
}

console.log('Testing with array 1 [1,2] and array 2 [3,4,5]', tuckIn([1,2], [3,4,5]));
