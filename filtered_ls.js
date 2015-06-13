var fs = require('fs');
var path = require('path');
var extension = '.' + process.argv[3]

fs.readdir(process.argv[2], function (err, list) {
    filteredList = list.filter(function (file) { return path.extname(file) === extension; })
    filteredList.forEach(function (file) {console.log(file);});
})