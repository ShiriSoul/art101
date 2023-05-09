// index.js - The purpose is to edit array elements using anonymous and callback functions.
// Author: Tony Pau
// Date: May 8, 2023

function addNum(x) {
    var results = x + 5;
    return results;
}

function main() {
    // test addNum()
    console.log("5 + 5 = ", addNum(5));
    console.log("2 + 5 = ", addNum(2));

    // array
    var numArray = [1,3,5,6,8,10];
    console.log("My array: ", numArray);

    // print original array to index.html
    var printInfo = document.getElementById("arrayInfo1");
    printInfo.innerHTML = "The Original Array: ";
    var outputE1 = document.getElementById("scriptOutput1");
    outputE1.innerHTML = JSON.stringify(numArray, '\t');

    var result = numArray.map(addNum);
    // should return [6, 8, 10, 11, 13, 15]
    console.log("Test of array elements + 5: ", result);

    // print Test of array elements + 5 to index.html
    var printInfo2 = document.getElementById("arrayInfo2");
    printInfo2.innerHTML = "The Array with Elements + 5: ";
    var outputE12 = document.getElementById("scriptOutput2");
    outputE12.innerHTML = JSON.stringify(result);

    // callback to square numbers
    var result = numArray.map(function(x) {
        return x ** 2;
    })

    // should return [1, 9, 25, 36, 64, 100]
    console.log("This array squared is: ",result)

    // print squared elements array to index.html
    var printInfo3 = document.getElementById("arrayInfo3");
    printInfo3.innerHTML = "The Array Elements Squared: ";
    var outputE13 = document.getElementById("scriptOutput3");
    outputE13.innerHTML = JSON.stringify(result);
}
