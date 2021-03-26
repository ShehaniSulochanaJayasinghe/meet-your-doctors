const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var channelingSchema = new Schema({
    id:{type:String,required:true},
    appointmentId:{type:String,required:true},
    date:{type:Date},
    time:{type:String}
});

module.exports = mongoose.model('Channeling',channelingSchema);