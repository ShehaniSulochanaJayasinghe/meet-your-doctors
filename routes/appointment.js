const router = require('express').Router();
const Appointment = require('../models/appointment');

router.route('/add').post((req,res)=>{
    const {id,date,time,doctorId,patientId} = req.body;
    var newAppointment = new Appointment({
        id,
        date,
        time,
        doctorId,
        patientId
    });
    newAppointment.save().then(()=>{
        res.json("Appointment Added.");
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/').get((req,res)=>{
    Appointment.find().then((appointments)=>{
        res.json(appointments);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/update/:id').put((req,res)=>{
    var appointmentId = req.params.id;
    const {id,date,time,doctorId,patientId} = req.body;
    var updateAppointment = {
        id,
        date,
        time,
        doctorId,
        patientId
    };
    Appointment.findByIdAndUpdate(appointmentId,updateAppointment).then((update)=>{
        res.json(update);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/delete/:id').delete((req,res)=>{
    var appointmentId = req.params.id;
    Appointment.findByIdAndDelete(appointmentId).then((appointment)=>{
        res.json(appointment);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/:id').get((req,res)=>{
    var appointmentId = req.params.id;
    Appointment.findById(appointmentId).then((appointment)=>{
        res.json(appointment);
    }).catch((err)=>{
        res.send(err);
    });
})

module.exports = router;