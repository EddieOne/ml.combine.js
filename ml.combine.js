// Walks a directory of files and combines them into one big text file

var fs = require('fs');
var walk = require('walk');
var input = './epubtxt';
var output = 'alltext';

var walker  = walk.walk(input, { followLinks: false });
var count = 0;

walker.on('file', function(root, stat, next) {
  var data = fs.readFileSync(root + '/' + stat.name, 'utf8');
  fs.appendFileSync(output, data + '\n\n');
  console.log(count);
  count++;
  next();
});
