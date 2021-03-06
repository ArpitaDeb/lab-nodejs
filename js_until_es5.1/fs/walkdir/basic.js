var fs = require('fs');

// http://stackoverflow.com/q/5827612/
function walk(dir, done) {
  var results = [];
  fs.readdir(dir, function (err, list) {
    if (err) {
      return done(err);
    }
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) {
        return done(null, results);
      }
      file = dir + '/' + file;
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function (err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    }());
  });
}

//------------------------------------------------------------------------------

var dirname = '../../standalone';

var output = '../output/walkdir.result.txt';


walk(dirname, function(err, results) {

  if(err) {
    console.log('Error: ', err);
    return;
  }

  var resultTxt = '\n  walkdir/basic.js\n\n';

  results.forEach(function(filename) {
    resultTxt += filename + '\n';
  });

  console.log(resultTxt);

  writeFile( output, resultTxt );

});


function writeFile(filename, content) {

  var writer = require('../libs/writer');

  writer( filename, content )
    .then(function() {
      console.log('It\'s saved!');
    });

}
