var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var slotSchema = new Schema({
	'slot_time' : String,
	'slot_date' : String,
	'created_at' : Date
});

var slot = mongoose.model('slot', slotSchema);

module.exports = slot;
