var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    ID:{
        type:String,
        required:true
    },
    PASSWORD:{
        type:String,
        required:true
    },
    NAME:{
        type:String,
        required:true
    },
    CARNUMBER:{
        type:String,
        required:false,
        default:"0"
    },
    EMAIL:{
        type:String,
        required:true
    },
    JOINDATE:{
        type:Date,
        default:new Date()
    }
});

module.exports = mongoose.model("customer",customerSchema);