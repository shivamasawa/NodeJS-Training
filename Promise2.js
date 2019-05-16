var rp = require('request-promise');

rp('http://www.yahoo.com').then(Response => {
    console.log('Yahoo Launched');
    return rp('http://www.google.com')
}).then(Response => {
    console.log('Google Launched');
})