var req = require('request');

var searchEngines = () => {
    req('http://www.bing.com',response => {
        console.log('Bing Launched');
        req('http://www.yahoo.com',response => {
            console.log('Yahoo Launched');
            req('http://www.google.com',response => {
                console.log('Google Launched');
            })
        })
    })
}
searchEngines();