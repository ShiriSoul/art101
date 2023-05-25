// lab.js - This js file is for loop function
// Author: Tony Pau
// Date: May 23, 2023

var maxFactors = 4;

var outputEl = $("#output");

function fizzBuzzBoom(maxNums, factorObj) {
    // Iterate over all numbers
    for (var i = 0; i < maxNums; i++) {
        // Resets output string
        var outputStr = "";
        // Iterate over the factors from index.html
        for (var factor in factorObj) {
            // Checks to see if num is a multiple of factor
            if (i % factor == 0) {
                // If true, then adds the text to outputStr
                outputStr += factorObj[factor];
            }
        }
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(i.toString() + outputStr);
    }
}

function getFactorObj() {
    var factorObj = {};
    for (var factor = 0; factor < maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = $("#" + numId).val();
        textValue = $("#" + textId).val();
        console.log(factor + ") num:", numValue, "text:", textValue)
        // If either value is blank then don't use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function outputToPage(str) {
    var newEl = $("<p></p>");
    newEl.html(str);
    outputEl.append(newEl);
}

function reportError(str) {
    outputEl.html("<div class='error'>" + str + "</div>");
}

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
    // Clears errors
    outputEl.html("");
    fizzBuzzBoom(max, factorObj);
    outputEl.addClass("cols");
})