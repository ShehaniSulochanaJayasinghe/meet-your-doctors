const router = require('express').Router();
const Patient = require('../models/patient');

router.route('/add').post((req,res)=>{
    const {id,name,address,contactNumbers,locations} = req.body;

    var newPatient = new Patient({
        id,
        name,
        address,
        contactNumbers,
        locations
    });

    newPatient.save().then(()=>{
        res.json("Patient Added.");
    }).catch(()=>{
        res.send(err);
    });
})

router.route('/').get((req,res)=>{
    Patient.find().then((patients)=>{
        res.json(patients);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/update/:id').put((req,res)=>{
    var patientId = req.params.id;
    const {id,name,address,contactNumbers,locations} = req.body;
    var updatePatient = {
        id,
        name,
        address,
        contactNumbers,
        locations
    };
    var update = Patient.findByIdAndUpdate(patientId,updatePatient).then((update)=>{
        res.json(update);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/delete/:id').delete((req,res)=>{
    var patientId = req.params.id;
    Patient.findByIdAndDelete(patientId).then((patient)=>{
        res.json(patient);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/:id').get((req,res)=>{
    var patientId = req.params.id;
    Patient.findById(patientId).then((patient)=>{
        res.json(patient);
    }).catch((err)=>{
        res.send(err);
    });
})

module.exports = router;