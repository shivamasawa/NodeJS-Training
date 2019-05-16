var fs = require('fs');

// // Read file sync
// var readMe = fs.readFileSync('read.txt', 'utf8');
// console.log(readMe);

// // Write file sync
// fs.writeFileSync('write.txt', readMe);

// Read file
fs.readFile('read.txt', 'utf8', (err, data) => {
    console.log(data);
})

// Write file 
fs.readFile('read.txt', 'utf8', function(err, data){
    fs.writeFile('write2.txt', data);
})

console.log('Hi JavaScript');