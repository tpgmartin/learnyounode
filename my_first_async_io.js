var fs = require('fs');
var new_lines;

function read(callback) {
    fs.readFile(process.argv[2], function doneReading(err, file) {
        new_lines = file.toString().split('\n').length - 1;
        callback()
    })
}

function log() {
    console.log(new_lines);
}

read(log);