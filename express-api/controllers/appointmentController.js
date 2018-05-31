var appointmentModel = require('../models/appointmentModel.js');
var slotModel = require('../models/slotModel.js');

/**
 * appointmentController.js
 *
 * @description :: Server-side logic for managing appointments.
 */
module.exports = {

    /**
     * appointmentController.list()
     */
    list: function (req, res) {
        appointmentModel.find(function (err, appointments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting appointment.',
                    error: err
                });
            }
            slotModel.populate(appointments, {path: "slots"},function(err, data) {
                return res.json(appointments);
            });
            
        });
    },

    /**
     * appointmentController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        appointmentModel.findOne({_id: id}, function (err, appointment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting appointment.',
                    error: err
                });
            }
            if (!appointment) {
                return res.status(404).json({
                    message: 'No such appointment'
                });
            }
            return res.json(appointment);
        });
    },

    /**
     * appointmentController.create()
     */
    create: function (req, res) {
        var slot = new slotModel({
            slot_time : req.body.slot_time,
            slot_date : req.body.slot_date,
            created_at : Date.now()
        });
        slot.save();

        var appointment = new appointmentModel({
			name : req.body.name,
			email : req.body.email,
			slots: slot._id,
			created_at : req.body.created_at

        });

        appointment.save(function (err, appointment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating appointment',
                    error: err
                });
            }
            return res.status(201).json(appointment);
        });
    },

    /**
     * appointmentController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        appointmentModel.findOne({_id: id}, function (err, appointment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting appointment',
                    error: err
                });
            }
            if (!appointment) {
                return res.status(404).json({
                    message: 'No such appointment'
                });
            }

            appointment.name = req.body.name ? req.body.name : appointment.name;
			appointment.email = req.body.email ? req.body.email : appointment.email;
			appointment.slots = req.body.slots ? req.body.slots : appointment.slots;
			appointment.created_at = req.body.created_at ? req.body.created_at : appointment.created_at;
			
            appointment.save(function (err, appointment) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating appointment.',
                        error: err
                    });
                }

                return res.json(appointment);
            });
        });
    },

    /**
     * appointmentController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        appointmentModel.findByIdAndRemove(id, function (err, appointment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the appointment.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
