const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var patientSchema = new Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    address:{type:String,required:true},
    contactNumbers:[{contactNumber:{type:Number}}],
    locations:[{location:{type:String}}]
});

module.exports = mongoose.model('Patient',patientSchema);