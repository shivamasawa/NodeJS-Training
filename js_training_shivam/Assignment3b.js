var request = require('request');

function getYahoo() {
    request("http://www.yahoo.com", function(error, response, body) {
        console.log("Yahoo's Code : "+response.statusCode);
        getGoogle();
    });
}

function getGoogle() {
    request("http://www.google.com", function(error, response, body) {
        console.log("Google's Code : "+response.statusCode);
    });
}
getYahoo();