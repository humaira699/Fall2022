//Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
//listener #1
var listner1 = function listner1() {
    console.log('listner1 executed.');
 }
 
 // listener #2
 var listner2 = function listner2() {
    console.log('listner2 executed.');
 }
 // Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");


// const events = require("events")
// let result = 0;
// let eventEmitter = new events.EventEmitter();
// eventEmitter.on("foo", function() {console.log("Hello, world")});
// eventEmitter.on("bar", function(a,b) {
//   result += (a+b); 
//   console.log(result);
// });
// eventEmitter.on("bar", function(a,b) {
//   result *= (2+b-a); console.log(result);
// });
// eventEmitter.on("error", function() { console.log("Error Detected!")});
// eventEmitter.emit("foo");
// eventEmitter.emit("bar", 1, 3);
// eventEmitter.emit("who");
