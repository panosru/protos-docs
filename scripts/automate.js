
/**
  You can load the application by doing `var app = require('boot.js')`. This allows you
  to manipulate the application's configuration and automate any type of tasks.
  
  During bootstrap, the `corejs` global will be available to you.
 */

// Supress default output
process.env.NODE_ENV = 'silent';

var app = require('../boot.js'),
    util = require('util'),
    Multi = corejs.require('multi');

app.onInitialize(function() {
  
  // Seeds the users model with sample data
  // seedUsers();

  console.exit("Nothing to do...");

});

function seedUsers() {

  // Contains a multi-wrapped object with all model methods.
  // Have in mind that in order for the models to be activated, the
  // database configuration must be present in config/database.js
  var model = new Multi(app.model);
  
  // View the available methods provided by the model object:
  // console.exit(model);

  model.addUser({user: 'username1', pass: 'password1'});
  model.addUser({user: 'username2', pass: 'password2'});
  model.addUser({user: 'username3', pass: 'password3'});
  model.addUser({user: 'username4', pass: 'password4'});
  
  model.exec(function(err, results) {
    if (err) console.exit(err);
    else console.exit(util.format("Successfully added %s items", results.length));
  });

}