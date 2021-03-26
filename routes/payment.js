const router = require('express').Router();
const Payment = require('../models/payment');

router.route('/add').post((req,res)=>{
    const {id,amount,patientId,doctorId} = req.body;

    var newPayment = new Payment({
        id,
        amount,
        patientId,
        doctorId
    });

    newPayment.save().then(()=>{
        res.json("Payment Added.");
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/').get((req,res)=>{
    Payment.find().then((payments)=>{
        res.json(payments);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/update/:id').put((req,res)=>{
    var paymentId = req.params.id;
    const {id,amount,patientId,doctorId} = req.body;
    var updatePayment = {
        id,
        amount,
        patientId,
        doctorId
    };
    Payment.findByIdAndUpdate(paymentId,updatePayment).then((update)=>{
        res.json(update);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/delete/:id').delete((req,res)=>{
    var paymentId = req.params.id;
    Payment.findByIdAndDelete(paymentId).then((payment)=>{
        res.json(payment);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/:id').get((req,res)=>{
    var paymentId = req.params.id;
    Payment.findById(paymentId).then((payment)=>{
        res.json(payment);
    }).catch((err)=>{
        res.send(err);
    });
})

module.exports = router;