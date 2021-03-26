const router = require('express').Router();
let Doctor = require('../models/doctor');

router.route('/add').post((req, res) => {
    const { name, id, channelingCentre, address, hospital, nursingHome, qualifications, rating, noOfRaters, specialities, contactNumbers } = req.body;
    var newDoctor = new Doctor({
        name,
        id,
        channelingCentre,
        address,
        hospital,
        nursingHome,
        qualifications,
        rating,
        noOfRaters,
        specialities,
        contactNumbers
    });
    newDoctor.save().then(() => {
        res.json("Doctor Added.");
    }).catch((err) => {
        res.send(err);
    });
})

router.route('/').get((req, res) => {
    Doctor.find().then((doctors) => {
        res.json(doctors);
    }).catch((err) => {
        res.send(err);
    })
})

router.route('/update/:id').put((req, res) => {
    const doctorId = req.params.id;
    const { name, id, channelingCentre, address, hospital, nursingHome, qualifications, rating, specialities, contactNumbers } = req.body;
    var updateDoctor = {
        name,
        id,
        channelingCentre,
        address,
        hospital,
        nursingHome,
        qualifications,
        rating,
        specialities,
        contactNumbers
    };
    var update = Doctor.findByIdAndUpdate(doctorId, updateDoctor).then((update) => {
        res.json(update);
    }).catch((err) => {
        res.send(err);
    });
})


router.route('/delete/:id').delete((req, res) => {
    var doctorId = req.params.id;
    var deleteDoctor = Doctor.findByIdAndDelete(doctorId).then((deleteDoctor) => {
        res.json(deleteDoctor);
    }).catch((err) => {
        res.send(err);
    });
})
//find the nearest and most suitable doctor at the provincial and district level.

router.route('/getDoctorsByLocation/:location').get(async (req, res) => {

    const location = req.params.location;

    const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
    
    const searchRgx = rgx(location);

    try {
        const doctors = await Doctor.find().or([
            { "address.province": { $regex: searchRgx, $options: "i" } },
            { "address.district": { $regex: searchRgx, $options: "i" } }
        ]);
        res.send(doctors);
    } catch (err) {
        res.status(500).send(err.message || 'Internal Server Error!')
    }
})

router.route('/:id').get(async (req, res) => {
    var doctorId = req.params.id;
    var doctor = await Doctor.findById(doctorId).then((doctor) => {
        res.json(doctor);
    }).catch((err) => {
        res.send(err);
    });
})

module.exports = router;