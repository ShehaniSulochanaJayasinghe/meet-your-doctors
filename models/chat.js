const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var chatSchema = new Schema({
    id:{type:String,required:true},
    description:{type:String,required:true}
});

module.exports = mongoose.model('Chat',chatSchema);