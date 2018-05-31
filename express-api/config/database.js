var mongoose = require('mongoose');
var config = require('./config');

// avoid mongoose library warning
mongoose.Promise = global.Promise;

mongoose.connect(config.dbhost);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
      console.log("Database is connected");
});
