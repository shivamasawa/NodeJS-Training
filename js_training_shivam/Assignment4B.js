var rp = require('request-promise');

var url1 = {
    url : 'http://www.google.com',
    resolveWithFullResponse : true
}
var url2 = {
    url : 'http://www.yahoo.com',
    resolveWithFullResponse : true
}
var url3 = {
    url : 'http://www.youtube.com',
    resolveWithFullResponse : true
}

rp(url1).then(response => {
    console.log("Google's Code : "+response.statusCode);
    return rp(url2);
}).then(response => {
    console.log("Yahoo's Code : "+response.statusCode);
    return rp(url3);
}).then(response => {
    console.log("YouTube's Code : "+response.statusCode);
})