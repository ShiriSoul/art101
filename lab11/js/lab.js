// index.js - The purpose of this file is to experiment with jQuery.
// Author: Tony Pau
// Date: May 17, 2023

// Find specific section you to add a button to
// Create the button
// Give button a text label
// Add button to the section
$("#challenge").append("<button id='my-button'>Click Me!</button>")
$("#problems").append("<button id='my-button2'>Click Me!</button>")
$("#reflection").append("<button id='my-button3'>Click Me!</button>")
$("#results").append("<button id='my-button4'>Click Me!</button>")

// Add click events to each button
// Find the section the button is in
// Toggle class special within the <div> of the section
$("#my-button").click(function() {
    $("#challenge").toggleClass("special");
});

$("#my-button2").click(function() {
    $("#problems").toggleClass("special");
});

$("#my-button3").click(function() {
    $("#reflection").toggleClass("special");
});

$("#my-button4").click(function() {
    $("#results").toggleClass("special");
});

// Append buttons for bonus task
$("#output").append("<button id='blue-button' class='blue'>Blue Button!</button>")
$("#output").append("<button id='red-button' class='red'>Red Button!</button>")

// Click on blue button will turn red button blue
$("#blue-button").click(function() {
    // Check if red button is already red
    if (($("#red-button").hasClass("red")) == true) {
        // If aleady so then turn off
        $("#red-button").toggleClass("red");
        // Check if blue button isn't blue
        if (($("#blue-button").hasClass("blue")) == false) {
            // Check if blue button has "red" Class toggled on
            if (($("#blue-button").hasClass("red")) == true) {
                // If so then toggle off
                $("#blue-button").toggleClass("red");
            }
            $("#blue-button").toggleClass("blue");
        }
        // Change red button color to blue
        $("#red-button").toggleClass("blue");
    }
});

// Click on red button will turn blue button red
$("#red-button").click(function() {
    // Check if blue button is already blue
    if (($("#blue-button").hasClass("blue")) == true) {
        // If aleady so then turn off
        $("#blue-button").toggleClass("blue");
        // Check if red button isn't red
        if (($("#red-button").hasClass("red")) == false) {
            // Check if red button has "blue" Class toggled on
            if (($("#red-button").hasClass("blue")) == true) {
                // If so then toggle off
                $("#red-button").toggleClass("blue");
            }
            $("#red-button").toggleClass("red");
        }
        // Change blue button color to red
        $("#blue-button").toggleClass("red");
    }
});