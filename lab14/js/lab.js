$("#my-button").click(function() {
    let x = 23 * 6;
    debugger;   //debugger will prevent the next line from running if console or debugger is open
    $("#output").html("23 * 6 = " + x);
})