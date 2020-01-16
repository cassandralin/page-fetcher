const request = require(‘request’); // installed request library. requesting to use it
const fs = require(‘fs’);

const args = process.argv.slice(2); // using information from command line
const url = args[0]; //first element of command line argument after slice
const filePath = args[1];

console.log(args)
request(url, (error, response, body) => { //requesting information from URL 
  console.log(‘error:’, error); // Print the error if one occurred
  console.log(‘statusCode:’, response && response.statusCode); // Print the response status code if a response was received
  console.log(‘body:’, body); // Print the HTML for the Google homepage.
  fs.writeFile(filePath, body, function (err) {
    if (err) throw err;
    console.log(‘Saved!’);
})
})