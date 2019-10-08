/**
 * main example server 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
 * producer schema source
 * use mongodb
 * use mongoose
 */

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var producerSchema = new Schema({
    ID:{
        type:String,
        required:true
    },
    PASSWORD:{
        type:String,
        required:true
    },
    CHARGERATE:{
        type:Number,
        required:true
    },
    JOINDATE:{
        type:Date,
        default:new Date()
    }
});

module.exports = mongoose.model("producer",producerSchema);