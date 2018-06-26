var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    email: {type:String, required:true},
    hallname: {type:String, required:true},
    Date: {type:String, required:true},
    timeto: {type:String, required:true},
    timefrom: {type:String, required:true},
    reserve_person: {type:String, required:true},
    reason:{type:String, required:true},
    permissonedby: {type:String, required:true},
    is_accepted:{type:Boolean}

});


module.exports = mongoose.model('Reservation', schema);