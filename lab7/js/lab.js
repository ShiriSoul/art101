// index.js - The purpose of this javascript file is to take an input and manipulate a string.
// Author: Tony Pau
// Date: May 3, 2023

// Functions
function sortUserName() {
    var userName = window.prompt("Hi, Please tell me your name so I can sort the letters.");
    console.log("userName =", userName);

    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    //sort array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    //join array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted; //return sorted
}

  
function main() {
    //output
    document.writeln("Oh hey, I've sorted your name: ", sortUserName(), "</br>");
}

main();
  