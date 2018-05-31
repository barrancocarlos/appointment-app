var express = require('express');
var router = express.Router();
var slotController = require('../controllers/slotController.js');


//api function export
module.exports = function(app) {
/*
 * GET
 */
app.get('/slot', slotController.list);

/*
 * GET
 */
app.get('/slot/:id', slotController.show);

/*
 * POST
 */
app.post('/slot', slotController.create);

/*
 * PUT
 */
app.put('/slot/:id', slotController.update);

/*
 * DELETE
 */
app.delete('/slot/:id', slotController.remove);

};
