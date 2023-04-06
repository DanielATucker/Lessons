//              Lesson 6
//              Dictionaries cont

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

testDict = {
    "Message1": testArray[0],
    "Message2": testArray[1],
    "Message3": testArray[2]
};
// add Messages into testDict

//              Dictionaries cont

// Dictionaries can be read from and added to in the following ways.

// Read 
console.log(testDict["Message1"]);
console.log(testDict.Message1);  // Same, same