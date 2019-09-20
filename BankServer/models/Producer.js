var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var producerSchema = new Schema({
    ID:String,
    ACCOUNT:String,
    BALANCE:Number
});

module.exports = mongoose.model("producer",producerSchema);