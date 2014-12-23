'use strict';

var fs = require('fs');
var mkdirp = require('mkdirp');
var to5 = require('6to5');

mkdirp.sync('./dist');

to5.transformFile('index.js', {
  'modules': ['commonInterop']
}, function (err, result) {
  if (err) { console.log('Error : ' + err.message); }
  fs.writeFileSync('./dist/build.js', result.code);
});
