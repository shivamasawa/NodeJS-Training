var rp = require('request-promise');

rp('http://www.google.com').then(function(response){
    console.log('Google Launched')
    return rp('http//www.yahoo.com')
}).catch(function(err){
    console.log('URL is not correct')
    return rp('http//www.yahoo.com')
}).catch(err => {
    console.log('Yahoo Launched')
})