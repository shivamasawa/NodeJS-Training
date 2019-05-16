var req = require('request');

var getGoogle = () => {
    req('http://www.google.com',response => {
        console.log('Google');
    })
}

var getYahoo = callback1 => {
    req('http://www.yahoo.com',response => {
        console.log('Yahoo');
        callback1();
    })
}

var getBing = (callback1, callback2) => {
    req('http://www.bing.com',response => {
        console.log('Bing');
        callback1(callback2);
    })
}

getBing(getYahoo,getGoogle);