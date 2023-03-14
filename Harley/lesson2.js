//              Lesson 2
//  Dictionaries

// Review
// So far we are familiar with the following code, lets review

let testVar = "Hello World"; // Declare testVar, and store the phrase "Hello World" in it

let testArray = []; // Declare an array called testArray
let testDict = {};  // Declare a dictionary called testDict

testArray.push(testVar); // TestVar goes in testArray

console.log(testArray); // show or log test testArray to the screen

// Dictionaries
// Key-Value Pairs

// Now lets add testArray to our dictionary testDict. 

//Lets pretend we're building a chat application that stores chat messages. We have our first message "Hello World", lets add it to our dictionary testDict and give it a key of "Message1" with the value of testArray.

testDict = {
    "Message1": testArray
};

// Easy Right?

// Now lets show or work, or log it to the console.
// Tip: to get more detail on a dictionary, use the code JSON.stringify(testDict, null, 2)

console.log(JSON.stringify(testDict, null, 2));