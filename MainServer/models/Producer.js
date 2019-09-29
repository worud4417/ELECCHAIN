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
    CHARGE:{
        type:Number,
        required:true
    },
    JOINDATE:{
        type:Date,
        default:new Date()
    }
});

module.exports = mongoose.model("producer",producerSchema);