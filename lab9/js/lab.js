// index.js - The purpose is to experiment with DOM manipulation using javascript.
// Author: Tony Pau
// Date: May 10, 2023

function addParagraph() {
    //return element with id as "output"
    var outputE1 = document.getElementById("output");

    //new <p> element
    var new1E1 = document.createElement("p");

    //set text of new element
    new1E1.innerHTML = "You should see this this message!";

    //insert element
    outputE1.appendChild(new1E1);
}

function addHeader() {
    //return element with id as "output"
    var outputE1 = document.getElementById("output");

    //new <h4> element
    var new2E1 = document.createElement("h4");

    //set text of new element
    new2E1.innerHTML = "You should see this level 4 header message!";

    //insert element
    outputE1.appendChild(new2E1);
}

function modifySectionColor() {
    //return element with class "minor-section"
    var outputE1 = document.getElementsByClassName("minor-section");

    //loop through all elements with class "minor-section"
    //Change background color property to Cyan
    for (var i = 0; i < outputE1.length; i++) {
        outputE1[i].style.backgroundColor = "cyan";
    }
}

function modifyFont() {
    //return elements with a tag
    var outputE1 = document.getElementsByTagName("*");

    //loop through all elements with a tag
    //Change font family property to Merriweather
    for (var i = 0; i < outputE1.length; i++) {
        outputE1[i].style.fontFamily = "Merriweather";
    }
}