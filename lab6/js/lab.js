// index.js - The purpose of this javascript is to print data from the array and objects onto the webpage
// Author: Tony Pau
// Date: April 28, 2023

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  // Define Variables fo Transportation
  var myTransport = ["Electric Skateboard", "Mercedes-Benz", "Metro Bus"];

  // myMainRide object
  var myMainRide = {
    make: "Mercedes-Benz",
    model: "GLE-350",
    color: "Red",
    year: "2020",
    age: function() {
        return 2023 - this.year;
    }
  }

  //output
  document.writeln("Transportation forms that I take: ", myTransport, "</br>");
  //Print Object
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

// let's get this party started
main();
