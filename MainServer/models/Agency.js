var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var agencySchema = new Schema({
    ID:{
        type:String,
        required:true
    },
    PASSWORD:{
        type:String,
        required:true
    },
    JOINDATE:{
        type:Date,
        default:new Date()
    },
    ACCOUNT:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("agency",agencySchema);