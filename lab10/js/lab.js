// index.js - The purpose is to experiment events and forms in javascript.
// Author: Tony Pau
// Date: May 11, 2023

// Sorts string
function sortName(str) {
    return str.split('').sort().join('')
}

// Finds element for the button
var buttonE1 = document.getElementById("button1");

// Returns sorted input name
buttonE1.addEventListener("click", function() {
    // Finds input element
    var inputE1 = document.getElementById("user-name");

    // Sets variable "inputValue" to the input name
    var inputValue = inputE1.value;
    console.log("Your Input:", inputValue);

    // Calls sortName() to sort the input name and saves it to "nameStr"
    var nameStr = sortName(inputValue);

    // Finds the element with id "output"
    var outputE1 = document.getElementById("output");

    // Replace <div id="output"> with the results in index.html
    outputE1.innerHTML = "Your Sorted Name Is: " + nameStr;

    // Clears the text box and set the cursor after pressing the button\
    inputE1.value = "";
    inputE1.focus();
});
