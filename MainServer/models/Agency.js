/**
 * main example server 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
 * agency schema source
 * use mongodb
 * use mongoose
 */

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
    }
});

module.exports = mongoose.model("agency",agencySchema);