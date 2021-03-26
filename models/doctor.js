const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var doctorSchema = new Schema({
    name:{type:String,required:true},
    id:{type:String,required:true},
    channelingCentre:{type:String},
    address:{province:{type:String},district:{type:String}},
    hospital:{type:String},
    nursingHome:{type:String},
    qualifications:{type:String},
    rating:{type:Number},
    noOfRaters:{type:Number},
    specialities:{type:String},
    contactNumbers:[{contactNumber:{type:Number}}]
});

module.exports = mongoose.model('Doctor', doctorSchema);