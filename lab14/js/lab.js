$("#my-button").click(function() {
    let x = 15 * 4;
    debugger;   //debugger will prevent the next line from running if console or debugger is open
    $("#output").html("15 * 5 = " + x);
})