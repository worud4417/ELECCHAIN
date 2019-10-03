var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var roleSchema = new Schema({
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

module.exports = mongoose.model("role",roleSchema);