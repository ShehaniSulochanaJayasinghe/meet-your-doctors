const router = require('express').Router();
const Channeling = require('../models/channeling');

router.route('/add').post((req,res)=>{
    const {id,appointmentId,date,time} = req.body;
    var newChanneling = new Channeling({
        id,
        appointmentId,
        date,
        time
    });
    newChanneling.save().then(()=>{
        res.json("Chanelling Added.");
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/').get((req,res)=>{
    Channeling.find().then((channelings)=>{
        res.json(channelings);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/update/:id').put((req,res)=>{
    var channelingId = req.params.id;
    const {id,appointmentId,date,time} = req.body;
    var updateChanneling = {
        id,
        appointmentId,
        date,
        time
    }
    Channeling.findByIdAndUpdate(channelingId,updateChanneling).then((update)=>{
        res.json(update);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/delete/:id').delete((req,res)=>{
    var channelingId = req.params.id;
    Channeling.findByIdAndDelete(channelingId).then((channeling)=>{
        res.json(channeling);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/:id').get((req,res)=>{
    var channelingId = req.params.id;
    Channeling.findById(channelingId).then((channeling)=>{
        res.json(channeling);
    }).catch((err)=>{
        res.send(err);
    });
})

module.exports = router;