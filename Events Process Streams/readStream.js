var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('readData.json', {
    highWaterMark: 10
});

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
    console.log(chunk);
    console.log('=================');
    data += chunk;
});

readerStream.on('end',function() {
    objJson = JSON.parse(data);
    console.log(objJson["facultyData"]["fc2"]["Courses"]);
    // console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");