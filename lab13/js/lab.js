// lab.js - This js file is for loop function
// Author: Tony Pau
// Date: May 23, 2023

var maxFactors = 4;

var outputEl = $("#output");

// function taken from Wes's JavaScript file, converted from pure JS to jQuery
// through ChatGPT
function fizzBuzzBoom(maxNums, factorObj) {
    // iterate over all numbers
    for (var i = 0; i < maxNums; i++) {
        // reset output string
        var outputStr = "";
        // iterate over the factors we got from the HTML
        for (var factor in factorObj) {
            // check to see if this num is a multiple of factor
            if (i % factor == 0) {
                // if yes, then add the text to output string
                outputStr += factorObj[factor];
            }
        }
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(i.toString() + outputStr);
    }
}

// function taken from Wes's JavaScript file, converted from pure JS to jQuery
// through ChatGPT
function getFactorObj() {
    var factorObj = {};
    for (var factor = 0; factor < maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = $("#" + numId).val();
        textValue = $("#" + textId).val();
        console.log(factor + ") num:", numValue, "text:", textValue)
        // if either value is blank, don't use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

// function taken from Wes's JavaScript file, converted from pure JS to jQuery
// through ChatGPT
function outputToPage(str) {
    var newEl = $("<p></p>");
    newEl.html(str);
    outputEl.append(newEl);
}

// function taken from Wes's JavaScript file, converted from pure JS to jQuery
// through ChatGPT
function reportError(str) {
    outputEl.html("<div class='error'>" + str + "</div>");
}

// function taken from Wes's JavaScript file, converted from pure JS to jQuery
// through ChatGPT
$("#submit").click(function() {
    var max = $("#max").val();
    console.log("max:", max);
    if (! max) {
        reportError("You must provide a maximum.");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj: ", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text.");
        return;
    }
    // clear error if there is one
    outputEl.html("");
    fizzBuzzBoom(max, factorObj);
    outputEl.addClass("cols");
})