var mongoose = require("mongoose");
var rollback = require("mongoose-rollback");

var Schema = mongoose.Schema;

var producerSchema = new Schema({
    ID:{
        type:String,
        required:true
    },
    ACCOUNT:{
        type:String,
        required:true,
    },    
    BALANCE:{
        type:Number,
        default:0
    }

});

module.exports = mongoose.model("producer",producerSchema);