var req = require('request');

var google = (cb1,cb2) => {
    req('http://www.google.com', (error, response) => {
        console.log("Google's Code : "+ response.statusCode)
        cb1(cb2);
    })
}

var yahoo = cb => {
    req('http://www.yahoo.com', (error, response) => {
        console.log("Yahoo's Code : "+response.statusCode)
        cb();
    })
}

var youTube = () => {
    req('http://www.youtube.com', (error, response) => {
        console.log("YouTube's Code : "+response.statusCode)
    })
}

google(yahoo,youTube);