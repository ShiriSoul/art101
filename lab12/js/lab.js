// lab.js - This js file is for the sorting function that'll depend on conditionals.
// Author: Tony Pau
// Date: May 21, 2023

function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
    console.log(mod);
    var house;
    if (mod == 0) {
        house = "Gryffindor";
    }
    else if (mod == 1) {
        house = "Ravenclaw";
    }
    else if (mod == 2) {
        house = "Skytherin";
    }
    else if (mod == 3) {
        house = "Hufflepuff";
    }
    return house;
}

$("#button").click(function () {
    var name = $("#input").val();
    var house = sortingHat(name);
    $("#output").append("The Sorting Hat has sorted you into " + house + ".<br>");
    // Clears the text box and set the cursor after pressing the button
    $("#input").val('').focus();
})