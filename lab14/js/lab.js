// lab.js - This js file is to experiment breakpoints with debugger
// Author: Tony Pau
// Date: May 29, 2023

$("#my-button").click(function() {
    let x = 23 * 6;
    debugger;   //debugger will prevent the next line from running if console or debugger is open
    $("#output").html("23 * 6 = " + x);
})