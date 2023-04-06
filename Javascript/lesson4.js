//              Lesson 4
// Arrays cont


// Review
// So far we are familiar with the following code, lets review

let testMessage1 = "Hello World";

let testArray = [];  
// Declare array named testArray

testArray.push(testMessage1); 
// TestVar goes in TestMessage1

var Message2 = "Hello Person1";
var Message3 = "Hello Person2";
// Decare 2 variables called Message2 and Message3

testArray.push(Message2);
testArray.push(Message3);
// Push Message2 and Message3 into testArray

// Arrays cont

// We can access the individual variables inside of the array by referencing its position or index in the array. Computers start counting at 0, so the first index value for testMessage1 is 0, 1 for testMessage2, and 2 for testMessage3

console.log(testArray[0]); // log the first index value (notice how the computer starts counting at 0)
console.log(testArray[1]); // log the second index value
console.log(testArray[2]); // log the second index value 