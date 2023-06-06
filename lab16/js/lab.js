// lab.js - This js file is to experiment with JSON from APIs.
// Author: Tony Pau
// Date: June 5, 2023

var startURL = "https://xkcd.com/";
var endURL = "info.0.json";

function getAndPutData(num) {
    if (typeof num === 'undefined') {
        numStr = "";
    }
    else {
        numStr = num.toString() + "/";
    }
    var trueURL = startURL + numStr + endURL;
    console.log("Here is the URL: ", trueURL);
    $.ajax ({
        url: trueURL,
        data: {},
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            var comicObj = data;
            var html = 
            `
            <div id="comic">
                <h2>${comicObj.title}</h2>
                <img src="${comicObj.img}" title="${comicObj.alt}"><br>
                <button id="prev-button">Previous</button>
                <button id="next-button">Next</button>
            </div>
            `;
            $("#output").html(html);

            // button prev
            $("#prev-button").click(function() {
                getAndPutData(comicObj.num - 1);
            })

            // button next
            $("#next-button").click(function() {
                getAndPutData(comicObj.num + 1);
            })
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    })
}

getAndPutData();