var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var slot = require('./slotModel');

var appointmentSchema = new Schema({
	'name' : String,
	'email' : String,
	'slots' : {type: mongoose.Schema.Types.ObjectId, ref: 'slot'},
	'created_at' : Date
});

module.exports = mongoose.model('appointment', appointmentSchema);
