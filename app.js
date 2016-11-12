

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose'),
  dataSeeder = require('data-seeder');

mongoose.connect(config.db);
var db = mongoose.connection;

/*var dataSeederPromise = dataSeeder.run({scriptDirPath:config.root+'/app/setUpScripts/',mongo:true});
dataSeederPromise.then(function(){*/
  db.on('error', function () {
    throw new Error('unable to connect to database at ' + config.db);
  });

  var models = glob.sync(config.root + '/app/models/*.js');
  models.forEach(function (model) {
    require(model);
  });
  var app = express();

  var server = require('http').Server(app);
  server.listen(config.port, function () {
    console.log('Express server listening on port ' + config.port);
  });
  require('./config/express')(app,config);




