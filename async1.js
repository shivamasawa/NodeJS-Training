var rp = require('request-promise');

url1 = {
    url : 'http://www.google.com',
    resolveWithFullResponse : true
}
url2 = {
    url : 'http://www.yahoo.com',
    resolveWithFullResponse : true
}
url3 = {
    url : 'http://www.youtube.com',
    resolveWithFullResponse : true
}

var display1 = async() => {
    let p1 = await rp(url1);
    console.log('Google Code : '+p1.statusCode);
    p1 = await rp(url2);
    console.log('Yahoo Code : '+p1.statusCode);
    p1 = await rp(url3);
    console.log('YouTube Code : '+p1.statusCode);
}
display1();