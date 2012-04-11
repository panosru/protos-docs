#!/usr/bin/env node

console.log('» Starting application');

// Supress default output
process.env.NODE_ENV = 'production';

var app = require('../boot.js'),
    cp = require('child_process'),
    fs = require('fs'),
    Multi = protos.require('multi');
    
var multi = new Multi(app);

app.onInitialize(function() {
  
  console.log('» Building documentation');
  
  var cmd = '\
 rm -Rf build/;\
 mkdir build build/css build/js;\
 cp -Rf public/images public/docs build;\
 cp public/robots.txt build/;\
 cp public/css/client.min.css build/css/;\
 cp public/js/client.min.js public/js/jquery-1.7.1.min.js build/js/;\
';

  // console.exit(cmd);
  
  cp.exec(cmd, function(err) {
    
    if (err) console.exit(err);
    
    process.chdir('build');
    
    multi.curl('/index.html');
    multi.curl('/guide.html');
    multi.curl('/middleware.html');
    multi.curl('/404');
    
    multi.exec(function(err, results) {
      if (err) console.exit(err);

      fs.writeFileSync('index.html', results[0], 'utf8');
      fs.writeFileSync('guide.html', results[1], 'utf8');
      fs.writeFileSync('middleware.html', results[2], 'utf8');
      fs.writeFileSync('404.html', results[3], 'utf8');
      
      console.exit('» Build complete');
      
    });
    
  });

});