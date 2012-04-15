var fs = require('fs'),
    args = process.argv,
    _ = require('./underscore'),
    googlerese = require('./translate');

function translateline(line) {
  return googlerese(line);
};

var input = args[2];
var output = args[3];

var data = fs.readFileSync( input, 'ascii' );

var lines = data.split('\n');

var yeah = _.chain(lines)
            .rest(1)
            .reject(function(line) { return line.length === 0; })
            .map(translateline)
            .map( function(line, index) { return 'Case #' + (index+1) + ': ' + line; } )
            .reduce(function(memo, line, index) { return memo + '\n' + line; })
            .value();

fs.writeFileSync(output, yeah, 'ascii');
