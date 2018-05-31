var express = require('express');
var router = express.Router();
var appointmentController = require('../controllers/appointmentController.js');


//api function export
module.exports = function(app) {
/*
 * GET
 */
app.get('/appointment', appointmentController.list);

/*
 * GET
 */
app.get('/appointment/:id', appointmentController.show);

/*
 * POST
 */
app.post('/appointment', appointmentController.create);

/*
 * PUT
 */
app.put('/appointment/:id', appointmentController.update);

/*
 * DELETE
 */
app.delete('/appointment/:id', appointmentController.remove);

};
