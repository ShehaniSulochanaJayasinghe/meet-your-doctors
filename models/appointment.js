const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var appointmentSchema = new Schema({
    id:{type:String,required:true},
    date:{type:Date,required:true},
    time:{type:Number},
    doctorId:{type:String,required:true},
    patientId:{type:String,required:true}
});

module.exports = mongoose.model('Appointment',appointmentSchema);