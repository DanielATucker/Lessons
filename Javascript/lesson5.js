//              Lesson 5
//  Dictionaries

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


//              Dictionaries
// Key-Value Pairs

// Lets pretend we're building a chat application that stores chat messages. 

// First, lets add some messages from testArray to our dictionary testDict. 

// Dictionaries have to have a key-value pair, meaning that for every value or variable put in to the dictionary it needs a special id or key.

// We have our first message "Hello World", lets add it to our dictionary of messages testDict. 

testDict = {
    "Message1": testArray[0],
    "Message2": testArray[1],
    "Message3": testArray[2]
};

// Easy Right?

// Now lets show or work, or log it to the console.
// Tip: to get more detail on a dictionary, use the code JSON.stringify(testDict, null, 2)

console.log(JSON.stringify(testDict, null, 2));