var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    hallname: {type:String, required:true},
    date_time: {type:String, required:true},
    reserve_person: {type:String, required:true},
    reseaon:{type:String, required:true},
    permission_by: {type:String, required:true}
    is_accepted:{type:Boolean}

});

module.exports = mongoose.model('Reservation', schema);