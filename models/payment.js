const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var paymentSchema = new Schema({
    id:{type:String,required:true},
    amount:{type:Number,required:true},
    patientId:{type:String,required:true},
    doctorId:{type:String,required:true}
});

module.exports = mongoose.model('Payment',paymentSchema);